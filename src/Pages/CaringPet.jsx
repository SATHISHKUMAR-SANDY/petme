import React from "react";
import "../assets/Styles/Home.css";
import "../assets/Styles/CaringPet.css";
import blog1 from "../assets/images/blog 1.png";
import blog2 from "../assets/images/blog 2.png";
import blog3 from "../assets/images/blog 3.png";
import dog from "../assets/images/paw.png";
import f5 from "../assets/images/fam1.jpg";
import f6 from "../assets/images/fam2.jpg";
import { useNavigate } from "react-router-dom";

export default function CaringPet() {
  const navigate = useNavigate() 
  return (
    <>
      <div className="container">
        <div className="check-content-1">
          <h1>Check Our Expert Advice</h1>
          <img src={dog} className="img-fluid"></img>
        </div>
        <h1 className="text-center fw-bold">
          Get Guidence on all things pet addoption
        </h1>

        <div className="container-fluid">
          <div className="row   flex-wrap  justify-content-md-between ms-md-4">
            <div className="col-md-5 col-lg-4 col-12"  role="button" onClick={()=>navigate("/petc2")}>
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
            <div className="col-md-5 col-lg-4 col-12"  role="button" onClick={()=>navigate("/petc2")}>
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
            <div className="col-md-5 col-lg-4 col-12"  role="button" onClick={()=>navigate("/petc2")}>
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

      <div className="container dogs-parent2c">
        <div className=" dog-head2c">
          <h2>Videos On Petcare</h2>
          <img src={dog} alt="Dog Paw" />
        </div>
      </div>

      <div className="container my-5">
        <div className="row justify-content-md-center ">
          <div className="col-md-5  col-12">
            <img
              src={f5}
              className="img-fluid"
              style={{ width: "300px", height: "300px",borderRadius:"20px"  }}
            ></img>
            <p>
              {" "}
              <strong className="fs-4">
                Pets and Mental Wellness-<br></br>How cool it is to have...
              </strong>{" "}
            </p>
            <p className="fs-5">
              {" "}
              Getting a new Pet? Here's<br></br> Everything you need to know
              before<br></br>you bring them home
            </p>
          </div>
          <div className="col-md-5 col-12">
            <img
              src={f6}
              className="img-fluid"
              style={{ width: "300px", height: "300px",borderRadius:"20px" }}
            ></img>
            <p>
              {" "}
              <strong className="fs-4">
                Tips to Keping Your dog<br></br>active & Healthy
              </strong>{" "}
            </p>
            <p className="fs-5">
              Not sure if you're ready?Here are<br></br>the Key things to
              consider before<br></br>adopting
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
