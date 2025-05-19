import React from "react";
import "../assets/Styles/About.css";
import dog from "../assets/images/paw.png";
// import "../assets/Styles/Home.css";

import test1 from "../assets/images/test1.png";

import test2 from "../assets/images/test2.png";
export default function AboutUs() {
  return (
    <>
      <div className="container mt-5">
        <div className="check-content-1">
          <h1 className="ms-5">About Us</h1>
          <img src={dog} className="img-fluid"></img>
        </div>
      </div>

      <div className="container">
        <p className="fs-3 fw-lighter">
          Welcome to Adopt a Pet, a web platform established by Mars Petcare to
          connect pet lovers with registered animal shelters in their region.
        </p>

        <p className="fs-3 fw-lighter">
          We passionately believe that every dog and cat deserves a loving home,
          and we strive to help rehome homeless pets across India.
        </p>
        <p className="fs-3 fw-lighter">Our Obhective Are Simple And Challening</p>
        <ul>
          <li className="fs-3 fw-lighter">
            Encourage adoption to give pets a second chance while enabling
            shelters to care for other homeless animals.
          </li>
          <li className="fs-3 fw-lighter">
            Help pet owners fulfill their lifelong commitment to their pets.
          </li>
          <li className="fs-3 fw-lighter">
            Promote responsible pet ownership to ensure pets and owners are
            welcomed in their communities.
          </li>
        </ul>
        <p className="fs-3 fw-lighter">
          If you're considering adoption, start your search by exploring our
          list of dogs and cats available near you.
        </p>
      </div>


      <div className="container">
        <div className="Testimonies">
          <h2>Our Customes Testimonies</h2>
          <img src={dog}></img>
        </div>
        <div className="container-fluid ">
          <div className="image-wrap">
            <img
              src={test1}
              className="img-fluid"
              style={{ width: "350px", height: "350px" }}
            ></img>
            <div className="border-rotate"></div>
            <p className="img-content">
              <strong>Kiro&Tio</strong>
              <br></br> Adopted Febury 2025
            </p>

            <div className="testini-1">
              <h3 className="fw-bold">"It was best thing ever hapened!"</h3>
              <p>I was very much confuced whether Tio will like me</p>
              <p>I was wrong,we become on the very first day... </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="image-wrap2">
          <img
            src={test2}
            className="img-fluid"
            style={{ width: "350px", height: "350px" }}
          ></img>
          <div className="border-rotate2"></div>
          <p className="img-content2">
            <strong>Kiro&Tio</strong>
            <br></br> Adopted Febury 2025
          </p>

          <div className="testini-2">
            <h3 className="fw-bold">"It was best thing ever hapened!"</h3>
            <p>I was very much confuced whether Tio will like me</p>
            <p>I was wrong,we become on the very first day... </p>
          </div>
        </div>
      </div> 
    </>
  );
}
