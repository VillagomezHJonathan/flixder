import './Home.css'
import ProfileCard from '../ProfileCard'

const Home = (props) => {
  return (
    <div className="Home">
      <ProfileCard
        profile={props.currentProfile}
        onClick={props.goToCurrentProfile}
      />
    </div>
  )
}

export default Home
