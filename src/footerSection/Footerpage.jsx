import React from 'react'
import Description from './Description'
import Quicklinks from './Quicklinks'
import Latestnews from './Latestnews'
import Contactinfo from './Contactinfo'
import "./Naveen.css"
const Footerpage = () => {
  return (
    <div className='footer-container'>
        <div className="section"><Description/></div>
    <div className="section"><Quicklinks/></div>
    <div className="section"><Latestnews/></div>
    <div className="section"><Contactinfo/></div>
    </div>
  )
}

export default Footerpage