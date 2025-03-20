import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  // ✅ Use useState to manage todos
  const [todos, setTodos] = useState([
    {
      id: "1",
      text: "Learn React",
      completed: false,
    },
    {
      id: "2",
      text: "Build a react application.",
      completed: false,
    },
    {
      id: "3",
      text: "Deploy the React App.",
      completed: false,
    },
  ]);

  
  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: true };
        }
        return todo;
      })
    );
  };
  

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Parent Component</h1>
      <TodoList todo={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
