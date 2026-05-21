const express = require('express')
const PORT = 3000

// console.log(express())
const app = express()


//apis - index route
app.get('/', (req, res) => {
    res.end('Hello Express!')
})
//users route
app.get('/api/users', (req, res) => {
    res.end('USERS route-GET')
})
app.post('/api/users', (req, res) => {
    res.end('USERS route-POST')

})
app.put('/api/users', (req, res) => {
    res.end('USERS route-PUT')

})
app.delete('/api/users', (req, res) => {
    res.end('USERS route-Delete')
})


const server = app.listen(PORT, () => {
    console.log(`Express server is running @ ${server.address().port}`)
})