import React from 'react'
import './TodoListItem.css'

function TodoListItem({todos, toggleTodo, deleteTodo}) {
  return (
    <>
        { todos.length ===0? <p>You do not have any todo!</p>
        : todos.map((todo) => {
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
    </>
  )
}

export default TodoListItem