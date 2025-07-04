// import React, { useState } from "react";

// function TextTransformer() {
//   const [text, setText] = useState("");

//   const handleUppercase = () => {
//     setText(text.toUpperCase());
//   };

//   const handleLowercase = () => {
//     setText(text.toLowerCase());
//   };

//   const handleReverse = () => {
//     setText(text.split("").reverse().join(""));
//   };

//   const handleCapitalize = () => {
//     const capitalized = text
//       .toLowerCase()
//       .split(" ")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ");
//     setText(capitalized);
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>Text Transformer</h2>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
//         placeholder="Enter text here"
//       />
//       <div style={{ marginTop: "10px" }}>
//         <button onClick={handleUppercase}>UPPERCASE</button>
//         <button onClick={handleLowercase}>lowercase</button>
//         <button onClick={handleReverse}>Reverse</button>
//         <button onClick={handleCapitalize}>Capitalize</button>
//       </div>
//     </div>
//   );
// }

// export default TextTransformer;

import { useState } from "react";

function TextTransformer() {
  const [text, setText] = useState("");

  const handleUppercase = () => setText(text.toUpperCase());

  const handleLowercase = () => setText(text.toLowerCase());

  const handleReverse = () => setText(text.split("").reverse().join(""));

  const handleCapitalize = () => {
    const capitalized = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(capitalized);
  };

  const handleClear = () => setText(""); // 🧹 Clear the text input

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Text Transformer</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
        placeholder="Enter text here"
      />
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <button onClick={handleUppercase}>UPPERCASE</button>
        <button onClick={handleLowercase}>lowercase</button>
        <button onClick={handleReverse}>Reverse</button>
        <button onClick={handleCapitalize}>Capitalize</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default TextTransformer;
