import React from 'react'
import "../assets/Styles/Home.css";
import dog from "../assets/images/paw.png";
import mainlogo from "../assets/images/logo.png"
import soci from "../assets/images/soci.png"
export default function Footer() {
  return (
<>

<footer className="container-fluid ">

<div className="row justify-content-md-evenly flex-wrap">
  <div className="col-md-3 col-11 text-center firstcolumn">
<img src={mainlogo} className="img-fluid"></img>
<p>Find and Adop Youe<br></br>New Best Friend</p>
  </div>
  <div className="col-md-3  col-11 text-center mt-md-0 mt-3  secondcolumn ">
<h1>DISCOVER</h1>
<ul>
  <li>Finda pet</li>
  <li>How adoption works</li>
  <li>About Us</li>
</ul>
<img src={soci} ></img>
  </div>
  <div className="col-md-3   col-11 text-center mt-md-0 mt-3 thirdcolumn">
<h1>INFO</h1>
<ul>
  <li>FAQ</li>
  <li>Privacy Policy</li>
  <li>Terms of Service</li>
</ul>
  </div>
</div>
<p className="copyweeite">PetMe&copy;2020.All Rights  Reserved</p>
</footer>

</>
  )
}
