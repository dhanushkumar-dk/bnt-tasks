import TrafficLight from "./Components/Q1/TrafficLight";
import PasswordValidatorForm from "./Components/Q2/PasswordValidatorForm";
import StarRating from "./Components/Q3/StarRating";
import TextTransformer from "./Components/Q4/TextTransformer";
import {
  CombinationTextTransformer,
  TextTransformerRemover,
} from "./Components/Q4/TextTransformerRemover";
import {
  PhoneInput,
  PhoneNumberFormatter,
} from "./Components/Q5/PhoneNumberFormatter";
import Appp from "./Components/Q6/Appp";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Traffic Light</h1>
      <TrafficLight />

      {/* <PasswordValidatorForm /> */}

      {/* <StarRating /> */}

      {/* <TextTransformer /> */}

      {/* <TextTransformerRemover />
      <CombinationTextTransformer /> */}

      {/* <PhoneNumberFormatter />
      <PhoneInput /> */}

      {/* <Appp /> */}
    </div>
  );
}

export default App;
