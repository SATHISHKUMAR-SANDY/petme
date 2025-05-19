import React, { useState, useEffect } from "react";
import "../assets/Styles/Petass.css";
import dog from "../assets/images/paw.png";
import { useNavigate } from "react-router-dom";

export default function Petassesment() {
  const [ratio, setRatio] = useState({
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


const navi = useNavigate()
  const [err, seterr] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRatio((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newerr = {};

    if (!ratio.name.trim()) newerr.name = "Name field is required";
    if (!ratio.occupation.trim()) newerr.occupation = "Occupation field is required";

    if (!ratio.number.trim()) {
      newerr.number = "Phone number is required";
    } else if (isNaN(ratio.number) || ratio.number.length !== 10) {
      newerr.number = "Enter a valid 10-digit number";
    }

    if (!ratio.email) {
      newerr.email = "Email field is required";
    } else if (!/^\S+@\S+\.\S+$/.test(ratio.email)) {
      newerr.email = "Enter valid Email";
    }

    if (!ratio.answer1) newerr.answer1 = "This question is required";
    if (!ratio.answer2) newerr.answer2 = "This question is required";
    if (!ratio.answer3) newerr.answer3 = "This question is required";
    if (!ratio.answer4) newerr.answer4 = "This question is required";
    if (!ratio.answer5) newerr.answer5 = "This question is required";

    seterr(newerr);
    return Object.keys(newerr).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", ratio);
      alert("Form submitted successfully!");
      localStorage.setItem("userForm", JSON.stringify(ratio));
      navi("/makeoppinment")
    } else {
      alert("All fields are required");
    }
  };

  useEffect(() => {
    const savdata = localStorage.getItem("userForm");
    if (savdata) {
      setRatio(JSON.parse(savdata));
    }


  }, []);

  return (
    <div>
      <div className="container dogs-parent3">
        <div className="dog-head3">
          <h2>Pet Assessment</h2>
          <img src={dog} alt="Dog Paw" />
        </div>
      </div>

      <div className="container text-center">
        <p className="fs-3">
          <strong>
            Thank you for expressing your interest in adopting a pet
          </strong>
        </p>
        <p className="fs-3">
          Please answer the assessment questions to assist us in scheduling your
          appointment with the NGO/shelter coordinator and to assess your
          readiness for adopting a pet.
        </p>
      </div>

      <div className="container m-5">
        <h1>Part A</h1>
        <form onSubmit={handleSubmit}>
          {/* Basic Info */}
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Address", name: "address", type: "text" },
            { label: "Telephone Number", name: "number", type: "text" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Current Occupation", name: "occupation", type: "text" },
          ].map((field, idx) => (
            <div className="first-group mb-3" key={idx}>
              <label>
                {field.label} <span className="text-danger">*</span>
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={`Enter your ${field.label}`}
                value={ratio[field.name]}
                onChange={handleChange}
              />
              {err[field.name] && (
                <div className="text-danger">{err[field.name]}</div>
              )}
            </div>
          ))}

          {/* Radio Questions */}
          <div className="container m-5">
            <h1>Part B</h1>

            {[
              {
                label: "Are you living with family?",
                name: "answer1",
              },
              {
                label:
                  "If you live in a rented house, does your landlord allow pets?",
                name: "answer2",
              },
              {
                label: "Do you have any prior pet experience?",
                name: "answer3",
              },
              {
                label:
                  "Will you be able to take your pet for a walk twice/thrice a day?",
                name: "answer4",
              },
              {
                label:
                  "Is there anyone to take care of the pet when you are out?",
                name: "answer5",
              },
            ].map((q, idx) => (
              <div className="row first-group2 mb-3" key={idx}>
                <div className="col-5">
                  <label>
                    {q.label}
                    <span className="text-danger">*</span>
                  </label>
                </div>
                <div className="col-5">
                  <input
                    type="radio"
                    name={q.name}
                    value="yes"
                    checked={ratio[q.name] === "yes"}
                    onChange={handleChange}
                  />
                  <label htmlFor={`${q.name}-yes`} className="me-2">Yes</label>
                  <input
                    type="radio"
                    name={q.name}
                    value="no"
                    checked={ratio[q.name] === "no"}
                    onChange={handleChange}
                  />
                  <label htmlFor={`${q.name}-no`}>No</label>
                  {err[q.name] && (
                    <div className="text-danger">{err[q.name]}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button type="submit"  className=" navi-button" >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
