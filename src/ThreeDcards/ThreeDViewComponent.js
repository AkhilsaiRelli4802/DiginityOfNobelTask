import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useEffect } from "react";
import Swiper from "swiper/bundle"; // Import Swiper bundle
import "swiper/swiper-bundle.css"; // Import Swiper styles
import "./ThreeD.css"; // Import custom CSS styles

import backgroundVisionImage_1 from "../mission.jpeg";
import backgroundVisionImage_2 from "../vision.jpeg";
import backgroundVisionImage_3 from "../strategy.jpeg";
const ThreeDViewComponent = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      loop: true, // Enable looping
      effect: "coverflow", // Set the coverflow effect
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50, // Set the rotation angle
        stretch: 0, // Set the depth of the elements
        depth: 100, // Set the distance between elements
        modifier: 1, // Set the intensity of the effect
        slideShadows: true, // Enable slide shadows
      },
      autoplay: {
        delay: 5000, // Autoplay delay in milliseconds (5 seconds)
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {/* Add your 3D slides here */}
        <div className="swiper-slide d-flex flex-column">
        <div className="First_compo" style={{ backgroundImage: `url(${backgroundVisionImage_1})`, backgroundSize: 'cover'}}>
          </div>
          <div className="Second_compo">
            <span style={{color:'white'}}>Mission</span>
          </div>
        </div>
        <div className="swiper-slide d-flex flex-column">
          <div className="First_compo" style={{ backgroundImage: `url(${backgroundVisionImage_2})`, backgroundSize: 'cover'}}>
          </div>
          <div className="Second_compo"><span style={{color:'white'}} >Vision</span></div>
        </div>
        <div className="swiper-slide d-flex flex-column">
          <div className="First_compo" style={{ backgroundImage: `url(${backgroundVisionImage_3})`, backgroundSize: 'cover'}}>
          </div>
          <div className="Second_compo"><span style={{color:'white'}} >Strategy</span></div>
        </div>
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default ThreeDViewComponent;
