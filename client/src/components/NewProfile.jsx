import './NewProfile.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const NewProfile = () => {
  const [regions, setRegions] = useState([])
  const [providers, setProviders] = useState([])
  const [images, setImages] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const getData = async () => {
      const regionsRes = await axios.get('http://localhost:3001/regions')
      const providersRes = await axios.get('http://localhost:3001/providers')
      const imagesRes = await axios.get('http://localhost:3001/images')
      const genresRes = await axios.get('http://localhost:3001/genres')

      setRegions(regionsRes.data.regions)
      setProviders(providersRes.data.providers)
      setImages(imagesRes.data.images)
      setGenres(genresRes.data.genres)
    }

    getData()
  }, [])

  return (
    <div className="NewProfile">
      <h1>Create A New Profile</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Profile name"
          required
        />
      </form>
    </div>
  )
}

export default NewProfile
