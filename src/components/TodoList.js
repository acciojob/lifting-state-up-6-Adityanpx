import React from "react";

function TodoList({ todo , handleComplete}) {
  return (
    <div>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bolder",
        }}
      >
        Child Component
      </p>

      <div>
        {todo.map((todo) => (
          <div key={todo.id}>
            <p>{todo.text}</p>
            {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
