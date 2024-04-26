import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import CompanyImage from "./fav.jpeg"
// import Button from "../Header/Button/Button";
const NavBar = () => {
  return (
    <div classname="NavBar shadow-lg navbarposition" >
        <nav className="navbar navbar-expand-lg navbar-light NavContainer">
            <div className="NavHead">
            <div className="continer">
                    <img className="Headerlogo" alt="Header logo"/>
                </div>

                <h1 className="navbar-brand"><span className="text">Diginity Of Nobel</span></h1>
              
            </div>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown" style={{marginRight:"30px",padding:"20px"}}>
            <ul className="navbar-nav">
              <li className="nav-item mr-3">
                <NavLink to="/Home" className="navLink"><h1 className="nav-link" ><span className="text">Home</span></h1></NavLink>
              </li>
              <li className="nav-item mr-3">
                <NavLink to = "/About" className="navLink"><h1 className="nav-link" ><span className="text">About Us</span></h1></NavLink>
              </li>
              <li className="nav-item mr-3">
                <NavLink to="/Volunteer" className="navLink"><h1 className="nav-link" ><span className="text">Volunteer</span></h1></NavLink>
              </li>
              <li className="nav-item mr-3">
                <NavLink to = "/News&Blogs" className="navLink"><h1 className="nav-link" ><span className="text">News/Blogs</span></h1></NavLink>
              </li>
              <li className="nav-item mr-3">
                <NavLink to="/Contact" className="navLink"><h1 className="nav-link" ><span className="text">ContactUs</span></h1></NavLink>
              </li>
            </ul>
            {/* <Button/> */}
            </div>
        </nav>
      </div>
  );
};

export default NavBar;