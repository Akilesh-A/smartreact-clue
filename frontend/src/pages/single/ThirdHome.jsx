import React from 'react';
import '../../pages/single/ThirdHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function ThirdHome() {
  return (
    <div className='container-fluid contactBg'>
      <div className='container'>
        <h4>Get in Touch</h4>
        <div className='row'>
          <div className='col-md-4 col-12'>
            <div className='chat'>
              <p className='contact-text'><FontAwesomeIcon icon={faCommentDots} /> Chat with us</p>
              <p className='contact-text'><a className='contact-link' href="tel:=91 7010707238"><FontAwesomeIcon icon={faPhone} /> 7010707238</a></p>
            </div>
          </div>
          <div className='col-md-4 col-12'>
            <div className='mail'>
              <p className='contact-text'><FontAwesomeIcon icon={faEnvelope} /> Contact us</p>
              <p className='contact-text'><a className='contact-link' href="mailto:akileshanand21@gmail.com">akileshanand21@gmail.com</a></p>
            </div>
          </div>
          <div className='col-md-4 col-12'>
            <div className='social-icons'>
              <p className='contact-text'><a className='contact-link' href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></p>
              <p className='contact-text'><a className='contact-link' href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdHome;
