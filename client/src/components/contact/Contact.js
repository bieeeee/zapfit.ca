import { useRef, useState } from 'react';
import './contact.scss';
import emailjs from '@emailjs/browser';
import profile from '../../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  const [message, setMessage] = useState(false);

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
    setMessage(true);
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
            <img src={profile} alt="profile" />
            <div>
              <p>Michael Adorante</p>
              <p>Certified Mobile EMS Personal Trainer</p>
              <a href={`mailto:${emailAddress}`} target="_blank"><FontAwesomeIcon icon={faEnvelope} className="icon" /></a>
              <a href="https://www.instagram.com/zapfit.mobile/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
            </div>
          </div>
        </div>
        <div class="right">
          <form ref={form} onSubmit={handleSubmit} className='contact-form'>
            <div className='contact-form-content'>
              <p style={{ whiteSpace: 'nowrap', marginRight: '10px', width: '80px' }}>Your name:</p>
              <input type="text" name="user_name" />
            </div>
            <div className='contact-form-content'>
              <p style={{ whiteSpace: 'nowrap', marginRight: '10px', width: '80px' }}>Your email:</p>
              <input type="email" name="user_email" />
            </div>
            <div className='contact-form-content'>
              <p style={{ whiteSpace: 'nowrap', marginRight: '10px', width: '80px' }}>Message:</p>
              <textarea name="message" />
            </div>
            <input type="submit" value="Send" className='btn-send' />
          </form>
        </div>
        {/* {message && <span>Thanks, I'll reply ASAP :)</span>} */}
      </div>
    </div>
  )
}

export default Contact
