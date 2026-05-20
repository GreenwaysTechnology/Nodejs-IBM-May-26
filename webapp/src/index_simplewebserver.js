const http = require('node:http')

const PORT = 3000

//create HTTP server
const server = http.createServer((req,res)=>{
     res.write('Hello')
     res.end()
})

//start the server
server.listen(PORT,()=>{
    console.log(`HTTP server is listening at ${PORT}`)
})