import './MovieStack.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import { DOMAIN } from '../globals'

const MovieStack = (props) => {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `${DOMAIN}/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )

      setMovies(res.data.results)
    }

    const getGenres = async () => {
      const res = await axios.get(`http://localhost:3001/genres`)

      setGenres(res.data.genres)
    }

    getGenres()
    getMovies()
  }, [])

  return (
    <div className="MovieStack">
      <div className="movies">
        {props.movies.map((movie) => (
          <MovieCard
            key={movie.id}
            profile={props.profile}
            genres={genres}
            movie={movie}
            addMode={true}
          />
        ))}
      </div>
    </div>
  )
}

export default MovieStack
