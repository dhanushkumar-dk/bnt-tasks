import React, { useState } from "react";

// 1. Counter App
export function CounterApp() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <hr />
    </div>
  );
}

// 2. Toggle Visibility
export function ToggleVisibility() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <h2>Toggle Visibility</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"} Text
      </button>
      {visible && <p>This is a toggleable paragraph.</p>}
      <hr />
    </div>
  );
}

// 3. Controlled Input
export function ControlledInput() {
  const [text, setText] = useState("");
  return (
    <div>
      <h2>Controlled Input</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>You typed: {text}</p>
      <hr />
    </div>
  );
}

// 4. Click Tracker
export function ClickTracker() {
  const [clicks, setClicks] = useState(0);
  return (
    <div>
      <h2>Click Tracker</h2>
      <button onClick={() => setClicks(clicks + 1)}>Click Me</button>
      <p>Button clicked {clicks} times</p>
      <hr />
    </div>
  );
}

// 5. Show/Hide Password
export function ShowHidePassword() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <h2>Show/Hide Password</h2>
      <input type={visible ? "text" : "password"} placeholder="Password" />
      <label>
        <input type="checkbox" onChange={() => setVisible(!visible)} />
        Show Password
      </label>
      <hr />
    </div>
  );
}

// 6. Greeting App
export function GreetingApp() {
  const [name, setName] = useState("");
  const [greet, setGreet] = useState("");
  const handleSubmit = () => {
    setGreet(`Hello, ${name}!`);
  };
  return (
    <div>
      <h2>Greeting App</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit}>Greet</button>
      <p>{greet}</p>
      <hr />
    </div>
  );
}

// 7. Light/Dark Mode Toggle
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const style = {
    backgroundColor: dark ? "#333" : "#eee",
    color: dark ? "#fff" : "#000",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div style={style}>
      <h2>Light/Dark Mode</h2>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <hr />
    </div>
  );
}

// 8. List Renderer
export function ListRenderer() {
  const names = ["Alice", "Bob", "Charlie"];
  return (
    <div>
      <h2>List Renderer</h2>
      <ul>
        {names.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

// 9. Simple Form Validation
export function SimpleFormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Both fields are required");
    } else {
      setError("");
      alert("Form submitted!");
    }
  };

  return (
    <div>
      <h2>Form Validation</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <hr />
    </div>
  );
}

// 10. Even/Odd Number Checker
export function EvenOddChecker() {
  const [num, setNum] = useState("");
  const isEven = (n) => n % 2 === 0;

  return (
    <div>
      <h2>Even/Odd Checker</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      {num !== "" && (
        <p>{isEven(Number(num)) ? "Even Number" : "Odd Number"}</p>
      )}
      <hr />
    </div>
  );
}
