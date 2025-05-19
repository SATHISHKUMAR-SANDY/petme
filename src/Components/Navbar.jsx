import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import user from "../assets/images/user.png";
import "../assets/Styles/Nav.css";
import {NavLink, useNavigate} from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const navi =useNavigate()
  return (
    <nav className="navbar-custom">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Logo */}
          <div className="col-6 col-md-2">
            <NavLink to="/"><img src={logo} alt="Logo" className="logo-img" /></NavLink>
          </div>

          {/* Hamburger Toggle - Mobile Only */}
          <div className="col-6 d-md-none text-end">
            <button
              className="navbar-toggler"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="col-md-7 d-none d-md-block">
            <ul className="navbar-list mt-4">
            <NavLink to="/Pets" style={{textDecoration:"none",color:"white"}}><li>FindPet</li></NavLink>  
            <NavLink to="/faq" style={{textDecoration:"none",color:"white"}}><li>Adop FAQ</li></NavLink> 
            <NavLink to="/petc2" style={{textDecoration:"none",color:"white"}}><li>CarePet</li></NavLink> 
            <NavLink to="/about" style={{textDecoration:"none",color:"white"}}><li>About Us</li></NavLink> 
            </ul>
          </div>

          {/* Desktop User */}
          <div className="col-md-2 text-center mt-3 d-none d-md-block" role="button" onClick={()=>navi("/log")}>
            <img src={user} alt="User" className="user-icon" />
            <p className="text-white">Logout</p>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="row d-md-none mt-3 text-center">
            <ul className="navbar-list mobile-list">
              <li>FindPet</li>
              <li>Adaption FAQ</li>
              <li>Caring of Pets</li>
              <li>About Us</li>
              <li className="mt-2">
                <img src={user} alt="User" className="user-icon mb-1" />
                <p className="text-white">Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
