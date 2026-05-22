const express = require('express')
const fs = require('node:fs')
const path = require('node:path')

const PORT = 3000

//middleware function 
function fileLoggerMiddleware(type = 'console') {
    return function (req, res, next) {
        const logFormat = `[${new Date().toISOString()}] - ${req.method} - ${req.url}\n`
        if (type === 'file') {
            fs.appendFileSync(path.join(__dirname, 'access.log'), logFormat)
            next()
        } else {
            console.log(logFormat)
            next()
        }
    }
}

const app = express()
app.use(fileLoggerMiddleware('file'))

app.get('/api/greet', (req, res) => {
    res.json({ message: 'Greet' })
})

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello' })
})

app.listen(PORT, () => {
    console.log(`Express server is running @ ${PORT}`)
})