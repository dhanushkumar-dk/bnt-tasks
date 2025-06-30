import { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted name: " + name);
  };

  return (
    <div>
      <h2>Controlled Component Example</h2>
      <p>Typed value: {name}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ControlledComponent;
