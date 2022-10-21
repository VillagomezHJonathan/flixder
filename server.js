if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const db = require('./db')
const genreRoutes = require('./routes/genre')
const PORT = process.env.PORT || 3001

const app = express()

app.use('/genres', genreRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
