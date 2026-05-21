const express = require('express')
const PORT = 3000

// console.log(express())
const app = express()


//apis
app.get('/',(req,res)=>{
    res.end('Hello Express!')
})



app.listen(PORT,()=>{
    console.log(`Express server is running @ ${PORT}`)
})