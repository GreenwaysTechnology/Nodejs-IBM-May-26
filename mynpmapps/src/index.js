const http = require('node:http')
const {sayGreet} = require('./lib/greeter.service')

const server = http.createServer((req,res)=>{
    const result = sayGreet()
    res.end(result)
})

server.listen(3000,()=>{
    console.log('Server is running!')
})