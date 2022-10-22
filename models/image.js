const { Schema } = require('mongoose')

const imageSchema = new Schema(
  {
    url: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = imageSchema
