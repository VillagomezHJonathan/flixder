const { Schema } = require('mongoose')

const regionSchema = new Schema(
  {
    tmdb_iso: { type: String, required: true },
    name: { type: String, required: true },
    flag_image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = regionSchema
