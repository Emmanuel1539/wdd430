import React from 'react'
import './NewTodoForm.css'

function NewTodoForm({handleChange, newItem, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input 
       value = {newItem}     
        onChange={handleChange} 
        type="text" 
        id="item"/>
    </div>
    <button className='btn'>Add</button>
    </form>
  )
}

export default NewTodoForm