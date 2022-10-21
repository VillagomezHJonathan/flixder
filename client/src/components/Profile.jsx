const Profile = (props) => {
  const { currentProfile } = props

  return (
    <div className="Profile">
      <h1>Profile</h1>
      <h2>{currentProfile.name}</h2>
      <img
        src={currentProfile.profile_pic}
        alt={`${currentProfile.name} profile`}
      />
    </div>
  )
}

export default Profile
