const express = require('express')
const { findAll, save,findById,update,remove } = require('../services/post.service')


const postRouter = express.Router()
postRouter.get('/', async (req, res) => {
    try {
        const posts = await findAll()
        res.json(posts)
    }
    catch (err) {
        res.status(404).json({ err })
    }
})
postRouter.post('/', async (req, res) => {
    const post = req.body
    console.log(post)
    try {
        const savedPost = await save(post)
        res.status(201).json(savedPost)
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ err })
    }
})

postRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const post = await findById(id)
        if (post) {
            res.json(post)
        } else {
            res.json({ message: 'No Post Available' })
        }
    }
    catch (err) {
        res.status(400).json({ err })

    }
})

postRouter.put('/:id', async (req, res) => {
    const id = req.params.id
    const postInput = req.body
    try {
        const post = await update(id, postInput)
        res.json(post)
    }
    catch (err) {
        res.status(404).json({ err })
    }
})

postRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await remove(id)
        res.status(204).send()
    }
    catch (err) {
        res.status(400).json({ err: err.message })
    }
})
module.exports = postRouter