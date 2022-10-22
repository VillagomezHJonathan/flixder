const Profile = (props) => {
  return (
    <div className="Profile">
      <h1>Profile</h1>
      <h2>{props.currentProfile.name}</h2>
      <img
        src={props.currentProfile.profile_pic}
        alt={`${props.currentProfile.name} profile`}
      />
    </div>
  )
}

export default Profile
