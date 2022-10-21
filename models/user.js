const { Schema } = require('mongoose')

const User = new Schema(
  {
    name: { type: String, required: true },
    genre_ids: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
    movie_ids: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
  },
  { timestamps: true }
)

module.exports = User
