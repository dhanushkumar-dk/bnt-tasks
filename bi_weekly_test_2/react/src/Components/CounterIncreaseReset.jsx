import { useState } from "react";

const CounterIncreaseReset = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="container" style={{ display: "flex", gap: "1rem" }}>
          <button onClick={() => setCount((count) => count - 1)}>-</button>
          <p>Count: {count}</p>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
        <button onClick={() => setCount(0)}>Reset Count</button>
      </div>
    </>
  );
};

export default CounterIncreaseReset;
