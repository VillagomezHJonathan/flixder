import './NewProfile.css'
import { useState, useEffect } from 'react'

const NewProfile = () => {
  const [images, setImages] = useState([])
  const [genres, setGenres] = useState([])

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
