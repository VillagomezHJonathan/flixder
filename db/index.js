const mongoose = require('mongoose')

mongoose
  .connect(`${process.env.MONGOOSE_URI}`)
  .then(() => {
    console.log('Successfully connected to the database')
  })
  .catch((err) => {
    console.error('Error connecting', err.message)
  })

const db = mongoose.connection

module.exports = db
