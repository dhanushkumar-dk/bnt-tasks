import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import ButtonToggle from "./Components/ButtonToggle";
import Parent from "./Components/Parent";
import GrandParent from "./Components/GrandParent";
import ArrayNameMap from "./Components/ArrayNameMap";
import Checkbox from "./Components/Checkbox";
import CounterIncreaseReset from "./Components/CounterIncreaseReset";
import Todo from "./Components/todo";
import ControlledComponent from "./Components/ControlledComponent";
import ReusableInputFeild from "./Components/ReusableInputFeild"; // ✅ import here
import ItemList from "./Components/ItemList";
import LoginForm from "./Components/LoginForm";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {/* <Counter /> */}
      {/* <ButtonToggle /> */}
      {/* <GrandParent /> */}
      {/* <ArrayNameMap /> */}
      {/* <Checkbox /> */}
      {/* <CounterIncreaseReset /> */}
      {/* <Todo /> */}
      {/* <ControlledComponent /> */}

      {/* ReusableInputFeild usage */}
      {/* <div style={{ padding: "20px" }}>
        <h2>Reusable InputField Component Demo</h2>
        <ReusableInputFeild
          label="Name"
          placeholder="Enter your name"
          name="username"
          onChange={handleChange}
        />

        <p>Typed Value: {inputValue}</p>
      </div> */}
      {/* <LoginForm /> */}
      {/* <ItemList /> */}
    </>
  );
}

export default App;
