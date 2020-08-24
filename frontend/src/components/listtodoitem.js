import React from 'react'
import CheckBox from './checkbox'

//list a todo item
//props = itm, handleEdit, handleDelte, handleComplete
const ListTodoItem = (props)  => {

  const item = props.item

  const handleEdit = () => {
    props.handleEdit(item.id);
  }

  const handleDelete = () => {
    props.handleDelete(item.id);
  }

  const handleComplete = () => {
    props.handleComplete(item.id);
  }

  return (
    <li>
      {item.content}
      <CheckBox checked={item.completed} onChange={handleComplete}/>
      <button onClick={handleEdit}>edit</button>
      <button onClick={handleDelete}>delete</button>
    </li>
  )
}

export default ListTodoItem