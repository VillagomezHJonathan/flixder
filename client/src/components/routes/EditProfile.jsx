import './EditProfile.css'
import Form from '../Form'

const EditProfile = (props) => {
  return (
    <div className="EditProfile">
      <h1>Edit Profile</h1>
      <Form updateCurrentProfile={props.updateCurrentProfile} editMode={true} />
    </div>
  )
}

export default EditProfile
