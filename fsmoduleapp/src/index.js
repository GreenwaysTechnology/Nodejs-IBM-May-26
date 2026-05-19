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
                if(err.code!=='ENOENT'){
                    console.error('[Rotator Error]',error)
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



function main() {

}
main()