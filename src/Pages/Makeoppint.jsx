import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Styles/Petass.css";
import "../assets/Styles/oppoinment.css";
import dog from "../assets/images/paw.png";

export default function Makeoppint() {
  const navigate = useNavigate();

  const [fdata, setFdata] = useState({
    name: "",
    number: "",
    email: "",
  });

  useEffect(() => {
    const savedata = localStorage.getItem("userForm");
    if (savedata) {
      setFdata(JSON.parse(savedata));
    }
  }, []);

  return (
    <>
      <div className="container dogs-parent3">
        <div className="dog-head3">
          <h2>Make Appointment</h2>
          <img src={dog} alt="Dog Paw" />
        </div>
      </div>

      <div className="container text-center">
        <p className="fs-3">
          <strong>Thank you for expressing your interest in adopting a pet</strong>
        </p>
        <p className="fs-3">
          Please answer the assessment questions to assist us in scheduling your
          appointment with the NGO/shelter coordinator and to assess your
          readiness for adopting a pet.
        </p>
      </div>

      <div className="container mt-5">
        <form className="row g-3 align-items-center" onSubmit={(e) => {
          e.preventDefault();
          navigate("/payment");
        }}>
          <div className="col-12">
            <label className="form-label">
              Subject <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control custom-input"
              placeholder="1234 Main St"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control custom-input"
              value={fdata.name}
              onChange={() => {}}
              readOnly
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control custom-input"
              value={fdata.email}
              onChange={() => {}}
              readOnly
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Time <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control custom-input"
              placeholder="10.30 AM"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Date <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control custom-input"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Shelter Name</label>
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Bluecross of Chennai"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Shelter Phone Number</label>
            <input
              type="tel"
              className="form-control custom-input"
              placeholder="+91 85645925"
            />
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="custom-button">
              Book Appointment
            </button>
          </div>
        </form>
      </div>

      <div className="container text-center mt-5">
        <div className="who-head">
          <h1>Who We Are</h1>
          <img src={dog} alt="dog-paw" />
        </div>
        <div className="who-content-1">
          <p>
            Pet Me is a 150(d)(3) nonprofit organisation dedicated community of
            pet lovers working to reduce euthanasia in local shelters and
            increase awareness of rescue dogs being wonderful pets. We rescue
            pets and place them in loving homes.
          </p>
        </div>

        <div className="who-content-2" style={{ backgroundColor: "#EF523F" }}>
          <div>
            <h3>1000+</h3>
            <p>Adoption<br />Applications</p>
          </div>
          <div>
            <h3>600+</h3>
            <p>Pets<br />Adopted</p>
          </div>
          <div>
            <h3>200+</h3>
            <p>Pets<br />Onboarded</p>
          </div>
          <div>
            <h3>2200+</h3>
            <p>Rescued</p>
          </div>
        </div>
      </div>
    </>
  );
}
