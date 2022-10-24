import './NewProfile.css'
import Form from '../Form'

const NewProfile = (props) => {
  return (
    <div className="NewProfile">
      <h1>Create A New Profile</h1>
      <Form updateCurrentProfile={props.updateCurrentProfile} />
    </div>
  )
}

export default NewProfile
