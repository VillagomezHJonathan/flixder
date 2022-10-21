const NavBar = (props) => {
  const { profiles, currentProfile } = props

  return (
    <nav className="NavBar">
      <p>Flixder</p>
      <div className="profile-selector">
        <div className="current">
          <img
            src={currentProfile.profile_pic}
            alt={`${currentProfile.name} profile`}
          />
        </div>

        <div className="others">
          {profiles.map(
            (profile) =>
              profile._id !== currentProfile._id && (
                <div key={profile._id}>
                  <img
                    src={profile.profile_pic}
                    alt={`${profile.name} profile`}
                  />
                </div>
              )
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
