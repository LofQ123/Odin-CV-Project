import PropTypes from 'prop-types'

Reference.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func
}

ReferenceBlock.propTypes = {
  onRemove: PropTypes.func,
  id: PropTypes.string,
  onChangeName: PropTypes.func,
  onChangeContact: PropTypes.func,
  name: PropTypes.string,
  contact: PropTypes.string
};

export default function Reference({data, setData}) {
  const addReference = () => {
    event.preventDefault();
    const newItem = { id: crypto.randomUUID(), name: "", contact: "" };

    setData({
      ...data,
      reference: [...data.reference, newItem]
    })
  }

  const removeReference = (id) => {
    setData({
      ...data,
      reference: data.education.filter(item => item.id !== id)
    })
  }

  const onChangeName = (newName, id) => {
    const updatedReference = data.reference.map(item => item.id === id ? {...item, name: newName} : item)
    setData({
      ...data,
      reference: updatedReference
    })
  }

  const onChangeContact = (newContact, id) => {
    const updatedReference = data.reference.map(item => item.id === id ? {...item, contact: newContact} : item)
    setData({
      ...data,
      reference: updatedReference
    })
  }

  return (
    <div className='fullWidth'>
      <h2>Reference:</h2>
      {data.reference.map(item => (
        <ReferenceBlock
          index={data.reference.indexOf(item)} 
          key={item.id}
          id={item.id}
          name={item.name}
          contact={item.contact}
          onRemove={() => removeReference(item.id)}
          onChangeName={onChangeName}
          onChangeContact={onChangeContact}
        />
      ))}
      <br/>
      <button onClick={addReference}>Add</button>
    </div>
  )
}

function ReferenceBlock({onRemove, id, onChangeName, name, onChangeContact, contact}) {
  return (
    <fieldset>
      <label>Name:</label>
      <br />
      <input type="text" onChange={(e) => onChangeName(e.target.value, id)} value={name}></input>
      <br />
      <label>Contact:</label>
      <br />
      <input type="text" onChange={(e) => onChangeContact(e.target.value, id)} value={contact}></input>
      <br />
      <button onClick={onRemove}>Remove</button>
      <br />
    </fieldset>
  )
}


