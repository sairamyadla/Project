import React, { useState } from "react";
import "./DietaryPlan.css";

function Diet() {
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
    } else if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully!");
      setFormData({ name: "", description: "" }); // Clear form
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <h1>Dietary Plan</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        {/* Description Field */}
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={errors.description ? "input-error" : ""}
          ></textarea>
          {errors.description && (
            <p className="error-message">{errors.description}</p>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Diet;
