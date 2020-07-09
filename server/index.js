const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const helmet = require("helmet")
const err = require('./middlewares/error')
const mongoose = require('mongoose')
const posts = require('./api/posts')
const cors = require('cors')

// Database connection 


mongoose.connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// App configuration
const app = express()
const PORT = process.env.PORT || 8080

// Middlewares or other modules
app.use(morgan('common'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet())
app.use(cors({
  origin: 'http://localhost:3000//'
}))

// Routes
app.use('/api',posts)

// Error handling middlewares
app.use(err.notFound)
app.use(err.errorHandler)

app.listen(PORT,()=>{
  console.log(`App is listening at localhost:${PORT}`)
})