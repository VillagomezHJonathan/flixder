import './Home.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = (props) => {
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
    <div className="Home">
      <div className="profile-card">
        <img
          className="profile-pic"
          src={currentProfile.profile_pic}
          alt={`${currentProfile.name} profile`}
        />
        <div className="profile-info">
          {/* <div className="region">
            <img src={profile.region.flag_image} alt={profile.region.name} />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Home
