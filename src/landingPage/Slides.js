import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "jquery/dist/jquery.slim.min";
import "popper.js/dist/umd/popper.min";
const Slides = () => {
  return (
    <div className='Slides'>
      <div
    id="carouselExampleControls"
    className="carousel slide"
    data-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active" id="eachSlide">
        <img src="" className="d-block w-50 h-50" alt="..." />
      </div>
      <div className="carousel-item eachSlide">
        <img src="..." className="d-block w-50 h-50" alt="..." />
      </div>
      <div className="carousel-item eachSlide">
        <img src="..." className="d-block w-50 h-50" alt="..." />
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
    </div>
  )
}

export default Slides
