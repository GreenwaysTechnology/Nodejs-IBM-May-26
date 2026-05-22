//create router
const express = require('express')
const { findAll } = require('../services/users.service')
const userRouter = express.Router()


//router middlewares
userRouter.use(function(req,res,next){
    res.set("userGlobal","userGlobal")
    next()
})
//router middlewares
userRouter.use('/api/users/:id',function(req,res,next){
    res.set("userById","userById")
    next()
})

userRouter.get('/',(req,res,next)=>{
    res.set("userGet","userGet")
    next()
})

//logic
userRouter.get('/', async (req, res) => {
    try {
        const users = await findAll()
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json({ err })
    }
})
//query params routes must come before path params
userRouter.get('/address', (req, res) => {
    const queryparams = req.query
    console.log(queryparams)
    res.status(200).json({ params: queryparams })
})


//dynamic route: route parameter
userRouter.get('/:id', (req, res) => {
    const id = req.params.id
    res.status(200).json({ id: id })
})


userRouter.post('/', (req, res) => {
    let data = ''
    req.on('data', (chunk) => {
        data += chunk
    })
    req.on('end', () => {
        const jsObject = JSON.parse(data)
        console.log(jsObject)
        res.status(200).json({ message: 'saved' })
    })

})
userRouter.put('/', (req, res) => {
    res.end('USERS route-PUT')

})
userRouter.delete('/', (req, res) => {
    res.end('USERS route-Delete')
})



module.exports = userRouter