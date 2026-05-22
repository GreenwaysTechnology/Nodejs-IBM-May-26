const express = require('express')
const PORT = 3000

// console.log(express())
const app = express()

//midldleware 
app.use(function (req, res, next) {
    res.set("message", "Hello")
    console.log('Middleware1 is called!')
    next()
})
app.use(function (req, res, next) {
    res.set("name", "Subramanian Murugan")
    console.log('Middleware2 is called!')
    next()
})
app.use(function (req, res, next) {
    res.set("company", "IBM")
    console.log('Middleware3 is called!')
    next()
})
//apis
app.get('/', (req, res) => {
    res.end('Hello Express!')
})
app.get("/api/user", (req, res) => {
    // res.set("company", "IBM")
    res.json({ id: 1, name: 'A' })
})

app.get("/api/customer", (req, res) => {
    // res.set("company", "IBM")
    res.json({ id: 1, name: 'A' })
})
app.listen(PORT, () => {
    console.log(`Express server is running @ ${PORT}`)
})