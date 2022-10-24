import './Form.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Form = (props) => {
  const [currentProfile, setCurrentProfile] = useState({})
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

  const { id } = useParams()

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    const newProfile = await axios.post(
      'http://localhost:3001/profiles',
      reqBody
    )

    setReqBody({
      name: '',
      profile_pic: '',
      region: '6352c64f9879eee933e71121',
      providers: [],
      fav_genre_ids: [],
      fav_movie_ids: []
    })

    props.updateCurrentProfile(newProfile.data._id, true)
  }

  const handleChange = (evt, reqKey) => {
    const target = evt.target

    if (reqKey) {
      setReqBody({ ...reqBody, [reqKey]: target.value })
    } else {
      setReqBody({ ...reqBody, [target.id]: target.value })
    }
  }

  const handleCheckbox = (evt, reqKey) => {
    const target = evt.target
    const arr = [...reqBody[reqKey]]

    if (target.checked) {
      arr.push(target.id)
      setReqBody({ ...reqBody, [reqKey]: [...arr] })
    } else {
      const filtered = arr.filter((provider) => provider !== target.id)
      setReqBody({ ...reqBody, [reqKey]: [...filtered] })
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

    const getCurrentProfile = async () => {
      const res = await axios.get(`http://localhost:3001/profiles/${id}`)
      setCurrentProfile(res.data.profile)
    }

    if (props.editMode) {
      getCurrentProfile()
    }

    getData()
  }, [reqBody])

  return (
    <div className="Form">
      <form onSubmit={(evt) => handleSubmit(evt)}>
        <div>
          <h2>Choose A Profile Pic</h2>

          {images.map((image) => (
            <div key={image._id}>
              <input
                type="radio"
                id={image._id}
                name="profile_pic"
                value={image.url}
                onChange={(evt) => handleChange(evt, 'profile_pic')}
              />
              <label htmlFor={image._id}>
                <img
                  className="profile-pic"
                  src={image.url}
                  alt={`${image.title}`}
                />
              </label>
            </div>
          ))}
        </div>

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
          <h2>Watch Providers</h2>
          {providers.map((provider) => (
            <div key={provider._id}>
              <input
                type="checkbox"
                id={provider._id}
                name={provider._id}
                onChange={(evt) => handleCheckbox(evt, 'providers')}
              />

              <label htmlFor={provider._id}>{provider.provider_name}</label>
            </div>
          ))}
        </div>

        <div>
          <h2>Favorite Genres</h2>
          {genres.map((genre) => (
            <div key={genre._id}>
              <input
                type="checkbox"
                id={genre._id}
                name={genre._id}
                onChange={(evt) => handleCheckbox(evt, 'fav_genre_ids')}
              />

              <label htmlFor={genre._id}>{genre.name}</label>
            </div>
          ))}
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default Form
