import './MovieCard.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { IMAGE_BASE_PATH } from '../globals'

const MovieCard = (props) => {
  const [ourMovie, setOurMovie] = useState(null)

  const removeMovieCard = (evt) => {
    const movieCard = evt.currentTarget.parentNode.parentNode
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
        `http://localhost:3001/movies/tmdb/${props.movie.id}`
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
      await axios.put(`http://localhost:3001/profiles/${props.profile._id}`, {
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

      const movie = await axios.post('http://localhost:3001/movies', newMovie)
      setOurMovie(movie.data)

      newMovieArr.push(movie.data._id)
      await axios.put(`http://localhost:3001/profiles/${props.profile._id}`, {
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
          <button className="no-btn" onClick={(evt) => handleNo(evt)}>
            No
          </button>
          <button className="yes-btn" onClick={(evt) => handleYes(evt)}>
            Yes
          </button>
        </div>
      )}
    </div>
  )
}

export default MovieCard
