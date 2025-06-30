import React, { useState } from "react";

function ItemList() {
  const [items, setItems] = useState([
    { id: 1, name: "React" },
    { id: 2, name: "JavaScript" },
    { id: 3, name: "Node.js" },
  ]);

  const handleDelete = (id) => {
    // Filter out the deleted item and update state
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            {item.name}
            <button
              onClick={() => handleDelete(item.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
