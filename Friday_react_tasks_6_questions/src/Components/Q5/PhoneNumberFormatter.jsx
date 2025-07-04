import { useState } from "react";

export const PhoneNumberFormatter = () => {
  const [phone, setPhone] = useState("");

  const formatPhoneNumber = (value) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, "");

    // Apply formatting
    const match = numbers.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return numbers;

    let formatted = "";
    if (match[1]) {
      formatted += `(${match[1]}`;
    }
    if (match[1] && match[1].length === 3) {
      formatted += ") ";
    }
    if (match[2]) {
      formatted += match[2];
    }
    if (match[2] && match[2].length === 3) {
      formatted += "-";
    }
    if (match[3]) {
      formatted += match[3];
    }

    return formatted;
  };

  const handleChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  return (
    <div style={{ padding: "20px" }}>
      <label>Phone Number:</label>
      <br />
      <input
        type="text"
        value={phone}
        onChange={handleChange}
        placeholder="(123) 456-7890"
        maxLength="14"
        style={{ padding: "8px", fontSize: "16px" }}
      />
    </div>
  );
};

export const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    const numbersOnly = input.replace(/\D/g, ""); // Remove non-numeric

    // Format as (123) 456-7890
    let formatted = "";
    if (numbersOnly.length <= 3) {
      formatted = `(${numbersOnly}`;
    } else if (numbersOnly.length <= 6) {
      formatted = `(${numbersOnly.slice(0, 3)}) ${numbersOnly.slice(3)}`;
    } else {
      formatted = `(${numbersOnly.slice(0, 3)}) ${numbersOnly.slice(
        3,
        6
      )}-${numbersOnly.slice(6, 10)}`;
    }

    setPhoneNumber(formatted);
  };

  return (
    <div style={{ padding: "20px" }}>
      <label htmlFor="phone">Phone Number:</label>
      <br />
      <input
        id="phone"
        type="text"
        value={phoneNumber} // controlled component
        onChange={handleChange}
        placeholder="(123) 456-7890"
        maxLength={14} // ensures full format doesn't overflow
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "200px",
          marginTop: "5px",
        }}
      />
    </div>
  );
};
