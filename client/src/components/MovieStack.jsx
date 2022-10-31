import './MovieStack.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

const MovieStack = (props) => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const getGenres = async () => {
      const res = await axios.get(`http://localhost:3001/genres`)

      setGenres(res.data.genres)
    }

    getGenres()
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
