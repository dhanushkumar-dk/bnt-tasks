import React from "react";
import { useOutletContext } from "react-router-dom";

function InterestsForm() {
  const [formData, setFormData] = useOutletContext();

  const toggleInterest = (interest) => {
    setFormData((prev) => {
      const current = prev.interests.includes(interest);
      const updatedInterests = current
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      return {
        ...prev,
        interests: updatedInterests,
      };
    });
  };

  return (
    <div>
      <h3>Interests</h3>
      {["Coding", "Music", "Sports"].map((interest) => (
        <label key={interest}>
          <input
            type="checkbox"
            checked={formData.interests.includes(interest)}
            onChange={() => toggleInterest(interest)}
          />
          {interest}
        </label>
      ))}
    </div>
  );
}

export default InterestsForm;
