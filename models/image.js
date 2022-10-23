const { Schema } = require('mongoose')

const imageSchema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = imageSchema
