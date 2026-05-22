const express = require('express')
const PORT = 3000

// console.log(express())
const app = express()

//midldleware 
app.use(function(req,res,next){
    console.log('Middleware is called!')
    next()
})

//apis
app.get('/',(req,res)=>{
    res.end('Hello Express!')
})



app.listen(PORT,()=>{
    console.log(`Express server is running @ ${PORT}`)
})