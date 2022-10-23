const { Schema } = require('mongoose')

const profileSchema = new Schema(
  {
    name: { type: String, required: true },
    profile_pic: { type: String, required: true },
    region: { type: Schema.Types.ObjectId, ref: 'Region' },
    providers: [{ type: Schema.Types.ObjectId, ref: 'Provider' }],
    fav_genre_ids: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
    fav_movie_ids: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
  },
  { timestamps: true }
)

module.exports = profileSchema
