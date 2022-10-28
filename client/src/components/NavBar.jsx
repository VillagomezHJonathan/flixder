import './NavBar.css'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const NavBar = (props) => {
  const [profiles, setProfiles] = useState([])

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

    getProfiles()
  }, [props.currentProfileId])

  return (
    <nav className="NavBar">
      <Link to="/">Flixder</Link>
      <div className="profile-selector">
        <div
          className="current profile"
          onClick={() => {
            toggleDropDown()
          }}
        >
          {profiles.map(
            (profile) =>
              profile._id === props.currentProfileId.id && (
                <img
                  key={profile._id}
                  src={profile.profile_pic}
                  alt={`${profile.name} profile`}
                />
              )
          )}
        </div>

        <div className="drop-down">
          {profiles.map(
            (profile) =>
              profile._id !== props.currentProfileId.id && (
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

          <Link
            onClick={toggleDropDown}
            className="link"
            to={`/profiles/${props.currentProfileId.id}`}
          >
            View Profile
          </Link>

          <Link onClick={toggleDropDown} className="link" to={'/profiles/new'}>
            New Profile
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
