import React from "react";
import { useOutletContext } from "react-router-dom";

function ProfileForm() {
  const [formData, setFormData] = useOutletContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [name]: value,
      },
    }));
  };

  return (
    <div>
      <h3>Profile Info</h3>
      <input
        name="name"
        value={formData.profile.name}
        onChange={handleChange}
        placeholder="Full Name"
      />
      <br />
      <input
        name="email"
        value={formData.profile.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <br />
      <input
        name="phone"
        value={formData.profile.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
    </div>
  );
}

export default ProfileForm;
