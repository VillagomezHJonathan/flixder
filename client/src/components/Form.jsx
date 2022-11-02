import './Form.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DB_BASE_URL } from '../globals'
import axios from 'axios'

const Form = (props) => {
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

    if (props.editMode) {
      const res = await axios.put(`${DB_BASE_URL}/profiles/${id}`, reqBody)

      props.updateCurrentProfile(res.data.updatedProfile._id, true)
    } else {
      const newProfile = await axios.post(`${DB_BASE_URL}/profiles`, reqBody)

      props.updateCurrentProfile(newProfile.data._id, true)
    }

    setReqBody({
      ...reqBody,
      name: '',
      profile_pic: '',
      region: '6352c64f9879eee933e71121',
      providers: [],
      fav_genre_ids: [],
      fav_movie_ids: []
    })
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

  const handleDelete = async () => {
    setReqBody({
      ...reqBody,
      name: '',
      profile_pic: '',
      region: '6352c64f9879eee933e71121',
      providers: [],
      fav_genre_ids: [],
      fav_movie_ids: []
    })

    await axios.delete(`${DB_BASE_URL}/profiles/${id}`)

    props.updateCurrentProfile('6354e306131e244d9d270a65', true)
  }

  useEffect(() => {
    const getData = async () => {
      const regionsRes = await axios.get(`${DB_BASE_URL}/regions`)
      const providersRes = await axios.get(`${DB_BASE_URL}/providers`)
      const imagesRes = await axios.get(`${DB_BASE_URL}/images`)
      const genresRes = await axios.get(`${DB_BASE_URL}/genres`)

      setRegions(regionsRes.data.regions)
      setProviders(providersRes.data.providers)
      setImages(imagesRes.data.images)
      setGenres(genresRes.data.genres)
    }

    const getCurrentProfile = async () => {
      const res = await axios.get(`${DB_BASE_URL}/profiles/${id}`)
      const profile = res.data.profile

      setReqBody({
        name: `${profile.name}`,
        profile_pic: `${profile.profile_pic}`,
        region: `${profile.region._id}`,
        providers: [...profile.providers],
        fav_genre_ids: [...profile.fav_genre_ids]
      })
    }

    if (props.editMode) {
      getCurrentProfile()
    }

    getData()
  }, [])

  return (
    <div className="Form">
      <form onSubmit={(evt) => handleSubmit(evt)}>
        <div>
          <h2 className="pics-heading">Choose A Profile Pic</h2>

          <div className="pics">
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
        </div>

        <div className="body">
          <div className="main">
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
          </div>

          <div className="providers">
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

            <div className="genres">
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
          </div>

          {props.editMode ? (
            <button className="btn" type="submit">
              Edit
            </button>
          ) : (
            <button className="btn" type="submit">
              Create
            </button>
          )}
        </div>
      </form>

      {props.editMode && (
        <button className="btn danger" onClick={handleDelete}>
          Delete Profile
        </button>
      )}
    </div>
  )
}

export default Form
