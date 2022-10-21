const NavBar = (props) => {
  const showProfiles = (evt) => {
    const parent = evt.currentTarget.parentNode
    const others = parent.querySelector('.others')

    others.classList.toggle('show')
  }

  return (
    <nav className="NavBar">
      <p>Flixder</p>
      <div className="profile-selector">
        <div
          className="current profile"
          onClick={(evt) => {
            showProfiles(evt)
          }}
        >
          <img
            src={props.currentProfile.profile_pic}
            alt={`${props.currentProfile.name} profile`}
          />
        </div>

        <div className="others">
          {props.profiles.map(
            (profile) =>
              profile._id !== props.currentProfile._id && (
                <div
                  key={profile._id}
                  className="profile"
                  onClick={() => {
                    props.handleSwitch(profile)
                  }}
                >
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
