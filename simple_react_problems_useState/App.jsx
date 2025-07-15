import {
  CounterApp,
  ToggleVisibility,
  ControlledInput,
  ClickTracker,
  ShowHidePassword,
  GreetingApp,
  ThemeToggle,
  ListRenderer,
  SimpleFormValidation,
  EvenOddChecker,
} from "./Components/Components";

function App() {
  const Part1 = false;

  return (
    <>
      {Part1 && (
        <div style={{ padding: "20px" }}>
          <h1>React Beginner Component Demos</h1>
          <CounterApp />
          <ToggleVisibility />
          <ControlledInput />
          <ClickTracker />
          <ShowHidePassword />
          <GreetingApp />
          <ThemeToggle />
          <ListRenderer />
          <SimpleFormValidation />
          <EvenOddChecker />
        </div>
      )}
    </>
  );
}

export default App;
