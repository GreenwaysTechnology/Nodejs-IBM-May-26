const express = require('express')

const PORT = 3000


const app = express()

//apis - index route
app.get('/', (req, res) => {
    res.end('Hello Express!')
})

//url specific chaning - way 1
// app.get('/api/greet', function (req, res, next) {
//     console.log('Chain1')
//     next()
// }, function (req, res, next) {
//     console.log('Chain2')
//     next()
// }, (req, res) => {
//     res.end('Home')
// })

const chain1 = function (req, res, next) {
    console.log('Chain1')
    next()
}
const chain2 = function (req, res, next) {
    console.log('Chain2')
    next()
}
const chain3 = function (req, res, next) {
    console.log('Chain3')
    next()
}
// app.get('/api/greet', chain1, chain2, chain3, (req, res) => {
//     res.end('Home')
// })
const middlewareChains = [chain1, chain2, chain3]

app.get('/api/greet', middlewareChains, (req, res) => {
    res.end('Home')
})

const server = app.listen(PORT, () => {
    console.log(`Express server is running @ ${server.address().port}`)
})