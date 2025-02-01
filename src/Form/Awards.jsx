import PropTypes from 'prop-types'

Awards.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
}

AwardBlock.propTypes = {
  onRemove: PropTypes.func,
  id: PropTypes.string,
  onChangeAward: PropTypes.func,
  onChangeDate: PropTypes.func,
  award: PropTypes.string,
  date: PropTypes.string
};

export default function Awards({data, setData}) {
  const addAward = () => {
    event.preventDefault();
    const newItem = { id: crypto.randomUUID(), award: "", date: ""};

    setData({
      ...data,
      awards: [...data.awards, newItem]
    })
  }

  const removeAward = (id) => {
    setData({
      ...data,
      awards: data.awards.filter(award => award.id !== id)
    })
  }

  const onChangeAward = (newAward, id) => {
    const updatedAwards = data.awards.map(item => item.id === id ? {...item, award: newAward} : item)
    setData({
      ...data,
      awards: updatedAwards
    })
  }

  const onChangeDate = (newDate, id) => {
    const updatedAwards = data.awards.map(item=> item.id === id ? {...item, date: newDate} : item)
    setData({
      ...data,
      awards: updatedAwards
    })
  }

  return (
    <div className='fullWidth'>
      <h2>Awards</h2>
      {data.awards.map(item => (
        <AwardBlock
          index={data.awards.indexOf(item)} 
          key={item.id}
          id={item.id}
          award={item.award}
          date={item.date}
          onRemove={() => removeAward(item.id)}
          onChangeAward={onChangeAward}
          onChangeDate={onChangeDate}
        />
      ))}
      <br/>
      <button onClick={addAward}>Add</button>
    </div>
  )
}

function AwardBlock({onRemove, id, onChangeAward, award, onChangeDate, date}) {
  return (
    <fieldset>
      <label>Award:</label>
      <br />
      <input type="text" onChange={(e) => onChangeAward(e.target.value, id)} value={award}></input>
      <br />
      <label>Date:</label>
      <br />
      <input type="text" onChange={(e) => onChangeDate(e.target.value, id)} value={date}></input>
      <br />
      <button onClick={onRemove}>Remove</button>
      <br />
    </fieldset>
  )
}