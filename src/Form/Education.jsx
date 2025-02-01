import PropTypes from 'prop-types'

Education.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func
}

EducationBlock.propTypes = {
  onRemove: PropTypes.func,
  id: PropTypes.string,
  onChangePlace: PropTypes.func,
  onChangePeriod: PropTypes.func,
  place: PropTypes.string,
  period: PropTypes.string
};

export default function Education({data, setData}) {
  const addEducation = () => {
    event.preventDefault();
    const newItem = { id: crypto.randomUUID(), place: "", period: "" };

    setData({
      ...data,
      education: [...data.education, newItem]
    })
  }

  const removeEducation = (id) => {
    setData({
      ...data,
      education: data.education.filter(place => place.id !== id)
    })
  }

  const onChangePlace = (newPlace, id) => {
    const updatedEducation = data.education.map(item => item.id === id ? {...item, place: newPlace} : item)
    setData({
      ...data,
      education: updatedEducation
    })
  }

  const onChangePeriod = (newPeriod, id) => {
    const updatedEducation = data.education.map(item => item.id === id ? {...item, period: newPeriod} : item)
    setData({
      ...data,
      education: updatedEducation
    })
  }

  return (
    <div className='fullWidth'>
      <h2>Education</h2>
      {data.education.map(item => (
        <EducationBlock
          index={data.education.indexOf(item)} 
          key={item.id}
          id={item.id}
          place={item.place}
          period={item.period}
          onRemove={() => removeEducation(item.id)}
          onChangePlace={onChangePlace}
          onChangePeriod={onChangePeriod}
        />
      ))}
      <br/>
      <button onClick={addEducation}>Add</button>
    </div>
  )
}

function EducationBlock({onRemove, id, onChangePeriod, period, onChangePlace, place}) {
  return (
    <fieldset>
      <label>Place:</label>
      <br />
      <input type="text" onChange={(e) => onChangePlace(e.target.value, id)} value={place}></input>
      <br />
      <label>Period:</label>
      <br />
      <input type="text" onChange={(e) => onChangePeriod(e.target.value, id)} value={period}></input>
      <br />
      <button onClick={onRemove}>Remove</button>
      <br />
    </fieldset>
  )
}


