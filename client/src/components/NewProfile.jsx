import './NewProfile.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const NewProfile = () => {
  const [regions, setRegions] = useState([])
  const [providers, setProviders] = useState([])
  const [images, setImages] = useState([])
  const [genres, setGenres] = useState([])
  const [reqBody, setReqBody] = useState({
    name: '',
    profile_pic: '',
    region: '6352c64f9879eee933e71121',
    providers: [],
    fav_genre_ids: [],
    fav_movie_ids: []
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()
  }

  const handleChange = (evt) => {
    const target = evt.target

    setReqBody({ ...reqBody, [target.id]: target.value })
  }

  const handleCheckbox = (evt) => {
    const target = evt.target
    const arr = [...reqBody.providers]

    if (target.checked) {
      arr.push(target.id)
      setReqBody({ ...reqBody, providers: [...arr] })
    } else {
      const filtered = arr.filter((provider) => provider !== target.id)
      setReqBody({ ...reqBody, providers: [...filtered] })
    }
  }

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
      <form onSubmit={(evt) => handleSubmit(evt)}>
        <label htmlFor="name">Name</label>
        <input
          onChange={(evt) => handleChange(evt)}
          type="text"
          id="name"
          name="name"
          placeholder="Profile name"
          value={reqBody.name}
          required
        />

        <label htmlFor="region">Choose a region:</label>
        <select
          onChange={(evt) => handleChange(evt)}
          name="region"
          id="region"
          value={reqBody.region}
          required
        >
          <option value="default" disabled>
            Choose your region
          </option>
          {regions.map((region) => (
            <option key={region._id} value={region._id}>
              {region.name}
            </option>
          ))}
        </select>

        <div>
          <p>Watch Providers</p>
          {providers.map((provider) => (
            <div key={provider._id}>
              <input
                type="checkbox"
                id={provider._id}
                name={provider._id}
                onChange={(evt) => handleCheckbox(evt)}
              />

              <label htmlFor={provider._id}>{provider.provider_name}</label>
            </div>
          ))}
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default NewProfile
