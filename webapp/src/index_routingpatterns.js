const http = require('node:http')

const PORT = 3000

//create HTTP server
const server = http.createServer((req, res) => {
    // - url
    if (req.url === '/') {
        res.end('Home')
    } else if (req.url === '/about') {
        res.end('About Page')
    } else if (req.url === '/services') {
        res.end('Services')
    } else {
        res.end('404 Not Found Page')
    }
})

//start the server
server.listen(PORT, () => {
    console.log(`HTTP server is listening at ${PORT}`)
})

//attach server events
server.on('request', (req, res) => {
    console.log(`Request Received on , [${new Date().toISOString()}] URL ${req.url}, METHOD ${req.method} `)
})