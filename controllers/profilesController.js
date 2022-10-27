const { Profile } = require('../models')

const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find()

    return res.status(201).json({
      profiles
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const getProfileById = async (req, res) => {
  try {
    const { id } = req.params
    const profile = await Profile.findOne({ _id: id })
      .populate('region')
      .populate('providers')
      .populate('fav_genre_ids')
      .populate('fav_movie_ids')

    return res.status(201).json({ profile })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const createProfile = async (req, res) => {
  try {
    const newProfile = await Profile.create(req.body)

    return res.status(201).json(newProfile)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params
    const deletedProfile = await Profile.findOneAndDelete({ _id: id })

    return res.status(201).json({ deletedProfile })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params
    const updatedProfile = await Profile.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    )

    return res.status(201).json({ updatedProfile })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getAllProfiles,
  getProfileById,
  createProfile,
  deleteProfile,
  updateProfile
}
