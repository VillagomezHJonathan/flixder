const { Schema } = require('mongoose')

const Profile = new Schema(
  {
    name: { type: String, required: true },
    fav_genre_ids: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
    fav_movie_ids: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
  },
  { timestamps: true }
)

module.exports = Profile
