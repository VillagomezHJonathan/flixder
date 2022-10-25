import './MovieStack.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import { DOMAIN } from '../globals'

const MovieStack = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `${DOMAIN}/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )

      setMovies(res.data.results)
    }

    getMovies()
  }, [])

  return (
    <div className="MovieStack">
      <h1>Movie Stack</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieStack
