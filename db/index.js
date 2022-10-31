const mongoose = require('mongoose')
require('dotenv').config()

let dbUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017/flixderDatabase'

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Successfully connected to the database')
  })
  .catch((err) => {
    console.error('Error connecting', err.message)
  })

const db = mongoose.connection

module.exports = db
