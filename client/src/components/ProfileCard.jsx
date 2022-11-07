import './ProfileCard.css'
import { Link } from 'react-router-dom'
import GenreCard from './GenreCard'
import ProviderCard from './ProviderCard'

const ProfileCard = (props) => {
  return (
    <div className="ProfileCard">
      <div className="profile-header">
        {/* <img
          className="profile-pic"
          src={props.profile.profile_pic.url}
          alt={`${props.profile.name} profile`}
        /> */}

        <h2>{props.profile.name}</h2>

        {props.profile.region && (
          <img
            className="region-img"
            src={props.profile.region.flag_image}
            alt={props.profile.region.name}
          />
        )}

        {props.isInProfile ? (
          <Link className="link" to={`/profiles/${props.profile._id}/edit`}>
            Edit
          </Link>
        ) : (
          <Link className="link" to={`/profiles/${props.profile._id}`}>
            View Profile
          </Link>
        )}
      </div>

      <div className="profile-info">
        <div className="fav-genres">
          {props.profile.fav_genres &&
            props.profile.fav_genres.map((genre) => (
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
