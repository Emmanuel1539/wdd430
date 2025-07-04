import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

function TodoList({todos, toggleTodo, deleteTodo}) {

    
  return (
    <ul className='list'>
        <TodoListItem todos = {todos} toggleTodo = {toggleTodo} deleteTodo={deleteTodo} />
    </ul>
  )
}

export default TodoList