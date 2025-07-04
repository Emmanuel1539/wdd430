import React, { useState } from 'react'
import './styles.css'
import NewTodoForm from './components/NewTodoForm/NewTodoForm';
import TodoList from './components/TodoList/TodoList';

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
    <NewTodoForm handleChange = {handleChange} handleSubmit={handleSubmit} newItem={newItem}/>
    <h1 className='header'> Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

  </>
  )

}

export default App