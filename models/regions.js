const { Schema } = require('mongoose')

const Region = new Schema(
  {
    tmdb_iso: { type: String, required: true },
    english_name: { type: String, required: true },
    native_name: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Region
