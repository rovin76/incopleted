import React, { useState } from "react";

const TodoAdd = ({ handleAdd }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Todo List</h1>
      <input
        placeholder="Enter Something"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleAdd(text)}>Add</button>
    </div>
  );
};

export default TodoAdd;
