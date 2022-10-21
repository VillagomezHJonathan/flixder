const { Region } = require('../models')

const getAllRegions = async (req, res) => {
  try {
    const regions = await Region.find()

    return res.status(201).json({
      regions
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const getRegionById = async (req, res) => {
  try {
    const { id } = req.params
    const region = await Region.findOne({ _id: id })

    return res.status(201).json({ region })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getAllRegions,
  getRegionById
}
