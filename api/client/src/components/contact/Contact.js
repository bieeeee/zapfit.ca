import { useRef, useState } from 'react';
import './contact.scss';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


function Contact() {
  const form = useRef();
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const emailAddress = 'adorante.michael@gmail.com';

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div id="contact" className="contact">
      <div class="cContainer">
        <div class="left">
          <h1>Get started today!</h1>
          <h3>If  you are ready to start living a healthy lifestyle, message me to get started! Everyone has a unique situation, and I'll strive to accommodate yours.</h3>
          <h6>*Spaces and time slots are limited.</h6>
          <h6>*Operations are done in Montreal and the Greater Montreal area.</h6>
          <div class="profileContainer">
            <img src='./assets/profile.png' alt="profile" />
            <div>
              <p>Michael Adorante</p>
              <p>Certified Mobile EMS Personal Trainer</p>
              <a href={`mailto:${emailAddress}`} target="_blank"><FontAwesomeIcon icon={faEnvelope} className="icon" /></a>
              <a href="https://www.instagram.com/zapfit.mobile/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
            </div>
          </div>
        </div>
        <div class="right">
          <form ref={form} onSubmit={handleSubmit} className='contactForm'>
            <div className='formContent'>
              <input type="text" name="user_name" placeholder="Name" />
            </div>
            <div className='formContent'>
              <input type="email" name="user_email" placeholder="E-mail" />
            </div>
            <div className='formContent'>
              <input type="number" name="user_number" placeholder="Phone number" />
            </div>
            <div className='formContent'>
              <textarea name="message" placeholder="Message" />
            </div>
            <input type="submit" value="Send" className='button' />
          </form>
        </div>
      </div>
      <div  className='footer'>
        <p>Copyright © 2023 Zapfit - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Contact
