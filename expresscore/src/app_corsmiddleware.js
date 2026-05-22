const express = require('express')
const cors = require('cors')

const PORT = 3000
const app = express()

// app.use(cors()) // enable for all routes
// const corsOptions = {
//     origin: 'http://www.abc.com'
// }
// allow only from this url.
const corsOptions = {
    origin: 'http://127.0.0.1:5500'
}
app.use(cors(corsOptions))


// app.get('/products/:id', cors(), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for a Single Route'})
// })

app.get('/api/customers/:id', (req, res, next) => {
    res.json({ msg: 'cors enabled for only this particular' })
})

app.post('/api/customers', (req, res) => {
    res.status(201).json({ message: 'post' })
})


app.listen(PORT, () => {
    console.log(`Express server is running @ ${PORT}`)
})