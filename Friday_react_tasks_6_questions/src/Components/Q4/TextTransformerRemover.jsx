import { useState } from "react";

export const TextTransformerRemover = () => {
  const [originalText, setOriginalText] = useState("");
  const [transformedText, setTransformedText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setOriginalText(value);
    setTransformedText(value); // keep both in sync
  };

  const handleUppercase = () => {
    setTransformedText(originalText.toUpperCase());
  };

  const handleLowercase = () => {
    setTransformedText(originalText.toLowerCase());
  };

  const handleReverse = () => {
    setTransformedText(originalText.split("").reverse().join(""));
  };

  const handleCapitalize = () => {
    const capitalized = originalText
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setTransformedText(capitalized);
  };

  const handleResetFormat = () => {
    setTransformedText(originalText); // Reset to original user input
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Text Transformer Remover</h2>
      <input
        type="text"
        value={originalText}
        onChange={handleChange}
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
        <button onClick={handleResetFormat}>Reset Format</button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>Output:</h3>
        <p
          style={{
            fontSize: "18px",
            border: "1px solid #ccc",
            padding: "10px",
            width: "60%",
            margin: "auto",
          }}
        >
          {transformedText}
        </p>
      </div>
    </div>
  );
};

export const CombinationTextTransformer = () => {
  const [originalText, setOriginalText] = useState("");
  const [transformedText, setTransformedText] = useState("");
  const [transformOptions, setTransformOptions] = useState({
    uppercase: false,
    lowercase: false,
    reverse: false,
    capitalize: false,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setOriginalText(value);
    setTransformedText(value); // reset display when typing
  };

  const handleOptionChange = (e) => {
    const { name, checked } = e.target;
    setTransformOptions((prev) => ({ ...prev, [name]: checked }));
  };

  const handleTransform = () => {
    let result = originalText;

    if (transformOptions.lowercase) {
      result = result.toLowerCase();
    }

    if (transformOptions.uppercase) {
      result = result.toUpperCase();
    }

    if (transformOptions.capitalize) {
      result = result
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    if (transformOptions.reverse) {
      result = result.split("").reverse().join("");
    }

    setTransformedText(result);
  };

  const handleResetFormat = () => {
    setTransformedText(originalText);
    setTransformOptions({
      uppercase: false,
      lowercase: false,
      reverse: false,
      capitalize: false,
    });
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Combined Text Transformer</h2>

      <input
        type="text"
        value={originalText}
        onChange={handleChange}
        style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
        placeholder="Enter text here"
      />

      <div style={{ marginTop: "10px", marginBottom: "20px" }}>
        <label>
          <input
            type="checkbox"
            name="uppercase"
            checked={transformOptions.uppercase}
            onChange={handleOptionChange}
          />{" "}
          UPPERCASE
        </label>{" "}
        <label>
          <input
            type="checkbox"
            name="lowercase"
            checked={transformOptions.lowercase}
            onChange={handleOptionChange}
          />{" "}
          lowercase
        </label>{" "}
        <label>
          <input
            type="checkbox"
            name="capitalize"
            checked={transformOptions.capitalize}
            onChange={handleOptionChange}
          />{" "}
          Capitalize
        </label>{" "}
        <label>
          <input
            type="checkbox"
            name="reverse"
            checked={transformOptions.reverse}
            onChange={handleOptionChange}
          />{" "}
          Reverse
        </label>
      </div>

      <button onClick={handleTransform} style={{ marginRight: "10px" }}>
        Transform
      </button>
      <button onClick={handleResetFormat}>Reset Format</button>

      <div style={{ marginTop: "30px" }}>
        <h3>Output:</h3>
        <p
          style={{
            fontSize: "18px",
            border: "1px solid #ccc",
            padding: "10px",
            width: "60%",
            margin: "auto",
          }}
        >
          {transformedText}
        </p>
      </div>
    </div>
  );
};
