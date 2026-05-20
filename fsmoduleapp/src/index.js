const fs = require('node:fs/promises')
const EventEmitter = require('node:events')
const path = require('node:path')

//event emitter class which watches file size
class LogRotator extends EventEmitter {
    constructor(logFilePath, maxSizeBytes = 1024 * 1024 * 10) {
        super()
        this.logFilePath = logFilePath
        this.maxSizeBytes = maxSizeBytes
        this.checkInterval = null
    }
    startMonitoring(intervalMS = 2000) {
        console.log(`[Rotator] started Monitoring ${this.logFilePath}`)
        this.checkInterval = setInterval(async () => {
            try {
                //1. Check the file size using fs.stat
                const stats = await fs.stat(this.logFilePath)
                if (stats.size >= this.maxSizeBytes) {
                    console.log(`[Rotator] File size (${stats.size} bytes) exceeded limit
                        (${this.maxSizeBytes}) bytes`)
                    //2.Emit the 'rotat' event
                    this.emit('rotate')
                }
            }
            catch (err) {
                //if file does not exit , ignore the error and wait for logs to be written
                if (err.code !== 'ENOENT') {
                    console.error('[Rotator Error]', error)
                }
            }
        }, intervalMS);
    }
    stopMonitoring() {
        if (this.checkInterval) {
            clearInterval(this.checkInterval)
        }
    }
}

console.log('create File rotator')
const LOG_FILE = path.join(__dirname, 'app.log')
//create instance of LogRatotor
const rotator = new LogRotator(LOG_FILE, 500)
//bind event 
rotator.on('rotate', async () => {
    //Tem pause monitoring during rotation to duplicate triggers
    rotator.stopMonitoring()
    //create timestamp so that file could be 
    const timestamp = new Date().toISOString().replace(/:/g, '-')
    const archivePath = path.join(__dirname, `app-archived-${timestamp}.log`)
    try {
        console.log(`[System] Rotating log file...`) //app.log to app-arch-datetime.log
        //Rename the old file
        await fs.rename(LOG_FILE, archivePath)
        console.log(`[System] Archived old log to : ${path.basename(archivePath)}`)
        //create a fresh app.log
        await fs.writeFile(LOG_FILE, `[${new Date().toISOString()}] \n`)
        console.log(`[System] created fresh app.log file`)


    }
    catch (err) {
        console.log(`[Rotation failed] ${err}`)
    }
    finally {
        //resume monitoring
        rotator.startMonitoring()
    }
});

//simulator
async function simulateAppLogs() {
    rotator.startMonitoring(1000) //check every 1 sec
    let count = 1;
    const logInterval = setInterval(async () => {
        //log entry number
        const logEntry = `[INFO] ${new Date().toISOString()} - This is dummy application log
         entry number ${count++} \n
        `
        try {
            await fs.appendFile(LOG_FILE, logEntry)
            process.stdout.write('.') //prints dots to show continuous writting
        }
        catch (err) {
            console.error('Failed to write log', err)
        }
    }, 200)
    //stop the whole simulation after 10 sec
    setTimeout(() => {
        clearInterval(logInterval)
        rotator.stopMonitoring()
        console.log('\n [Simulation] Stopped')
    }, 10000)
}

function main() {
    simulateAppLogs()
}
main()