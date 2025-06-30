import React from "react";

function ReusableUnputFeild({ label, placeholder, name, onChange }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label htmlFor={name} style={{ display: "block", marginBottom: "5px" }}>
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        style={{
          padding: "8px",
          width: "100%",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}

export default ReusableUnputFeild;
