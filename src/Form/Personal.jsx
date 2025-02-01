import PropTypes from 'prop-types'

Personal.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func
}

export default function Personal({data, setData}) {
  const onChangeFirstName = (newFirstName) => {
    const updatedPersonal = data.personal;
    updatedPersonal.firstName = newFirstName;
    setData({
      ...data,
      personal: updatedPersonal
    })
  }

  const onChangeLastName = (newLastName) => {
    const updatedPersonal = data.personal;
    updatedPersonal.lastName = newLastName;
    setData({
      ...data,
      personal: updatedPersonal
    })
  }

  const onChangeLocation = (newLocation) => {
    const updatedPersonal = data.personal;
    updatedPersonal.location = newLocation;
    setData({
      ...data,
      personal: updatedPersonal
    })
  }

  const onChangeContact = (newContact) => {
    const updatedPersonal = data.personal;
    updatedPersonal.contact = newContact;
    setData({
      ...data,
      personal: updatedPersonal
    })
  }
  return (
    <div className='fullWidth'>
      <h2 >Personal information</h2>
      <label htmlFor="firstName">First Name:</label>
      <br/>
      <input type="text" id="firstName" name="firstName" onChange={(e)=>onChangeFirstName(e.target.value)} value={data.personal.firstName}></input>
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <br/>
      <input type="text" id="lastName" name="lastName" onChange={(e)=>onChangeLastName(e.target.value)} value={data.personal.lastName}></input>
      <br />
      <label htmlFor="location">Location:</label>
      <br/>
      <input type="text" id="location" name="location" onChange={(e)=>onChangeLocation(e.target.value)} value={data.personal.location}></input>
      <br />
      <label htmlFor="contact">Contact:</label>
      <br/>
      <input type="text" id="contact" name="contact" onChange={(e)=>onChangeContact(e.target.value)} value={data.personal.contact}></input>
    </div>
  )
}