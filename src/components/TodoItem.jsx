import React from "react";
import "../styles.css";
import TodoList from "./TodoList";
const TodoItem = ({ data, handleDelete, handleToggle }) => {
  return (
    <div>
      <h1>Incompleted</h1>
      <TodoList
        data={data.filter((item) => !item.isCompleted)}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />

      <h1>Completed</h1>
      <TodoList
        data={data.filter((item) => item.isCompleted)}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  );
};

export default TodoItem;
