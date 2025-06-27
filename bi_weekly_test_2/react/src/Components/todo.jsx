import React, { useState } from "react";

export const listTodo = (props) => {
  return <div style={{ display: "flex" }}>
    
  </div>;
};

const todo = () => {
  const [todo, setTodo] = useState([
    { id: 1, title: "todo1" },
    { id: 2, title: "todo2" },
    { id: 3, title: "todo3" },
  ]);
  return (
    <div>
      {todo.map((curtodo) => {
        <listTodo key={curtodo.id} title={curtodo.title} />;
      })}
    </div>
  );
};

export default todo;
