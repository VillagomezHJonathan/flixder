const { Provider } = require('../models')

const getAllProviders = async (req, res) => {
  try {
    const providers = await Provider.find()

    return res.status(201).json({
      providers
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const getProviderById = async (req, res) => {
  try {
    const { id } = req.params
    const provider = await Provider.findOne({ _id: id })

    return res.status(201).json({ provider })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getAllProviders,
  getProviderById
}
