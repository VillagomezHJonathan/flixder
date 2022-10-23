import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Home from './components/Home'
import NewProfile from './components/NewProfile'

function App() {
  const [currentProfileId, setCurrentProfileId] = useState(
    '6354e306131e244d9d270a65'
  )
  let navigate = useNavigate()

  const updateCurrentProfile = (id, redirect) => {
    setCurrentProfileId(id)
    if (redirect) {
      navigate(`/profiles/${id}`)
    }
  }

  return (
    <div className="App">
      <NavBar
        currentProfileId={currentProfileId}
        updateCurrentProfile={updateCurrentProfile}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home currentProfileId={currentProfileId} />}
          />

          <Route
            path="/profiles/:id"
            element={<Profile currentProfileId={currentProfileId} />}
          />

          <Route
            path="/profiles/new"
            element={<NewProfile updateCurrentProfile={updateCurrentProfile} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
