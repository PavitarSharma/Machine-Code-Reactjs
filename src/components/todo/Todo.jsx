import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.value);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const updateTodo = (value, id, completed) => {
    const addNewTodo = todos.map((item) => {
      return item.id === id ? { id, value, completed } : item;
    });
    setTodos(addNewTodo);
    setEditTodo("");
  };

  const addTodos = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 10000),
          value: input,
          completed: false,
        },
      ]);
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  const deleteTodos = (id) => {
    const deleteTodo = todos.filter((item) => item.id !== id);
    setTodos(deleteTodo);
  };

  const completeTodos = (id) => {
    const completeTodo = todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setTodos(completeTodo);
  };

  const editTodos = (id) => {
    const findTodo = todos.find((item) => item.id === id);
    setEditTodo(findTodo);
    console.log(editTodo);
  };
  return (
    <div className="todos">
      <div>
        <div className="todo-form">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Add todos"
          />
          <button onClick={addTodos}>Add</button>
        </div>

        <div>
          {todos.map((item) => (
            <div key={item.id} className="todo-list">
              <ul>
                <li>{item.value}</li>
              </ul>
              <div className="buttons">
                <button
                  disabled={item.completed}
                  onClick={() => completeTodos(item.id)}
                >
                  Completed
                </button>
                <button onClick={() => editTodos(item.id)}>Edit</button>
                <button onClick={() => deleteTodos(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
