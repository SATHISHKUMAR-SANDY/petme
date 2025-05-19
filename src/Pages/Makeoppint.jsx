import React from "react";
import "../assets/Styles/Petass.css";
import dog from "../assets/images/paw.png";
import { useState } from "react";
import { useEffect } from "react";
import "../assets/Styles/oppoinment.css";
import { useNavigate } from "react-router-dom";
export default function Makeoppint() {
   const navi = useNavigate()
  const [fdata, setfdata] = useState({
    name: "",
    number: "",
    email: "",
  });

  useEffect(() => {
    const savedata = localStorage.getItem("userForm");
    if (savedata) {
      setfdata(JSON.parse(savedata));
    }
    console.log(fdata);
  }, []);
  return (
    <>
      <div className="container dogs-parent3">
        <div className="dog-head3">
          <h2>Make Appoiment</h2>
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

      <div className="container mt-5">
        <form className="row g-3  align-items-center">
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Subject <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control custom-input"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input type="email" className="form-control custom-input" id="inputEmail4" value={fdata.name} />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input type="email" className="form-control custom-input" id="inputEmail4"  value={fdata.email} />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Time <span className="text-danger">*</span>
            </label>
            <input type="email" className="form-control custom-input" placeholder="10.30AM" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Date <span className="text-danger">*</span>
            </label>
            <input type="email" className="form-control custom-input" id="inputEmail4"  placeholder="23/04/2025" />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Shelter Name
            </label>
            <input type="email" className="form-control custom-input" id="inputEmail4" placeholder="Bluecross of Chennai" />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
          Shelter PhoneNumber
            </label>
            <input type="email" className="form-control custom-input" id="inputEmail4" placeholder="+9185645925" />
          </div>
          <div class="col-12 text-center">
            <button type="submit" onClick={()=>navi("/payment")} class="custom-button">
              Book Appoinment
            </button>
          </div>
        </form>
      </div>


      <div className="container text-center mt-5">
        <div className="who-head">
          <h1>Who We Are</h1>
          <img src={dog}></img>
        </div>
        <div className="who-content-1">
          <p>
            Pet Me is a 150(d)(3) nonprofit organisation dedicated community of
            pet <br></br> lovers working to reduce euthanasaia in local shelters
            and increse awarness of<br></br> rescue doys being wonderful pets.
            We rescue pets and place them in loving <br></br>homes
          </p>
        </div>

        <div className="who-content-2" style={{ backgroundColor: "#EF523F" }}>
          <div className="">
            <h3>1000+</h3>
            <p>
              Adoption<br></br>Application
            </p>
          </div>
          <div className="mt-5 mt-md-0">
            <h3>600+</h3>
            <p>
              Pets<br></br>Adoped
            </p>
          </div>

          <div className="mt-5 mt-md-0 ">
            <h3>200+</h3>
            <p>
              Pets<br></br>On Boarded
            </p>
          </div>

          <div className="mt-5 mt-md-0 ">
            <h3>2200+</h3>
            <p>Rescued</p>
          </div>
        </div>
      </div>
    </>
  );
}
