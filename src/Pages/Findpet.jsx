import React from "react";
import dog from "../assets/images/paw.png";
import "../assets/Styles/FindPet.css";
import find1 from "../assets/images/find1.png";
import find2 from "../assets/images/find2.png";
import find3 from "../assets/images/find3.png";
import find4 from "../assets/images/find4.png";
import find5 from "../assets/images/find5.png";


import test1 from "../assets/images/test1.png";

import test2 from "../assets/images/test2.png";

import f1 from "../assets/images/frame1.png";

import f2 from "../assets/images/frame2.png";

import f3 from "../assets/images/frame3.png";




import "../assets/Styles/Home.css";
import { useNavigate } from "react-router-dom";

function Findpet() {

  const navigate  =  useNavigate()
  return (
    <>
      <div className="container find-pet-head">
        <div className="our-Adop-head">
          <h1>Our Adaption Categories</h1>
          <img src={dog}></img>
        </div>

        <div className="our-Adop-head-content">
          <p>
            The Categories encompass wide range of animals <br></br>looking for
            loving homes
          </p>
        </div>
      </div>
      

      <div className="container py-5">
        <div className="row text-center  g-2">
          <div className="col-md-4" role="button" onClick={()=>navigate("/all/Dog")}>
            <img src={find1} className="pet-img" alt="Dogs" />
            <div className="pet-name">Dogs</div>
          </div>

          <div className="col-md-4" role="button" onClick={()=>navigate("/all/Cat")} >
            <img src={find2} className="pet-img" alt="Cats" />
            <div className="pet-name">Cats</div>
          </div>
          <div className="col-md-4"  role="button" onClick={()=>navigate("/all/Rabbit")}>
            <img src={find3} className="pet-img" alt="Rabbits" />
            <div className="pet-name">Rabbits</div>
          </div>
          <div className="col-md-4"  role="button" onClick={()=>navigate("/all/Hamsters")}>
            <img src={find4} className="pet-img" alt="Hamsters" />
            <div className="pet-name">Hamsters</div>
          </div>
          <div className="col-md-4"  role="button" onClick={()=>navigate("/all/Birds")}>
            <img src={find5} className="pet-img" alt="Birds" />
            <div className="pet-name">Birds</div>
          </div>
        </div>
      </div>

      <div className="container who-2 text-center m-md-5 my-5">
        <div className="who-head-2">
          <h1>How Adaption Works</h1>
          <img src={dog}></img>
        </div>
        <div className="who-content-1-2 ">
          <p>
            TO Embrance joy of Pet adoption,and creaye a lasting bond<br></br>{" "}
            with your new companion you wil only need to follow the<br></br>{" "}
            below THREE STEPS
          </p>
        </div>
      </div>

      
      <div className="container">
        <div className="row  flex-wrap justify-content-md-between">
          <div className="col-lg-3 col-md-5 col-11">
            <div className="pet-card1  mt-lg-0 mt-5">
              <div className="border-wrapper1">
                <img
                  src={f1}
                  alt="Pet 1"
                  className="img-fluid"
                  style={{ width: "280px", height: "280px" }}
                />
                <div className="border-rotate-1"></div>
                <span className="badge1">1</span>
              </div>
              <h5>KNOW YOUR PET</h5>
              <p>
                Discover your perfect<br></br>companion by browsing<br></br>
                our extensive database of<br></br>adoptable animals
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-5 col-11">
            <div className="pet-card2  mt-lg-0 mt-5">
              <div className="border-wrapper2">
                <img
                  src={f2}
                  alt="Pet 2 "
                  className="img-fluid"
                  style={{ width: "330px", height: "320px" }}
                />
                <div className="border-rotate-2"></div>
                <span className="badge2">2</span>
              </div>
              <h5>KNOW YOUR PET</h5>
              <p>
                Discover your perfect<br></br>companion by browsing<br></br>
                our extensive database of<br></br>adoptable animals
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-5 col-11">
            <div className="pet-card3 mt-lg-0 mt-5">
              <div className="border-wrapper3">
                <img
                  src={f3}
                  alt="Pet 3 "
                  className="img-fluid"
                  style={{ width: "280px", height: "280px" }}
                />
                <div className="border-rotate-3"></div>
                <span className="badge3">3</span>
              </div>
              <h5>KNOW YOUR PET</h5>
              <p>
                Discover your perfect<br></br>companion by browsing<br></br>
                our extensive database of<br></br>adoptable animals
              </p>
            </div>
          </div>
        </div>
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

export default Findpet;
