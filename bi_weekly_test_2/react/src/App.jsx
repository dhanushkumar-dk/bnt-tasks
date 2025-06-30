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
import Child from "./Components/Child";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {/* <Counter /> */}

      {/* <ButtonToggle /> */}

      {/* App.jsx as parent and passing props to child.jsx */}
      {/* <Child message="Good Morning!" /> */}

      {/* App.jsx as super grand parent, app -> grand parent -> parent -> child */}
      {/* <GrandParent /> */}

      {/* <ArrayNameMap /> */}

      {/* <Checkbox /> */}

      {/* <ControlledComponent /> */}

      {/* ReusableInputFeild usage */}
      {/* <div style={{ padding: "20px" }}>
        <ReusableInputFeild
          type="text"
          label="Name"
          placeholder="Enter your name"
          name="username"
          onChange={handleChange}
        />
        <ReusableInputFeild
          type="number"
          label="Age"
          placeholder="Enter your age"
          name="userage"
          onChange={handleChange}
        />

        <p>Typed Value: {inputValue}</p>
      </div> */}

      {/* <LoginForm /> */}

      {/* <ItemList /> */}

      <Todo />

      {/* <CounterIncreaseReset /> */}
    </>
  );
}

export default App;
