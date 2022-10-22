import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Home from './components/Home'
import NewProfile from './components/NewProfile'

function App() {
  const [currentProfile, setCurrentProfile] = useState({})
  const [currentProfileId, setCurrentProfileId] = useState(
    '635305b6c1b00ed227436b1c'
  )

  const updateCurrentProfile = (id) => {
    setCurrentProfileId(id)
  }

  useEffect(() => {
    const getCurrentProfile = async () => {
      const res = await axios.get(
        `http://localhost:3001/profiles/${currentProfileId}`
      )

      setCurrentProfile(res.data.profile)
    }

    getCurrentProfile()
  }, [currentProfileId])

  return (
    <div className="App">
      <NavBar
        currentProfile={currentProfile}
        updateCurrentProfile={updateCurrentProfile}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home currentProfile={currentProfile} />} />

          <Route
            path="/profiles/:id"
            element={<Profile currentProfile={currentProfile} />}
          />

          <Route path="/profiles/new" element={<NewProfile />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
