const express = require('express')
const PORT = 3000

const app = express()

//configurable middleware
const middleware = function (param) {
    return function (req, res, next) {
        //midleware logic
        console.log(param)
        next()
    }
}
app.use(middleware('hello'))

app.get('/', (req, res) => {
    res.json({ home: 'Home' })
})

app.listen(PORT, () => {
    console.log(`Express server is running @ ${PORT}`)
})