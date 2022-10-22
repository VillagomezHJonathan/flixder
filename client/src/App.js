import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import NavBar from './components/NavBar'
import Profile from './components/Profile'

function App() {
  const [profiles, setProfiles] = useState([])
  const [currentProfile, setCurrentProfile] = useState({})
  const [currentProfileId, setCurrentProfileId] = useState(
    '635305b6c1b00ed227436b1c'
  )

  const updateCurrentProfile = (id) => {
    setCurrentProfileId(id)
  }

  useEffect(() => {
    const getProfiles = async () => {
      const res = await axios.get('http://localhost:3001/profiles')

      setProfiles(res.data.profiles)
    }

    const getCurrentProfile = async () => {
      const res = await axios.get(
        `http://localhost:3001/profiles/${currentProfileId}`
      )

      setCurrentProfile(res.data.profile)
    }

    getProfiles()
    getCurrentProfile()
    console.log('hi')
  }, [currentProfileId])

  return (
    <div className="App">
      <NavBar
        profiles={profiles}
        currentProfile={currentProfile}
        updateCurrentProfile={updateCurrentProfile}
      />
      <main>
        <Routes>
          <Route
            path="/profiles/:id"
            element={<Profile currentProfile={currentProfile} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
