import React from 'react'

const EditForm = (props)  => {

  const item = props.item  

  const handleChange = (event) => {
    item.content = event.target.value;
    props.handleItemChange(item);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateItem(item);
  }

  return (
    <li className="todolistitem">
    <form  onSubmit={handleSubmit}>
      <input value={item.content} onChange={handleChange}/>
      <button className="button" type="submit">update</button>
    </form>
    </li>
  )
}
export default EditForm