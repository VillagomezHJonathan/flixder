import './Profile.css'
import ProfileCard from '../ProfileCard'

const Profile = (props) => {
  return (
    <div className="Profile">
      <ProfileCard profile={props.currentProfile} isInProfile={true} />
    </div>
  )
}

export default Profile
