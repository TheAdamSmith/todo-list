import React from 'react'
import CheckBox from './checkbox'

//list a todo item
//props = item, handleEdit, handleDelete, handleComplete
const ListTodoItem = (props)  => {


  const item = props.item

  const handleEdit = () => {
    props.handleEdit(item);
  }

  const handleDelete = () => {
    props.handleDelete(item);
  }

  const handleComplete = () => {
    props.handleComplete(item);
  }
  
  return (
    <li className="todolistitem">
      <CheckBox checked={item.completed} onChange={handleComplete}/>
      {` ${item.content}`}
      <br></br>
      <button className="editbutton" onClick={handleEdit}>edit</button>
      <button className="button" onClick={handleDelete}>delete</button>
    </li>
  )
}

export default ListTodoItem