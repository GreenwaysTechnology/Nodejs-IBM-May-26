const fs = require('node:fs')

const logFile = "./app.log"

function logMessage(level, message) {
    const timeStamp = new Date().toISOString()
    const fullMessage = `[${timeStamp}] [${level.toUpperCase()}] ${message} \n`
    //append fullMessage into file system
    fs.appendFile(logFile, fullMessage, (err) => {
        if (err) {
            console.log(`X Failed to write log`, err)
        }
    })
}
function info(msg) {
    logMessage('info', msg)
}
function error(msg) {
    logMessage('error', msg)
}
function warn(msg) {
    logMessage('warn', msg)
}

function main() {
    info('Web Server started on Port 3000')
    info('Database Server started on Port 1434')
    error('Unable to Start Message Broker')
    warn('High Memory Usage has been detected')

}
main()