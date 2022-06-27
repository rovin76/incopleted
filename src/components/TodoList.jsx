import React from "react";

const TodoList = ({ data, handleDelete, handleToggle }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <span> {item.title} </span>
            <span>{item.isCompleted ? "Done" : "NoteDone"}</span>
            <button onClick={() => handleToggle(item.id)}>Toggle</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
