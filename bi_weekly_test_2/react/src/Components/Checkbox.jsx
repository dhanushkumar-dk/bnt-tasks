import React, { useState } from "react";

const DisplayCheck = ({ ItemName, checked }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      <input type="checkbox" checked={checked} />
      {checked && <p>{ItemName} checked</p>}
    </div>
  );
};

const Checkbox = () => {
  const [checkData, setCheckData] = useState([
    { id: 1, ItemName: "Item1", checked: true },
    { id: 2, ItemName: "Item2", checked: true },
    { id: 3, ItemName: "Item3", checked: false },
  ]);

  const checkmybox = (id) => {
    setCheckData(...checkData);
  };

  return (
    <div>
      <ul>
        {checkData.map((item) => (
          <DisplayCheck
            key={item.id}
            ItemName={item.ItemName}
            checked={item.checked}
          />
        ))}
      </ul>
    </div>
  );
};

export default Checkbox;
