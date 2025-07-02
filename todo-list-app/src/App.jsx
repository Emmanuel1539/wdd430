import React, { useState } from 'react'
import './styles.css'

function App() {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos((prevTodos) => {
      return [...prevTodos, 
        {id: crypto.randomUUID(), title: newItem, completed: false}]
    })
    setNewItem('')
  }

  const handleChange = (e) => {
    setNewItem(e.target.value)}

  const toggleTodo = (id, completed) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
      
    })
  }

  const deleteTodo = (id) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

// const editTodo = (id, newTitle, newCompleted) => {
//   setTodos(prevTodos => 
//     prevTodos.map(todo => 
//       todo.id === id? {...todo, title: newTitle, completed: newCompleted}
//       : todo
//     )
//   )
// }


  return (
      <>
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input 
       value={newItem}      
        onChange={handleChange} 
        type="text" 
        id="item"/>
    </div>
    <button className='btn'>Add</button>
    </form>
    <h1 className='header'> Todo List</h1>
    <ul className='list'>
      {todos.map((todo) => {
        return <li key={todo.id}>
        <label >
          <input 
          type="checkbox" 
          checked= {todo.completed}
          onChange={e => toggleTodo(todo.id,e.target.checked)}
          />
          {todo.title}
        </label>
       <div>

        <button onClick={() => deleteTodo(todo.id)} className='btn btn-danger'>Delete</button>
       </div>
      </li>
      })}
     
    </ul>
  

  </>
  )

}

export default App