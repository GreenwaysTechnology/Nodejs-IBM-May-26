const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000
const app = express()

//attaching body parser middleware
app.use(bodyParser.json())


app.post('/api/greet', (req, res) => {
    const payload = req.body
    console.log(payload)
    res.json({ message: 'saved' })
})



app.listen(PORT, () => {
    console.log(`Express server is running @ ${PORT}`)
})