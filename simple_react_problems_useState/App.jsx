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
} from "./Components/Difficulty_set_1";

import {
  AccordionFAQ,
  CharacterCounter,
  FormLivePreview,
  ImageSlider,
  PersistentThemeToggle,
  SearchFilterList,
  Stopwatch,
  TabsComponent,
  TemperatureConverter,
  TodoApp,
} from "./Components/Difficulty_set_2";

function App() {
  const Part1 = true;
  const Part2 = false;

  return (
    <>
      {Part1 && (
        <>
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
        </>
      )}
      {Part2 && (
        <>
          <CharacterCounter />
          <TodoApp />
          <TemperatureConverter />
          <TabsComponent />
          <AccordionFAQ />
          <Stopwatch />
          <ImageSlider />
          <SearchFilterList />
          <FormLivePreview />
          <PersistentThemeToggle />
        </>
      )}
    </>
  );
}

export default App;
