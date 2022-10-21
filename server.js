if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const apiRoutes = require('./routes/api')
const PORT = process.env.PORT || 3001

const app = express()

app.use('/api', apiRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
