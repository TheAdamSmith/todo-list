import React from 'react'

const EditForm = (props)  => {

  const item = props.item  

  const handleChange = (event) => {
    props.handleItemChange(event.target.value, item.id);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateItem(item.id);
  }

  return (
    <li>
    <form  onSubmit={handleSubmit}>
      <input value={item.content} onChange={handleChange}/>
      <button type="submit">update</button>
    </form>
    </li>
  )
}
export default EditForm