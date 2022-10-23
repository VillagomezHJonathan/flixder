import './ProviderCard.css'
import { IMAGE_BASE_PATH } from '../globals'

const ProviderCard = (props) => {
  return (
    <div className="ProviderCard">
      <h3>{props.provider.provider_name}</h3>
      <img
        src={`${IMAGE_BASE_PATH}${props.provider.logo_path}`}
        alt={props.provider.provider_name}
      />
    </div>
  )
}

export default ProviderCard
