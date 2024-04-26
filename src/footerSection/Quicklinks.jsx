import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Aboutus from './about/Aboutus'
import Services from './about/Services'
import FAQ from './about/FAQ'
import Blogstandard from './about/Blogstandard'
import Contactus from './about/Contactus'
import TermsandConditions from './about/TermsandConditions'
import PrivacyandPolicy from './about/PrivacyandPolicy'
import "./Naveen.css"
const Quicklinks = () => {

 

  return (
    <div className='quicklinks-container'>
      <Router>
                <h1>Quick Links</h1>
              
        <ol >
          <li><Link to="/about" className='link'><FontAwesomeIcon icon={faAngleDoubleRight}/><span>About Us</span></Link></li>
          <li><Link to="/services" className='link'><FontAwesomeIcon icon={faAngleDoubleRight} /><span>Services</span></Link></li>
          <li><Link to="/faq" className='link'><FontAwesomeIcon icon={faAngleDoubleRight} /><span>FAQ</span></Link></li>
          <li><Link to="/blog" className='link'><FontAwesomeIcon icon={faAngleDoubleRight} /><span>Blog Standard</span></Link></li>
          <li><Link to="/contact" className='link'><FontAwesomeIcon icon={faAngleDoubleRight} /><span>Contact Us</span></Link></li>
          <li><Link to="/termsconditions" className='link'><FontAwesomeIcon icon={faAngleDoubleRight} /><span>Terms & Conditions</span></Link></li>
          <li><Link to="/privacypolicy"  className='link'><FontAwesomeIcon icon={faAngleDoubleRight} /><span>Privacy & Policy</span></Link></li>

        </ol>
        
        
         <Routes>
          <Route path="/about" component={Aboutus} />
          <Route path="/services" component={Services} />
          <Route path="/faq" component={FAQ} />
          <Route path="/blog" component={Blogstandard} />
          <Route path="/contact" component={Contactus} />
          <Route path="/termsconditions" component={TermsandConditions} />
          <Route path="/privacypolicy" component={PrivacyandPolicy} />
          </Routes>
        </Router>

    </div>
  )
}

export default Quicklinks