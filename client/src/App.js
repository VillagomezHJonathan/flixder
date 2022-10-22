import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import NavBar from './components/NavBar'
import Profile from './components/Profile'

function App() {
  const [profiles, setProfiles] = useState([])
  const [currentProfile, setCurrentProfile] = useState({})

  const handleSwitch = (evt, profile) => {
    const parent = evt.currentTarget.parentNode

    parent.classList.toggle('show')
    setCurrentProfile(profile)
  }

  useEffect(() => {
    const getProfiles = async () => {
      const res = await axios.get('http://localhost:3001/profiles')

      setProfiles(res.data.profiles)
      setCurrentProfile(res.data.profiles[0])
    }

    getProfiles()
  }, [])

  return (
    <div className="App">
      <NavBar
        currentProfile={currentProfile}
        profiles={profiles}
        handleSwitch={handleSwitch}
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
