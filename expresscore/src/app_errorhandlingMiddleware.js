const express = require('express')
const app = express()

const PORT = 3000

app.get('/api/user/:name', (req, res) => {
    const name = req.params.name
    if (name === 'admin') {
        res.send({ message: 'Welcome to Admin' })
    } else {
        throw new Error(`The user ${name} is not found`)
    }
})

//all error handling code(middleware ) must go at last of route.
//404 error handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `The Route ${req.originalUrl} not found!`
    })
})

//Error handler
app.use((err, req, res, next) => {
    console.log(err.message)
    res.status(500).json({
        success:false,
        message:err.message
    })
})

//start server
const server = app.listen(PORT, () => {
    console.log(`Express server is ready! at ${server.address().port}`)
})