require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000
app.use(bodyParser.json())



async function connectDb() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('Mongodb connected!')
    }
    catch (err) {
        console.log(err)
    }
}
connectDb()


app.use('/api/posts', require('./routers/post.router'))

const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})