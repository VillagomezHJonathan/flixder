const { Schema } = require('mongoose')

const providerSchema = new Schema(
  {
    tmdb_id: { type: Number, required: true },
    provider_name: { type: String, required: true },
    logo_path: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = providerSchema
