import React from 'react'

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    const randomId = Math.floor(Math.random() * 100000);
    setTodos([
      ...todos, {text: inputText, completed: false, id: randomId}
    ])
    setInputText('')

    console.log(todos)
  }
  
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  
  return (
    <div>
      <form>
        <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Form
