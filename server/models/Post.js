const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title:{
    type:String,
    required:true,
  },
  description: String,
  cAt:{
    type:Date,
    default:Date.now
  }
})

const Post = mongoose.model('Post', PostSchema)
module.exports = Post