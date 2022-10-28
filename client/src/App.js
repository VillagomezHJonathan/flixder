import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from './components/NavBar'
import Profile from './components/routes/Profile'
import EditProfile from './components/routes/EditProfile'
import Home from './components/routes/Home'
import NewProfile from './components/routes/NewProfile'
import Footer from './components/Footer'

const App = () => {
  const [currentProfile, setCurrentProfile] = useState({})
  const [currentProfileId, setCurrentProfileId] = useState({
    id: '6354e306131e244d9d270a65'
  })
  let navigate = useNavigate()

  const updateCurrentProfile = (id, redirect) => {
    setCurrentProfileId({ ...currentProfileId, id })

    if (redirect) {
      navigate(`/`)
    }
  }

  const getProfile = async () => {
    const res = await axios.get(
      `http://localhost:3001/profiles/${currentProfileId.id}`
    )

    setCurrentProfile(res.data.profile)
  }

  useEffect(() => {
    getProfile()
  }, [currentProfileId])

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
            element={
              <Home
                currentProfile={currentProfile}
                currentProfileId={currentProfileId}
              />
            }
          />

          <Route
            path="/profiles/:id"
            element={
              <Profile
                currentProfile={currentProfile}
                updateCurrentProfile={getProfile}
              />
            }
          />

          <Route
            path="/profiles/:id/edit"
            element={
              <EditProfile updateCurrentProfile={updateCurrentProfile} />
            }
          />

          <Route
            path="/profiles/new"
            element={<NewProfile updateCurrentProfile={updateCurrentProfile} />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
