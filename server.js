if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const db = require('./db')
const genresRoutes = require('./routes/genres')
const regionRoutes = require('./routes/regions')
const PORT = process.env.PORT || 3001

const app = express()

app.use('/genres', genresRoutes)
app.use('/regions', regionRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
