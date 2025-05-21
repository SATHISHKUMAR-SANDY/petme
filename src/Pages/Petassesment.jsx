import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Styles/Petass.css";
import dog from "../assets/images/paw.png";

export default function PetAssessment() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
    email: "",
    occupation: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.occupation.trim()) newErrors.occupation = "Occupation is required";

    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required";
    } else if (isNaN(formData.number) || formData.number.length !== 10) {
      newErrors.number = "Enter a valid 10-digit number";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid Email";
    }

    for (let i = 1; i <= 5; i++) {
      if (!formData[`answer${i}`]) {
        newErrors[`answer${i}`] = "This question is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("userForm", JSON.stringify(formData));
      alert("Form submitted successfully!");
      navigate("/makeoppinment");
    } else {
      alert("Please complete all required fields");
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("userForm");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="pet-container">
      <div className="dog-head">
        <h2>Pet Assessment</h2>
        <img src={dog} alt="Dog Paw" />
      </div>

      <div className="intro-text">
        <p><strong>Thank you for expressing your interest in adopting a pet.</strong></p>
        <p>
          Please answer the assessment questions to assist us in scheduling your appointment with the NGO/shelter coordinator and to assess your readiness for adopting a pet.
        </p>
      </div>

      <form className="form-wrapper" onSubmit={handleSubmit}>
        <h3>Part A - Basic Info</h3>
        {[
          { label: "Name", name: "name", type: "text" },
          { label: "Address", name: "address", type: "text" },
          { label: "Telephone Number", name: "number", type: "text" },
          { label: "Email Address", name: "email", type: "email" },
          { label: "Current Occupation", name: "occupation", type: "text" },
        ].map((field, idx) => (
          <div className="form-group" key={idx}>
            <label>
              {field.label} <span className="required">*</span>
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={`Enter your ${field.label}`}
            />
            {errors[field.name] && <div className="error">{errors[field.name]}</div>}
          </div>
        ))}

        <h3>Part B - Pet Readiness</h3>
        {[
          "Are you living with family?",
          "If you live in a rented house, does your landlord allow pets?",
          "Do you have any prior pet experience?",
          "Will you be able to take your pet for a walk twice/thrice a day?",
          "Is there anyone to take care of the pet when you are out?",
        ].map((question, idx) => {
          const name = `answer${idx + 1}`;
          return (
            <div className="form-group" key={idx}>
              <label>{question} <span className="required">*</span></label>
              <div className="radio-group">
                <label><input type="radio" name={name} value="yes" checked={formData[name] === "yes"} onChange={handleChange} /> Yes</label>
                <label><input type="radio" name={name} value="no" checked={formData[name] === "no"} onChange={handleChange} /> No</label>
              </div>
              {errors[name] && <div className="error">{errors[name]}</div>}
            </div>
          );
        })}

        <div className="submit-wrap">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}
