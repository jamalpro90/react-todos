import React, { useContext, useEffect, useRef } from "react";
import { editContext } from "../context";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const { editMode, setEditMode } = useContext(editContext);
  const inputRef = useRef(null);

  // Jika edit mode aktif fokus ke input
  useEffect(() => {
    if (editMode.mode === true) {
      inputRef.current.focus();
      inputRef.current.value = editMode.value.text;
    }
  }, [editMode]);

  const inputTextHandler = e => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = e => {
    e.preventDefault();

    // Jika input kosong maka Alert
    if (inputText === "") {
      alert("Text Something");
      // Jika edit mode true maka edit todo
    } else if (editMode.mode === true) {
      setTodos(
        todos.filter(todo =>
          todo.id === editMode.value.id ? (todo.text = inputText) : todo.text
        )
      );
      setEditMode({ mode: false });
      setInputText("");
      // Jika edit mode false maka tambah todo biasa
    } else {
      const randomId = Math.floor(Math.random() * 100000);
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: randomId,
          timestamp: timestamp(),
        },
      ]);
      setInputText("");
    }
  };

  const statusHandler = e => {
    setStatus(e.target.value);
  };

  // Fungsi buat timestamp
  const timestamp = () => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let newMinutes = minutes < 10 ? "0" + minutes : minutes;

    return hours + ":" + newMinutes;
  };

  return (
    <div>
      <form>
        <input
          ref={inputRef}
          placeholder="Do something"
          onChange={inputTextHandler}
          value={inputText}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className={
            editMode.mode ? "back-blue todo-button" : "back-orange todo-button"
          }
          type="submit"
        >
          <i
            className={
              editMode.mode ? "blue fas fa-pen" : "orange fas fa-plus-square"
            }
          ></i>
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
  );
};

export default Form;
