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
    res.json({message:'Greet GET!'})
})

app.post("/api/greet", function (req, res) {
    res.json({message:'Greet Post!'})
})

app.delete("/api/greet", function (req, res) {
    res.json({message:'Greet Delete!'})
})

app.put("/api/greet", function (req, res) {
    res.json({message:'Greet PUT!'})
})


app.listen(PORT, () => {
    console.log(`Express server is running @ ${PORT}`)
})