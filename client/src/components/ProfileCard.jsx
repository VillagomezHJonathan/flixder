import './ProfileCard.css'
import GenreCard from './GenreCard'
import ProviderCard from './ProviderCard'

const ProfileCard = (props) => {
  return (
    <div className="ProfileCard">
      <img
        className="profile-pic"
        src={props.profile.profile_pic}
        alt={`${props.profile.name} profile`}
      />

      <div className="profile-info">
        <h2>{props.profile.name}</h2>

        <div className="region">
          {props.profile.region && (
            <img
              className="region-img"
              src={props.profile.region.flag_image}
              alt={props.profile.region.name}
            />
          )}
        </div>

        <div className="fav-genres">
          {props.profile.fav_genre_ids &&
            props.profile.fav_genre_ids.map((genre) => (
              <GenreCard key={genre._id} genre={genre} />
            ))}
        </div>

        <div className="providers">
          {props.profile.providers &&
            props.profile.providers.map((provider) => (
              <ProviderCard key={provider._id} provider={provider} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
