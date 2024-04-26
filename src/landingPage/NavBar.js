import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "jquery/dist/jquery.slim.min";
import "popper.js/dist/umd/popper.min";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div classname="NavBar shadow-lg">
        <nav className="navbar navbar-expand-lg navbar-light NavContainer">
            <div className="logo ml-3 mr-3"></div>
          <a className="navbar-brand" href="#">
            <span className="text">Dignity of Noble</span>
          </a>
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
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item mr-3">
                <a className="nav-link" href="#">
                  <span className="text">Home</span>
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="#">
                  <span className="text">About Us</span>
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="#">
                  <span className="text">Volunteer</span>
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="#">
                  <span className="text">News/Blog</span>
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="#">
                  <span className="text">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  );
};

export default NavBar;
