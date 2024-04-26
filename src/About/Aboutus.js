import React from 'react'
import "./Aboutus.css"
import backgroundImage from '../girl.jpeg';
import backgroundVideoImage from '../video.jpeg';
import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import PlayButton from "../Playbutton/PlayButton";

const Aboutus = () => {
  return (
    <div className='Aboutus d-flex flex-row'>
        <div style={{ backgroundImage: `url(${backgroundVideoImage})`, backgroundSize: 'cover'}} className='VideoSection col-6'>
        <PlayButton/>
        </div>
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}} className='ImageSection col-6'>
            <h2 style={{color:"white"}}>Enhance The Depth Of Meaning</h2>
            <h2 style={{color:"white"}}>In Your Life And Family </h2>
            <p style={{color:"white"}}>It is a long established fact that a reader will be distracted the readable
content of a page when looking at layout the point of using lorem Ipsum
less normal distribution of letters.</p>
<div className='d-flex flex-row'>
<div className='col-4 mr-3 head'>
    <h1 style={{color:"white"}}>50%</h1>
    <h5 style={{color:"white"}}>Kids need help</h5>
</div>
<div className='col-4 mr-3 head'>
    <h1 style={{color:"white"}}>$500k</h1>
    <h5 style={{color:"white"}}>Our Goal</h5>
</div>
<div className='col-4 mr-3 head'>
    <h1 style={{color:"white"}}>$125K</h1>
    <h5 style={{color:"white"}}>Raised Now</h5>
</div>
</div>
        </div>
    </div>
  )
}

export default Aboutus
