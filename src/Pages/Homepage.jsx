import React from "react";
import mainlogo from "../assets/images/logo.png";

import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import c4 from "../assets/images/c4.png";
import c5 from "../assets/images/c5.png";
import c6 from "../assets/images/c6.png";
import dog from "../assets/images/paw.png";
import dogsi from "../assets/images/dogs icon.png";
import hamsi from "../assets/images/hamster icon.png";
import catsi from "../assets/images/cats icon.png";
import rabi from "../assets/images/rabbits icon.png";
import birdi from "../assets/images/birds icon.png";
import home1 from "../assets/images/Home1.png";
import home2 from "../assets/images/Home2.png";
import home3 from "../assets/images/Home3.png";
import male from "../assets/images/male.png";
import female from "../assets/images/female.png";
import poster from "../assets/images/poster.png";

import test1 from "../assets/images/test1.png";

import test2 from "../assets/images/test2.png";

import blog1 from "../assets/images/blog 1.png";
import blog2 from "../assets/images/blog 2.png";
import blog3 from "../assets/images/blog 3.png";

import f1 from "../assets/images/frame1.png";

import f2 from "../assets/images/frame2.png";

import f3 from "../assets/images/frame3.png";

import foot1 from "../assets/images/footer1.png";
import foot2 from "../assets/images/footer2.png";
import foot3 from "../assets/images/footer3.png";
import air from "../assets/images/arrow.png";
import "../assets/Styles/Home.css";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const logos = [c1, c2, c3, c4, c5, c6];
  const repeatedLogos = [...logos, ...logos];
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid home-main-contain ">
        <div className="row home-main-banner">
          <div className="col-md-5 col-7 banner-content">
            <h1>
              Find Your New
              <br />
              Best Friend
            </h1>
            <p>
              Discover your perfect companion with<br></br> ease, browse, adopt,
              and bring home <br></br>the pets that fit your lifestyle.
            </p>
            <button
              className="headder-banner-button"
              onClick={() => navigate("/pets")}
            >
              Discover more
            </button>
          </div>
        </div>
      </div>






      <div className="logo-carousel-wrapper borderall">
        <div className="logo-carousel-track">
          {repeatedLogos.map((logo, index) => (
            <div className="logo-carousel-item" key={index}>
              <img src={logo} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </div>



      
      <div className="container text-center  borderall ">
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





      <div className="container text-center mt-5  borderall ">
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

        <div className="Adop-categories">
          <div role="button" onClick={() => navigate("/all/Dog")}>
            <img src={dogsi}></img>
            <p>Dog</p>
          </div>

          <div role="button" onClick={() => navigate("/all/Cat")}>
            <img src={catsi}></img>
            <p>Cats</p>
          </div>

          <div role="button" onClick={() => navigate("/all/Rabbit")}>
            <img src={rabi}></img>
            <p>Rabbit</p>
          </div>

          <div role="button" onClick={() => navigate("/all/Hamster")}>
            <img src={hamsi} />
            <p>Hamster</p>
          </div>

          <div role="button" onClick={() => navigate("/all/Birds")}>
            <img src={birdi}></img>
            <p>Birds</p>
          </div>
        </div>
      </div>




      <div className="container  borderall">
        <div className="our-featur-head">
          <h1>Our Feautred Pets</h1>
          <img src={dog}></img>
        </div>

        <div className="featured-main-cantainer">
          <div
            className=" featured-sub1-cantainer"
            role="button"
            onClick={() => navigate("/Hamsters")}
          >
            <div>
              <img src={home1} className="img-fluid" />
              <div className="sub1-content">
                <p className="sub1-static">Hamster</p>
                <div className="sub-1-hide">
                  <p>0-5 months old</p>
                  <img src={female}></img>
                </div>
              </div>
            </div>
            <h1>Twisky</h1>
          </div>

          <div
            className=" featured-sub1-cantainer"
            role="button"
            onClick={() => navigate("/Cat")}
          >
            <div>
              <img src={home2} className="img-fluid" />
              <div className="sub1-content">
                <p className="sub1-static">Cat</p>
                <div className="sub-1-hide">
                  <p>0-3 moths old</p>
                  <img src={male}></img>
                </div>
              </div>
            </div>
            <h1>Lara</h1>
          </div>

          <div
            className=" featured-sub1-cantainer"
            role="button"
            onClick={() => navigate("/Rabbit")}
          >
            <div>
              <img src={home3} className="img-fluid" />
              <div className="sub1-content">
                <p className="sub1-static">Rabbit</p>
                <div className="sub-1-hide">
                  <p>0-4 moths old</p>
                  <img src={male}></img>
                </div>
              </div>
            </div>
            <h1>cacti</h1>
          </div>
        </div>

        <button className="findpets-button" onClick={() => navigate("/Pets")}>
          Find More Pets
        </button>
      </div>




       <div className="container-fluid home-main-contain-2 borderall">
        <div className="row home-main-banner-2">
          <div className="col-md-5 col-7 banner-content-2">
            <h1>
              Find Your New
              <br />
              Best Friend
            </h1>
            <p>
              Discover your perfect companion with<br></br> ease, browse, adopt,
              and bring home <br></br>the pets that fit your lifestyle.
            </p>
            <button
              className="headder-banner-button-2"
              onClick={() => navigate("/Pets")}
            >
              Discover more
            </button>
          </div>
        </div>
      </div> 




      <div className="container who-2 text-center m-md-5 my-5 borderall">
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
        </div>{" "}
      </div>




      <div className="container borderall">
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
                <div className=" border-rotate-1"></div>
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
                <div className=" border-rotate-2"></div>
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
                <div className=" border-rotate-3"></div>
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




      <div className="container borderall">
        <div className="check-content-1">
          <h1>Check Our Expert Advice</h1>
          <img src={dog} className="img-fluid"></img>
        </div>
        <h1 className="text-center fw-bold">
          Get Guidence on all things pet addoption
        </h1>

        <div className="container-fluid">
          <div className="row   flex-wrap  justify-content-md-between ms-md-4">
            <div
              className="col-md-5 col-lg-4 col-12"
              role="button"
              onClick={() => navigate("/petc2")}
            >
              <img
                src={blog1}
                style={{ width: "290px", height: "300px" }}
              ></img>
              <h5 className="fw-bold">
                The ultimate check-list for<br></br>First-time pet parents
              </h5>
              <p className="fw-bolder">
                Getting a new pet?Here's<br></br>everything you need to know
                befor<br></br>you bring them home
              </p>
            </div>
            <div
              className="col-md-5 col-lg-4 col-12"
              role="button"
              onClick={() => navigate("/petc2")}
            >
              <img
                src={blog2}
                style={{ width: "290px", height: "300px" }}
              ></img>
              <h5 className="fw-bold">
                The ultimate check-list for<br></br>First-time pet parents
              </h5>
              <p className="fw-bolder">
                Getting a new pet?Here's<br></br>everything you need to know
                befor<br></br>you bring them home
              </p>
            </div>
            <div
              className="col-md-5 col-lg-4 col-12"
              role="button"
              onClick={() => navigate("/petc2")}
            >
              <img
                src={blog3}
                style={{ width: "290px", height: "300px" }}
              ></img>
              <h5 className="fw-bold">
                The ultimate check-list for<br></br>First-time pet parents
              </h5>
              <p className="fw-bolder">
                Getting a new pet?Here's<br></br>everything you need to know
                befor<br></br>you bring them home
              </p>
            </div>
          </div>
        </div>
      </div>  






      <div className="container borderall">
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



       <div className="container-fluid mt-5 borderall">
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



       <div className="container parent-upfooter borderall">
        <div className="blog" role="button" onClick={() => navigate("/petc2")}>
          <img src={foot1}></img>
          <h2>Blog For You</h2>
          <img src={air} className="air"></img>
        </div>
        <div
          className="service"
          role="button"
          onClick={() => navigate("/pets")}
        >
          <img src={foot2}></img>
          <h2>Book Our Service</h2>
          <img src={air} className="air2"></img>
        </div>
        <div className="speak">
          <img src={foot3}></img>
          <h2>Speak To Expert</h2>
          <img src={air} className="air3"></img>
        </div>
      </div>  
    </>
  );
}

export default Homepage;
