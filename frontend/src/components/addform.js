import React from 'react'

//form to add a new item
//props = item, handleNewItemChange, handleSubmit
const AddForm = (props)  => {
   
    const item = props.item;
    const handleChange = (event) => {
      item.content = event.target.value;

      props.handleNewItemChange(item);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      props.addNewItem();

    }

    return (
      <li>
      <form onSubmit={handleSubmit}>
        <input value={item.content} onChange={handleChange}/>
        <button className="button" type="submit">Add</button>
      </form>
      </li>
    )
}
export default AddForm