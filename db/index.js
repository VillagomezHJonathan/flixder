const mongoose = require('mongoose')
require('dotenv').config()

let dbUrl = process.env.MONGODB_URI

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
