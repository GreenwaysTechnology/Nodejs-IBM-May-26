const http = require('node:http')
const { findAll } = require('./services/todo.service')

const PORT = 3000

//create HTTP server
const server = http.createServer(async (req, res) => {

    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    try {
        const todos = await findAll()
        const jsonData = JSON.stringify(todos)
        res.end(jsonData)
    } catch (err) {
        res.end(JSON.stringify({ err }))
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