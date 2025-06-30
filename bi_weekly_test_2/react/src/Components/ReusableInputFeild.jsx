import React from "react";

function ReusableUnputFeild({ type, label, placeholder, name, onChange }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      {/* Label Name */}
      <label htmlFor={name} style={{ display: "block", marginBottom: "5px" }}>
        {label}
      </label>

      {/* Input  */}
      <input
        type={type}
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
