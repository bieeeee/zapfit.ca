import { useState } from 'react';
import './contact.scss';

function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks, I'll reply ASAP :)</span>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
