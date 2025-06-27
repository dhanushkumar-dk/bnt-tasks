import React, { useState } from "react";

const ButtonToggle = () => {
  const [data, setData] = useState("Hello");
  return (
    <div className="container" style={{ display: "flex", gap: "1rem" }}>
      <button
        onClick={() => {
          data !== data ? setData("Welcome Back") : setData("Hello");
          setData("Welcome Back");
        }}
      >
        {data}
      </button>
    </div>
  );
};

export default ButtonToggle;
