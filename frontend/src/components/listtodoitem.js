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
      {item.content}
      <CheckBox checked={item.completed} onChange={handleComplete}/>
      <br></br>
      <button className="button" onClick={handleEdit}>edit</button>
      <button className="button" onClick={handleDelete}>delete</button>
    </li>
  )
}

export default ListTodoItem