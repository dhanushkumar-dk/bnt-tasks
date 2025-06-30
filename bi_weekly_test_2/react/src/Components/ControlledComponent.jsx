import { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value); // updates state on every keystroke
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted name: " + name);
  };

  return (
    <div>
      <h2>Controlled Component Example</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <p>Typed value: {name}</p>
    </div>
  );
}

export default ControlledComponent;
