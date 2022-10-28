import './Home.css'
import ProfileCard from '../ProfileCard'
import MovieStack from '../MovieStack'

const Home = (props) => {
  return (
    <div className="Home">
      <ProfileCard profile={props.currentProfile} />

      <MovieStack profile={props.currentProfile} movies={props.movies} />
    </div>
  )
}

export default Home
