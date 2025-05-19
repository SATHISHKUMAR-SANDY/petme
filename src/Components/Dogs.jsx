import React from "react";
import dog from "../assets/images/paw.png";
import male from "../assets/images/male.png";
import female from "../assets/images/female.png";
import axios from "axios";

import "../assets/Styles/Dogs.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Dogs() {
 const[petdata,setPetdata]  = useState([]);
 const[err,seterr] = useState("")
 const{id}  = useParams()
 useEffect(() => {
  axios.get("/data/data.json")
    .then((res) => {
      // res.data.dog is an array, take the first element
      setPetdata(res.data[id][0].images)
      console.log();
    })
    .catch((err) => {
      seterr(err.message);
    });
}, []);


const navi  = useNavigate()

return (
  <div>
    <div className="container dogs-parent">
      <div className="dog-head">
        <h2>{id}</h2>
        <img src={dog}></img>
      </div>
      <p>
        These categories encompass a wide range of animals<br></br>looking for
        loving homes!
      </p>
    </div>

    <div className="container dogs-layout">
      <div className="row">
      <div className="col-lg-4 col-md-6 mt-md-5 text-center" role="button" onClick={()=>navi(`/${id}`)} >
          <img src={petdata[0]} style={{ width: "250px" }}></img>
          <div className="dogcart">
            <h3>
              Pepper<img className="ms-4" src={male}></img>
            </h3>
            <p>juvenile-7 t0 12 months</p>{" "}
            <hr style={{ width: "235px",marginLeft: "65px" }}></hr>
            <p>
              World of All Animal Care<br></br>&Adoption
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-md-5 text-center" role="button" onClick={()=>navi(`/${id}`)} >
          <img  src={petdata[1]}  style={{ width: "250px" }}></img>
          <div className="dogcart">
            <h3>
              Drake<img className="ms-4" src={female}></img>
            </h3>
            <p>Young Adult -13 months</p>{" "}
            <hr style={{ width: "235px",marginLeft: "65px" }}></hr>
            <p>
              World of All Animal Care<br></br>&Adoption
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mt-md-5 text-center" role="button" onClick={()=>navi(`/${id}`)} >
          <img  src={petdata[2]}  style={{ width: "250px" }}></img>
          <div className="dogcart">
            <h3>
              Chiko<img className="ms-4" src={male}></img>
            </h3>
            <p>puppy-0 to 3 months </p>{" "}
            <hr style={{ width: "235px",marginLeft: "65px" }}></hr>
            <p>
              World of All Animal Care<br></br>&Adoption
            </p>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 mt-md-5 text-center" role="button" onClick={()=>navi(`/${id}`)} >
          <img  src={petdata[3]} style={{ width: "250px" }}></img>
          <div className="dogcart">
            <h3>
              Pepper<img className="ms-4" src={female}></img>
            </h3>
            <p>juvenile-7 t0 12 months</p>{" "}
            <hr style={{ width: "235px",marginLeft: "65px" }}></hr>
            <p>
              World of All Animal Care<br></br>&Adoption
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-md-5 text-center" role="button" onClick={()=>navi(`/${id}`)} >
          <img  src={petdata[4]}  style={{ width: "250px" }}></img>
          <div className="dogcart">
            <h3>
              Drake<img className="ms-4" src={male}></img>
            </h3>
            <p>Young Adult -13 months</p>{" "}
            <hr style={{ width: "235px",marginLeft: "65px" }}></hr>
            <p>
              World of All Animal Care<br></br>&Adoption
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mt-md-5 text-center" role="button" onClick={()=>navi(`/${id}`)} >
          <img src={petdata[5]} style={{ width: "250px" }}></img>
          <div className="dogcart">
            <h3>
              Chiko<img className="ms-4" src={female}></img>
            </h3>
            <p>puppy-0 to 3 months </p>{" "}
            <hr style={{ width: "235px",marginLeft: "65px" }}></hr>
            <p>
              World of All Animal Care<br></br>&Adoption
            </p>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 mt-md-5 text-center" role="button" onClick={()=>navi(`/${id}`)} >
          <img  src={petdata[6]}  style={{ width: "250px" }}></img>
          <div className="dogcart">
            <h3>
              Pepper<img className="ms-4" src={male}></img>
            </h3>
            <p>juvenile-7 t0 12 months</p>{" "}
            <hr style={{ width: "235px",marginLeft: "65px" }}></hr>
            <p>
              World of All Animal Care<br></br>&Adoption
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-md-5 text-center" role="button" onClick={()=>navi(`/${id}`)} >
          <img  src={petdata[7]}  style={{ width: "250px" }}></img>
          <div className="dogcart">
            <h3>
              Drake<img className="ms-4" src={male}></img>
            </h3>
            <p>Young Adult -13 months</p>{" "}
            <hr style={{ width: "235px",marginLeft: "65px" }}></hr>
            <p>
              World of All Animal Care<br></br>&Adoption
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mt-md-5 text-center" role="button" onClick={()=>navi(`/${id}`)} >
          <img  src={petdata[8]}  style={{ width: "250px" }}></img>
          <div className="dogcart">
            <h3>
              Chiko<img className="ms-4" src={female}></img>
            </h3>
            <p>puppy-0 to 3 months </p>{" "}
            <hr style={{ width: "235px",marginLeft: "65px" }}></hr>
            <p>
              World of All Animal Care<br></br>&Adoption
            </p>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 mt-md-5 text-center" role="button" onClick={()=>navi(`/${id}`)} >
          <img  src={petdata[9]}  style={{ width: "250px" }}></img>
          <div className="dogcart">
            <h3>
              Pepper<img className="ms-4" src={male}></img>
            </h3>
            <p>juvenile-7 t0 12 months</p>{" "}
            <hr style={{ width: "235px",marginLeft: "65px" }}></hr>
            <p>
              World of All Animal Care<br></br>&Adoption
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-md-5 text-center" role="button" onClick={()=>navi(`/${id}`)} >
          <img  src={petdata[10]}  style={{ width: "250px" }}></img>
          <div className="dogcart">
            <h3>
              Drake<img className="ms-4" src={male}></img>
            </h3>
            <p>Young Adult -13 months</p>{" "}
            <hr style={{ width: "235px",marginLeft: "65px" }}></hr>
            <p>
              World of All Animal Care<br></br>&Adoption
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mt-md-5 text-center" role="button" onClick={()=>navi(`/${id}`)} >
          <img src={petdata[11]}  style={{ width: "250px" }}></img>
          <div className="dogcart">
            <h3>
              Chiko<img className="ms-4" src={female}></img>
            </h3>
            <p>puppy-0 to 3 months </p>{" "}
            <hr style={{ width: "235px",marginLeft: "65px" }}></hr>
            <p>
              World of All Animal Care<br></br>&Adoption
            </p>
          </div>
        </div>


      </div>
    </div>
  </div>
);
}

export default Dogs;
