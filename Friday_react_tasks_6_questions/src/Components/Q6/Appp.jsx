import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FormLayout from "./FormLayout";
import ProfileForm from "./ProfileForm";
import InterestsForm from "./InterestsForm";
import SettingsForm from "./SettingsForm";

function Appp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/form/profile" />} />
        <Route path="/form" element={<FormLayout />}>
          <Route path="profile" element={<ProfileForm />} />
          <Route path="interests" element={<InterestsForm />} />
          <Route path="settings" element={<SettingsForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Appp;
