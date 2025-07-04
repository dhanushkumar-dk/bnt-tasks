import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const activeStyle = {
  fontWeight: "bold",
  color: "blue",
  borderBottom: "2px solid blue",
};

function FormLayout() {
  const [formData, setFormData] = useState({
    profile: { name: "", email: "", phone: "" },
    interests: [],
    settings: { notification: "", termsAccepted: false },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <h2>Multi Tab Form</h2>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <NavLink
          to="profile"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Profile
        </NavLink>
        <NavLink
          to="interests"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Interests
        </NavLink>
        <NavLink
          to="settings"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Settings
        </NavLink>
      </nav>

      <form onSubmit={handleSubmit}>
        <Outlet context={[formData, setFormData]} />
        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <button type="submit">Submit All</button>
        </div>
      </form>
    </div>
  );
}

export default FormLayout;
