import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from './components/NavBar'
import Profile from './components/Profile'

function App() {
  const [profiles, setProfiles] = useState([])
  const [currentProfile, setCurrentProfile] = useState({})

  useEffect(() => {
    const getProfiles = async () => {
      const res = await axios.get('http://localhost:3001/profiles')

      setProfiles(res.data.profiles)
      setCurrentProfile(res.data.profiles[0])
    }

    getProfiles()
  })

  return (
    <div className="App">
      <NavBar currentProfile={currentProfile} profiles={profiles} />
      <Profile currentProfile={currentProfile} />
    </div>
  )
}

export default App
