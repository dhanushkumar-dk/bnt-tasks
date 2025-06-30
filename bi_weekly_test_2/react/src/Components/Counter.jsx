import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container" style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <p> count is {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
    </>
  );
};

export default Counter;
