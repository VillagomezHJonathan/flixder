import './MovieCard.css'
import { IMAGE_BASE_PATH } from '../globals'

const MovieCard = (props) => {
  return (
    <div className="MovieCard">
      <img
        src={`${IMAGE_BASE_PATH}${props.movie.poster_path}`}
        alt={props.movie.title}
      />
      <div className="movie-info">
        <h2>{props.movie.title}</h2>
      </div>
    </div>
  )
}

export default MovieCard
