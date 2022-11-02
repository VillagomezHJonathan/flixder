import './MovieCard.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { IMAGE_BASE_PATH, DB_BASE_URL } from '../globals'

const MovieCard = (props) => {
  const [ourMovie, setOurMovie] = useState(null)

  const removeMovieCard = (evt) => {
    const movieCard = evt.target.parentNode.parentNode
    movieCard.remove()
  }

  const populateGenres = () => {
    const arr = []
    props.movie.genre_ids.forEach((genreId) => {
      for (let genre of props.genres) {
        if (genreId === genre.tmdb_id) {
          arr.push(genre._id)
        }
      }
    })

    return arr
  }

  const getOurMovie = async () => {
    try {
      const res = await axios.get(
        `${DB_BASE_URL}/movies/tmdb/${props.movie.id}`
      )

      setOurMovie(res.data.movie)
    } catch (err) {
      setOurMovie(null)
    }
  }

  const handleNo = (evt) => {
    removeMovieCard(evt)
  }

  const handleYes = async (evt) => {
    removeMovieCard(evt)
    getOurMovie()

    const newMovieArr = props.profile.fav_movie_ids

    if (ourMovie !== null) {
      newMovieArr.push(ourMovie._id)
      await axios.put(`${DB_BASE_URL}/profiles/${props.profile._id}`, {
        ...props.profile,
        fav_movie_ids: newMovieArr
      })
    } else {
      const newMovie = {
        tmdb_id: props.movie.id,
        poster_path: props.movie.poster_path,
        backdrop_path: props.movie.backdrop_path,
        title: props.movie.title,
        release_date: props.movie.release_date,
        overview: props.movie.overview,
        vote_average: props.movie.vote_average,
        vote_count: props.movie.vote_count,
        genre_ids: [...populateGenres()]
      }

      const movie = await axios.post(`${DB_BASE_URL}/movies`, newMovie)
      setOurMovie(movie.data)

      newMovieArr.push(movie.data._id)
      await axios.put(`${DB_BASE_URL}/profiles/${props.profile._id}`, {
        ...props.profile,
        fav_movie_ids: newMovieArr
      })
    }
  }

  useEffect(() => {
    if (props.addMode) {
      getOurMovie()
    }
  }, [])

  return (
    <div className="MovieCard">
      <img
        src={`${IMAGE_BASE_PATH}${props.movie.poster_path}`}
        alt={props.movie.title}
      />
      <div className="movie-info">
        <div className="movie-heading">
          <h2>{props.movie.title}</h2>
          <p className="rating">⭐ {props.movie.vote_average}</p>
        </div>

        <p className="overview">{props.movie.overview}</p>
      </div>

      {props.addMode && (
        <div className="inputs">
          <button className="btn danger" onClick={(evt) => handleNo(evt)}>
            No
          </button>
          <button className="btn success" onClick={(evt) => handleYes(evt)}>
            Yes
          </button>
        </div>
      )}
    </div>
  )
}

export default MovieCard
