import React, { useState } from "react";

function PasswordValidatorForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordHints, setPasswordHints] = useState([]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkPasswordRules = (password) => {
    const issues = [];
    const specialChars = password.match(/[@#$%/]/g) || [];
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);

    if (password.length < 8) issues.push("Minimum 8 characters required");
    if (specialChars.length < 2)
      issues.push(
        `${
          2 - specialChars.length
        } special character(s) missing (@, #, $, %, /)`
      );
    if (!hasLower) issues.push("At least 1 lowercase letter missing");
    if (!hasUpper) issues.push("At least 1 uppercase letter missing");
    if (!hasDigit) issues.push("At least 1 number missing");

    return issues;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const hints = checkPasswordRules(password);

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    if (hints.length > 0) {
      newErrors.password = "Password does not meet requirements";
      setPasswordHints(hints);
    } else {
      setPasswordHints([]);
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage("Form submitted successfully!");
      setEmail("");
      setPassword("");
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Password Validator Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={form_row}>
          <label>Email:</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

        <div style={form_row}>
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordHints(checkPasswordRules(e.target.value));
            }}
            style={{ width: "100%" }}
          />
        </div>
        {errors.password && (
          <div style={{ color: "red" }}>{errors.password}</div>
        )}
        {passwordHints.length > 0 && (
          <ul style={{ color: "orange", marginTop: "5px" }}>
            {passwordHints.map((hint, index) => (
              <li key={index}>{hint}</li>
            ))}
          </ul>
        )}

        <button type="submit">Submit</button>
      </form>

      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
}

const form_row = {
  display: "flex",
  flexDirection: "row",
  marginBottom: "10px",
};

export default PasswordValidatorForm;
