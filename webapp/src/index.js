const http = require('node:http')

const PORT = 3000

//create HTTP server
const server = http.createServer((req, res) => {
    //read input
    let data = ''
    req.on('data', chunk => {
        data += chunk
    })
    req.on('end', () => {
        console.log(data)
        res.end('Saved ')
    })
})

//start the server
server.listen(PORT, () => {
    console.log(`HTTP server is listening at ${PORT}`)
})