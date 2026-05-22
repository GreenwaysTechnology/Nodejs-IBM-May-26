const express = require('express')
const app = express()
const fs = require('node:fs')
const path = require('node:path')
const morgan = require('morgan')

const PORT =3000

// app.use(morgan('dev'))
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))


app.get('/api/greet',(req,res)=>{
    res.send('Hello')
})



const server = app.listen(PORT, () => {
    console.log(server)
    console.log(`Express server is running @ ${PORT}`)
})