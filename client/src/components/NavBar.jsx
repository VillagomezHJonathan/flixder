import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const NavBar = (props) => {
  const [profiles, setProfiles] = useState([])
  const [currentProfile, setCurrentProfile] = useState({})
  let navigate = useNavigate()

  const toggleDropDown = () => {
    const dropDown = document.querySelector('.drop-down')

    dropDown.classList.toggle('show')
  }

  useEffect(() => {
    const getProfiles = async () => {
      const res = await axios.get('http://localhost:3001/profiles')

      setProfiles(res.data.profiles)
    }

    const getCurrentProfile = async () => {
      const res = await axios.get(
        `http://localhost:3001/profiles/${props.currentProfileId}`
      )

      setCurrentProfile(res.data.profile)
    }

    getProfiles()
    getCurrentProfile()
  }, [props.currentProfileId])

  return (
    <nav className="NavBar">
      <p>Flixder</p>
      <div className="profile-selector">
        <div
          className="current profile"
          onClick={() => {
            toggleDropDown()
          }}
        >
          <img
            src={currentProfile.profile_pic}
            alt={`${currentProfile.name} profile`}
          />
        </div>

        <div className="drop-down">
          {profiles.map(
            (profile) =>
              profile._id !== currentProfile._id && (
                <div
                  key={profile._id}
                  className="profile"
                  onClick={() => {
                    toggleDropDown()
                    navigate('/')
                    props.updateCurrentProfile(profile._id)
                  }}
                >
                  <img
                    src={profile.profile_pic}
                    alt={`${profile.name} profile`}
                  />
                </div>
              )
          )}

          <Link className="link" to={`/profiles/${currentProfile._id}`}>
            View Profile
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
