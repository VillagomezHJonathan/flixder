import './Profile.css'

const Profile = (props) => {
  return (
    <div className="Profile">
      <h2>{props.currentProfile.name}</h2>
      <img
        src={props.currentProfile.profile_pic}
        alt={`${props.currentProfile.name} profile`}
      />
    </div>
  )
}

export default Profile
