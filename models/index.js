const mongoose = require('mongoose')
const profileSchema = require('./profile')
const regionSchema = require('./regions')
const genreSchema = require('./genres')
const movieSchema = require('./movies')

const Profile = mongoose.model('Profile', profileSchema)
const Region = mongoose.model('Region', regionSchema)
const Genre = mongoose.model('Genre', genreSchema)
const Movie = mongoose.model('Movie', movieSchema)

module.exports = {
  Profile,
  Region,
  Genre,
  Movie
}
