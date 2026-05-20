const http = require('node:http')

const PORT = 3000

//create HTTP server
const server = http.createServer((req, res) => {
    //send json data
    const data = [{ id: 1, name: 'Subramanian' }, { id: 2, name: 'Murugan' }]
    const usersJSON = JSON.stringify(data)
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Keep-Alive': 'timeout=10'
    })
    res.write(usersJSON)
    res.end()
})

//start the server
server.listen(PORT, () => {
    console.log(`HTTP server is listening at ${PORT}`)
})
//increase server timeout
server.keepAliveTimeout = 10000 //10 secs
//attach server events
server.on('request', (req, res) => {
    console.log(`Request Received on , [${new Date().toISOString()}] URL ${req.url}, METHOD ${req.method} `)
})