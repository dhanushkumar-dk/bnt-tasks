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
      <ul style={{ textAlign: "start", padding: 0 }}>
        {/* list start */}
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px", listStyle: "none" }}>
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
      {/* list end */}
    </div>
  );
}

export default Checkbox;
