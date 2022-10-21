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

      console.log(res)
    }

    getProfiles()
  })

  return (
    <div className="App">
      <NavBar />
      <Profile />
    </div>
  )
}

export default App
