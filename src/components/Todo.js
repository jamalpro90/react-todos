import React from 'react'

const Todo = ({text, todos, setTodos, todo}) => {

  const deleteHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id))
  }

  const completedHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        console.log(todos)
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }))
  }

  return (
    <div className="todo">
      <li className={`${todo.completed ? 'completed' : ''} todo-item`}>{text}</li>
      <button className="complete-btn" onClick={completedHandler}>
        <i className="fas fa-check"></i></button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i></button>
    </div>
  )
}

export default Todo
