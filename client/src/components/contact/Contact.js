import { useRef, useState } from 'react';
import './contact.scss';
import emailjs from '@emailjs/browser';

function Contact() {
  const [message, setMessage] = useState(false);

  const form = useRef();
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

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
          <h5>If  you are ready to start living a healthy lifestyle, message me to get started! Everyone has a unique situation, and I'll strive to accommodate yours.</h5>
          <h6>*Spaces and time slots are limited.
            *Operations are done in Montreal and the Greater Montreal area.</h6>
          <div class="container-contact-profile d-flex">
            <div>
              <p>Michael Adorante
                Certified Mobile EMS Personal Trainer</p>
              <div class="container-contact-icon">
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <form ref={form} onSubmit={handleSubmit} className='contact-form'>
            <div className='contact-form-content'>
              <p style={{whiteSpace: 'nowrap', marginRight: '10px', width: '80px'}}>Your name:</p>
              <input type="text" name="user_name" />
            </div>
            <div className='contact-form-content'>
              <p style={{whiteSpace: 'nowrap', marginRight: '10px', width: '80px'}}>Your email:</p>
              <input type="email" name="user_email" />
            </div>
            <div className='contact-form-content'>
              <p style={{whiteSpace: 'nowrap', marginRight: '10px', width: '80px'}}>Message:</p>
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
