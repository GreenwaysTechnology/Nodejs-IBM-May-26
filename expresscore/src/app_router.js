const express = require('express')
const { findAll } = require('./routers/user.router')
// const userRouter = require('./routers/user.router')

const PORT = 3000

// console.log(express())
const app = express()

//attaching routers with app
// app.use('/api/users',userRouter)
app.use('/api/users', require('./routers/user.router'))


//apis - index route
app.get('/', (req, res) => {
    res.end('Hello Express!')
})



const server = app.listen(PORT, () => {
    console.log(`Express server is running @ ${server.address().port}`)
})