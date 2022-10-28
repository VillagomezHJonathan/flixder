import './ProviderCard.css'
import { IMAGE_BASE_PATH } from '../globals'

const ProviderCard = (props) => {
  return (
    <div className="ProviderCard">
      <img
        src={`${IMAGE_BASE_PATH}${props.provider.logo_path}`}
        alt={props.provider.provider_name}
      />
    </div>
  )
}

export default ProviderCard
