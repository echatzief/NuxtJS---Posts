const { Router } = require('express')
const Post = require('../models/Post')
const router = Router()

router.get('/posts', async (req,res,next)=>{
  try{
    res.json(await Post.find())
  } catch(err){
    next(err)
  }
})

router.post('/posts', async (req, res, next) => {
  try {
    const post = new Post(req.body)
    console.log(post)
    res.json(await post.save())
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(422)
    }
    next(err)
  }
})


module.exports = router