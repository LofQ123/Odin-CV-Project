import PropTypes from 'prop-types'

SkillBlock.propTypes = {
  onRemove: PropTypes.func,
  id: PropTypes.string,
  onChangeSkill: PropTypes.func,
  skill: PropTypes.string,
  onChangeLvl: PropTypes.func,
  lvl: PropTypes.string
};

Skills.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func
}

export default function Skills({data, setData}) {
  const addSkill = () => {
    event.preventDefault();
    const newItem = { id: crypto.randomUUID(), skill: "", lvl: "" }

    setData({
      ...data,
      skills: [...data.skills, newItem]
    })
  }

  const removeSkill = (id) => {
    setData({
      ...data,
      skills: data.skills.filter(skill => skill.id !== id)
    })
  }

  const onChangeSkill = (newSkill, id) => {
    const updatedSkills = data.skills.map(item => item.id === id ? {...item, skill: newSkill} : item)
    setData({
      ...data,
      skills: updatedSkills
    })
  }

  const onChangeLvl = (newLvl, id) => {
    const updatedSkills = data.skills.map(item => item.id === id ? {...item, lvl: newLvl} : item)
    setData({
      ...data,
      skills: updatedSkills
    })
  }

  return (
    <div className='fullWidth'>
      <h2>Skills</h2>
      {data.skills.map(item => (
        <SkillBlock
          index={data.skills.indexOf(item)} 
          key={item.id}
          id={item.id}
          skill={item.skill}
          lvl={item.lvl}
          onRemove={() => removeSkill(item.id)}
          onChangeSkill={onChangeSkill}
          onChangeLvl={onChangeLvl}
        />
      ))}
      <br/>
      <button onClick={addSkill}>Add</button>
    </div>
  )
}

function SkillBlock({onRemove, id, onChangeSkill, skill, onChangeLvl, lvl}) {
  return (
    <fieldset>
      <label>Skill:</label>
      <br />
      <input type="text" onChange={(e)=>onChangeSkill(e.target.value, id)} value={skill}></input>
      <br />
      <label>Level:</label>
      <br />
      <input type="number" onChange={(e)=>onChangeLvl(e.target.value, id)} value={lvl}></input>
      <br />
      <button onClick={onRemove}>Remove</button>
      <br />
    </fieldset>
  )
}


