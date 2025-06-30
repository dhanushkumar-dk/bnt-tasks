import React, { useState } from "react";

function Checkbox() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React", checked: false },
    { id: 2, text: "Practice DSA", checked: false },
    { id: 3, text: "Build Projects", checked: false },
  ]);

  // Toggle checkbox status
  const handleCheckboxChange = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div>
      <h2>My Task List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <span
              style={{
                textDecoration: item.checked ? "line-through" : "none",
                marginLeft: "10px",
              }}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checkbox;
