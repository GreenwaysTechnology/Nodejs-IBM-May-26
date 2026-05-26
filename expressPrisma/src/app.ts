import { prisma } from "./lib/prisma";
import express from 'express'
import { userRouter } from './routers/user.router.ts'
const app = express()
app.use(express.json())


app.use('/api/users', userRouter)

app.get('/', (req, res) => {
    res.json({ message: 'Home' })
})

app.listen(3000, () => {
    console.log("Server is Running")
})