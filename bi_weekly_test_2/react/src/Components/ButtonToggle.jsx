import { useState } from "react";

function ButtonToggle() {
  const [greeting, setGreeting] = useState("Hello");

  const handleToggle = () => {
    setGreeting((prev) => (prev === "Hello" ? "Welcome back" : "Hello"));
  };

  return (
    <div>
      <h2>{greeting}</h2>
      <button onClick={handleToggle}>Toggle Greeting</button>
    </div>
  );
}

export default ButtonToggle;
