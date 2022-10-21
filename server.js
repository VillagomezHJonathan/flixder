if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const db = require('./db')
const genresRoutes = require('./routes/genres')
const regionsRoutes = require('./routes/regions')
const profilesRoutes = require('./routes/profiles')
const moviesRoutes = require('./routes/movies')
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())

app.use('/genres', genresRoutes)
app.use('/regions', regionsRoutes)
app.use('/profiles', profilesRoutes)
app.use('/movies', moviesRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
