import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "jquery/dist/jquery.slim.min";
import "popper.js/dist/umd/popper.min";
import "./App.css";
import Header from "./Header/Header";
import NavBar from "./landingPage/NavBar";
import Slides from "./landingPage/Slides";
import ThreeDViewComponent from "./ThreeDcards/ThreeDViewComponent";
import Swiper from "swiper/bundle"; // Import Swiper bundle
import "swiper/swiper-bundle.css";
import Aboutus from "./About/Aboutus";
import { BrowserRouter } from "react-router-dom";
import Testimonials1 from "./Testimonials/Testimonials1";
import Footerpage from "./footerSection/Footerpage";
import NewsAndBlogs from "./News&&Blogs/NewsAndBlogs";
import Home from "./Home/home"
function App() {
  return (
    <div className="App">
      <div className="first">
        {/*<BrowserRouter>
<Header/>
  </BrowserRouter>*/}
        <NavBar />
      </div>
      <div className="second">
        <Home />
      </div>
      <div className="ThreeDmain">
        <ThreeDViewComponent />
      </div>
      <div className="AboutMain">
        <Aboutus />
      </div>
      <div>
        <Testimonials1 />
      </div>
      <div>
        <NewsAndBlogs />
      </div>
      <div>
        <Footerpage />
      </div>
    </div>
  );
}

export default App;
