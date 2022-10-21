const mongoose = require('mongoose')
const userSchema = require('./user')
const regionSchema = require('./regions')
const genreSchema = require('./genres')
const movieSchema = require('./movies')

const User = mongoose.model('User', userSchema)
const Region = mongoose.model('Region', regionSchema)
const Genre = mongoose.model('Genre', genreSchema)
const Movie = mongoose.model('Movie', movieSchema)

module.exports = {
  User,
  Region,
  Genre,
  Movie
}
