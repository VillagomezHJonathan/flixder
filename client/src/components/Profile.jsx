import { useState, useEffect } from 'react'
import axios from 'axios'

const Profile = (props) => {
  const [currentProfile, setCurrentProfile] = useState({})

  useEffect(() => {
    const getCurrentProfile = async () => {
      const res = await axios.get(
        `http://localhost:3001/profiles/${props.currentProfileId}`
      )

      setCurrentProfile(res.data.profile)
    }

    getCurrentProfile()
  }, [props.currentProfileId])

  return (
    <div className="Profile">
      <h1>Profile</h1>
      <h2>{currentProfile.name}</h2>
      <img
        src={currentProfile.profile_pic}
        alt={`${currentProfile.name} profile`}
      />
    </div>
  )
}

export default Profile
