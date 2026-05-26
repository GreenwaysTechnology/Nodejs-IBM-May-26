const mongoose = require('mongoose')

//delclare schema and later create model
const postSchema = mongoose.Schema({
    title: String,
    content: String
})
//create model and export 
module.exports = mongoose.model("Post", postSchema)