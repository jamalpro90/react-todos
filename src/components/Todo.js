import React, { useContext } from "react";
import { editContext } from "../context";

const Todo = ({ text, todos, setTodos, todo }) => {
  const { editMode, setEditMode } = useContext(editContext);

  // Delete Handler
  const deleteHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id));
  };

  // Complete Handler
  const completedHandler = () => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          console.log(todos);
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  // Edit Handler
  const editHandler = () => {
    setEditMode({
      mode: !editMode.mode,
      value: { text: todo.text, id: todo.id },
    });
  };

  return (
    <div className="todo">
      <li className={`${todo.completed ? "completed" : ""} todo-item`}>
        {text}
      </li>

      <span className="timestamp">{todo.timestamp}</span>

      <button
        disabled={editMode.mode === true ? true : false}
        className={`complete-btn ${editMode.mode ? "back-gray" : ""}`}
        onClick={completedHandler}
      >
        <i className="fas fa-check"></i>
      </button>
      <button
        disabled={editMode.mode === true ? true : false}
        className={`edit-btn ${editMode.mode ? "back-gray" : ""}`}
        onClick={editHandler}
      >
        <i className="fas fa-edit"></i>
      </button>
      <button
        disabled={editMode.mode === true ? true : false}
        className={`trash-btn ${editMode.mode ? "back-gray" : ""}`}
        onClick={deleteHandler}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
