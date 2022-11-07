import './Profile.css'
import { useEffect } from 'react'
import ProfileCard from '../ProfileCard'
import MovieCard from '../MovieCard'

const Profile = (props) => {
  useEffect(() => {
    props.updateCurrentProfile()
  }, [])

  return (
    <div className="Profile">
      <ProfileCard profile={props.currentProfile} isInProfile={true} />

      <div className="movies">
        {props.currentProfile.fav_movies ? (
          props.currentProfile.fav_movies.map((movie) => (
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
