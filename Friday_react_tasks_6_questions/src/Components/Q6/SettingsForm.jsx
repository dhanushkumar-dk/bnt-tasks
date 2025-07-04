import React from "react";
import { useOutletContext } from "react-router-dom";

function SettingsForm() {
  const [formData, setFormData] = useOutletContext();

  const handleSelect = (e) => {
    setFormData((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        notification: e.target.value,
      },
    }));
  };

  const handleCheckbox = (e) => {
    setFormData((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        termsAccepted: e.target.checked,
      },
    }));
  };

  return (
    <div>
      <h3>Settings</h3>
      <label>
        Notification:
        <select value={formData.settings.notification} onChange={handleSelect}>
          <option value="">Select</option>
          <option value="Email">Email</option>
          <option value="SMS">SMS</option>
          <option value="Push">Push</option>
        </select>
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={formData.settings.termsAccepted}
          onChange={handleCheckbox}
        />{" "}
        Accept Terms & Conditions
      </label>
    </div>
  );
}

export default SettingsForm;
