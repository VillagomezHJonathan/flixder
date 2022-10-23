import './Home.css'
import ProfileCard from '../ProfileCard'

const Home = (props) => {
  return (
    <div className="Home">
      <ProfileCard profile={props.currentProfile} />
    </div>
  )
}

export default Home
