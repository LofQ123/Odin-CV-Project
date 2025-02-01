import PropTypes from 'prop-types'
import { useEffect } from 'react'

Profile.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func
}

export default function Profile({data, setData}) {
  const resizeTextArea = () => {
    const textArea = document.getElementById("profile");
    textArea.style.height = "auto";
    textArea.style.height = `${textArea.scrollHeight}px`
  }

  const onChangeProfile = (newProfile) => {
    setData({
      ...data,
      profile: newProfile
    })
  }

  useEffect(() => {
    resizeTextArea();
  }, [data.profile]);
  
  return (
    <div className='fullWidth'>
      <h2>Profile</h2>
      <label htmlFor="profile">Write about yourself:</label>
      <br/>
      <textarea id="profile" name="profile" onChange={(e) => onChangeProfile(e.target.value)} value={data.profile}></textarea>
    </div>
  )
}