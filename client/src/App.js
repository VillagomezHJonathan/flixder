import './App.css'
import { useEffect } from 'react'
import { DOMAIN } from './globals'
import axios from 'axios'

function App() {
  useEffect(() => {
    const getMoviesAsync = async (region, providers, genres) => {
      const res = await axios.get(
        `${DOMAIN}/discover/movie?watch_region=${region}&with_watch_providers=${providers}&with_genres=${genres}&api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      console.log(res.data.results)
    }

    getMoviesAsync('US', '8|9|337', '28,12,16')
  })

  return <div className="App"></div>
}

export default App
