import React from 'react'

const AddForm = (props)  => {
    
    const handleChange = (event) => {
      props.handleNewItemChange(event.target.value, props.index);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      props.addNewItem();

    }

    return (
      <li>
      <form onSubmit={handleSubmit}>
        <input value={props.content} onChange={handleChange}/>
        <button type="submit">AddNew</button>
      </form>
      </li>
    )
}
export default AddForm