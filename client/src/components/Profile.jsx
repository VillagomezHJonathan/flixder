const Profile = (props) => {
  const profile = props.currentProfile

  return (
    <div className="Profile">
      <h1>Profile</h1>
      <h2>{profile.name}</h2>
      <img src={profile.profile_pic} alt={`${profile.name} profile`} />
    </div>
  )
}

export default Profile
