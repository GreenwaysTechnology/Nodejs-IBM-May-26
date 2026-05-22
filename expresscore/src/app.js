const express = require('express')
const PORT = 3000

const app = express()

app.use('/api/users',require('./routers/user.router'))

//router registration
//global middleware


app.listen(PORT, () => {
    console.log(`Express server is running @ ${PORT}`)
})