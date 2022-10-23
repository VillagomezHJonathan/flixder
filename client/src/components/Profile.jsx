import './Profile.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Profile = (props) => {
  const [currentProfile, setCurrentProfile] = useState({})

  useEffect(() => {
    const getProfile = async () => {
      const res = await axios.get(
        `http://localhost:3001/profiles/${props.currentProfileId}`
      )

      setCurrentProfile(res.data.profile)
    }

    getProfile()
  }, [props.currentProfileId])

  return (
    <div className="Profile">
      <h2>{currentProfile.name}</h2>
      <img
        src={currentProfile.profile_pic}
        alt={`${currentProfile.name} profile`}
      />
    </div>
  )
}

export default Profile
