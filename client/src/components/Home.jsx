import './Home.css'

const Home = (props) => {
  const profile = props.currentProfile

  return (
    <div className="Home">
      <div className="profile-card">
        <img
          className="profile-pic"
          src={profile.profile_pic}
          alt={`${profile.name} profile`}
        />

        <div className="profile-info">
          <h2>{profile.name}</h2>

          <div className="region">
            {profile.region && (
              <img
                className="region-img"
                src={profile.region.flag_image}
                alt={profile.region.name}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
