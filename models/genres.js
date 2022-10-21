const { Schema } = require('mongoose')

const Genre = new Schema(
  {
    tmdb_id: { type: Number, required: true },
    name: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Genre
