import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { DOMAIN } from './globals'
import NavBar from './components/NavBar'
import Profile from './components/routes/Profile'
import EditProfile from './components/routes/EditProfile'
import Home from './components/routes/Home'
import NewProfile from './components/routes/NewProfile'
import Footer from './components/Footer'

const App = () => {
  const [currentProfile, setCurrentProfile] = useState({})
  const [movies, setMovies] = useState([])
  const [currentProfileId, setCurrentProfileId] = useState({
    id: '6354e306131e244d9d270a65'
  })
  let navigate = useNavigate()

  const formatToString = (arrToFormat, divider) => {
    const arr = [...arrToFormat]
    let str = ''

    arr.forEach((p, idx) => {
      idx < arr.length - 1
        ? (str += `${p.tmdb_id}${divider}`)
        : (str += p.tmdb_id)
    })

    return str
  }

  const pickRandomGenres = (genres) => {
    let randGenres = []
    if (genres.length > 2) {
      for (let i = 0; i < 2; i++) {
        const randNum = Math.floor(Math.random() * genres.length)
        randGenres.push(genres[randNum])
      }
    } else {
      randGenres = [...genres]
    }

    return randGenres
  }

  const getMovies = async (region, providers, genres) => {
    const url = `${DOMAIN}/discover/movie?watch_region=${region}&with_watch_providers=${providers}&with_genres=${genres}&api_key=${process.env.REACT_APP_TMDB_KEY}`
    const res = await axios.get(url)
    setMovies(res.data.results)
  }

  const getProfile = async () => {
    const res = await axios.get(
      `http://localhost:3001/profiles/${currentProfileId.id}`
    )

    const profile = res.data.profile

    setCurrentProfile(profile)

    const providers = formatToString(profile.providers, '|')
    const genres = formatToString(pickRandomGenres(profile.fav_genre_ids), ',')

    getMovies(profile.region.tmdb_iso, providers, genres)
  }

  const updateCurrentProfile = (id, redirect) => {
    setCurrentProfileId({ ...currentProfileId, id })

    if (redirect) {
      navigate(`/`)
    }
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
                movies={movies}
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
              <EditProfile
                currentProfileId={currentProfileId}
                updateCurrentProfile={updateCurrentProfile}
              />
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
