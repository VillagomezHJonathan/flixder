import './Profile.css'
import { useEffect } from 'react'
import ProfileCard from '../ProfileCard'
import MovieCard from '../MovieCard'
import { Link } from 'react-router-dom'

const Profile = (props) => {
  useEffect(() => {
    props.updateCurrentProfile()
  }, [])

  return (
    <div className="Profile">
      <ProfileCard profile={props.currentProfile} isInProfile={true} />

      <div className="movies">
        {props.currentProfile.fav_movie_ids ? (
          props.currentProfile.fav_movie_ids.map((movie) => (
            <MovieCard key={movie._id} movie={movie} addMode={false} />
          ))
        ) : (
          <p>Start finding new movies!</p>
        )}
      </div>
    </div>
  )
}

export default Profile
