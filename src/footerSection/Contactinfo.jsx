import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faYoutube, faPinterest, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Naveen.css"
const Contactinfo = () => {
  return (
    <div className='contactinfo'>
        <h1>Contact Info</h1>
        <ol>
          <li><FontAwesomeIcon icon={faPhone} /><span>Make a Call</span></li>
          <li><FontAwesomeIcon icon={faEnvelope} /><span>E-Mail</span></li>
        </ol>
<ul>
  <li> <FontAwesomeIcon icon={faTwitter} /></li>
  <li> <FontAwesomeIcon icon={faFacebook} /></li>
  <li> <FontAwesomeIcon icon={faYoutube} /></li>
  <li> <FontAwesomeIcon icon={faPinterest} /></li>
  <li> <FontAwesomeIcon icon={faLinkedin} /></li>
</ul>
    </div>
  )
}

export default Contactinfo