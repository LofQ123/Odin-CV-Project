import PropTypes from 'prop-types'

Experience.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func
}

ExperienceBlock.propTypes = {
  onRemove: PropTypes.func,
  id: PropTypes.string,
  onChangePosition: PropTypes.func,
  position: PropTypes.string,
  onChangePeriod: PropTypes.func,
  period: PropTypes.string
};

export default function Experience({data, setData}) {
  const addExperience = () => {
    event.preventDefault();
    const newItem = { id: crypto.randomUUID(), position: "", period: ""};

    setData({
      ...data, 
      experience: [...data.experience, newItem]
    })
  }

  const removeExperience = (id) => {
    setData({
      ...data,
      experience: data.experience.filter(exp => exp.id !== id)
    })
  }

  const onChangePosition = (newPosition, id) => {
    const updatedExperience = data.experience.map(item => item.id === id ? {...item, position: newPosition} : item)
    setData({
      ...data,
      experience: updatedExperience
    })
  }

  const onChangePeriod = (newPeriod, id) => {
    const updatedExperience = data.experience.map(item => item.id === id ? {...item, period: newPeriod} : item)
    setData({
      ...data,
      experience: updatedExperience
    })
  }

  return (
    <div className="fullWidth">
      <h2>Experience</h2>
      {data.experience.map(item => (
        <ExperienceBlock
          index={data.experience.indexOf(item)} 
          key={item.id}
          id={item.id}
          position={item.position}
          period={item.period}
          onRemove={() => removeExperience(item.id)}
          onChangePosition={onChangePosition}
          onChangePeriod={onChangePeriod}
        />
      ))}
      <br/>
      <button onClick={addExperience}>Add</button>
    </div>
  )
}

function ExperienceBlock({onRemove, id, onChangePosition, position, onChangePeriod, period}) {
  return (
    <fieldset>
      <label>Position:</label>
      <br />
      <input type="text" onChange={(e) => onChangePosition(e.target.value, id)} value={position}></input>
      <br />
      <label>Period:</label>
      <br />
      <input type="text" onChange={(e) => onChangePeriod(e.target.value, id)} value={period}></input>
      <button onClick={onRemove}>Remove</button>
    </fieldset>
  )
}