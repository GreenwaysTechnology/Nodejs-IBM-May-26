const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs') //password hashing

const app = express()
const PORT = 3000
app.use(bodyParser.json())

const privateKey = 'your-secret-key'


//simulate actual database using array
const users = []

//registration
app.post('/register', async (req, res) => {
    const { username, password } = req.body
    //hash the password before storing into db
    const hashedPassword = await bcrypt.hash(password, 10)
    users.push({ username, password: hashedPassword })
    console.log(users)
    res.status(201).json({ message: 'User Registered' })
})

//registration
app.post('/login', async (req, res) => {
    const { username, password } = req.body
    //find users in the users array
    const user = users.find(u => u.username === username)
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid Credentials' })
    }
    //if valid user, generate token and send that token to user
    const token = jwt.sign({ username: user.username }, privateKey, { 'expiresIn': '1hr' })
    res.json({ token })
})
//middleware to intercept auth

//middleware to intercept before access dashboard
function authicateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No Token Provided' })
    }
    jwt.verify(token, privateKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or Expired Token' })
        }
        req.user = user
        next()
    })
}

//route to be protected
app.get('/dashboard', authicateToken, (req, res) => {
    res.json({ message: `Welcome ${req.user.username}` })
})

app.listen(PORT, () => {
    console.log('Express Server')
})