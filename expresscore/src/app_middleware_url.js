const express = require('express')
const PORT = 3000

// console.log(express())
const app = express()

//midldleware 

app.use(function (req, res, next) {
    res.set("company", "ibm")
    next()
})

app.get("/api/greet", function (req, res, next) {
    res.set("greeter", "Hello")
    next()
})

//middlewares 

//apis
app.get('/', (req, res) => {
    res.end('Hello Express!')
})

app.get("/api/greet", function (req, res) {
    res.json({message:'Greet!'})
})

app.get("/api/hello", function (req, res) {
    res.json({message:'Hello'})
})


app.listen(PORT, () => {
    console.log(`Express server is running @ ${PORT}`)
})