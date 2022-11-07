const { Schema } = require('mongoose')

const profileSchema = new Schema(
  {
    name: { type: String, required: true },
    profile_pic: { type: Schema.Types.ObjectId, ref: 'Image', required: true },
    region: { type: Schema.Types.ObjectId, ref: 'Region', required: true },
    providers: [
      { type: Schema.Types.ObjectId, ref: 'Provider', required: true }
    ],
    fav_genres: [{ type: Schema.Types.ObjectId, ref: 'Genre', required: true }],
    fav_movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
  },
  { timestamps: true }
)

module.exports = profileSchema
