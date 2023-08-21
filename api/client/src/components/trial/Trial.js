import './trial.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { axiosInstance } from '../../config';
import emailjs from '@emailjs/browser';


function Trial({ setOpen }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    datetime: null,
  });

  const handleTimeChange = (newTime) => {
    setFormData((prevData) => ({
      ...prevData,
      datetime: newTime.toDate(),
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const templateParams = {
    from_name: 'Booking Trial',
    user_name: `${formData.firstName + formData.lastName}`,
    user_email: `${formData.email}`,
    user_number: `${formData.phone}`,
    message: `Date: ${formData.datetime}`
  };

  const handleSubmit = async () => {
    try {
      await axiosInstance.post('/trials', formData);
      setIsSubmitted(true);
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(function (response) {
          console.log('SUCCESS!', response.status);
        }, function (error) {
          console.log('FAILED...', error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='trial'>
      <div className="tContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="tClose" onClick={() => setOpen(false)} />
        {isSubmitted ?
          <div className='submitted'>
            <h3>Thank you, {formData.firstName}!<br /><br />
              Your trial is successfully booked on {formData.datetime.toDateString()} at {formData.datetime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}.<br /><br />
              We'll contact you once it's confirmed.</h3>
          </div>
          : <>
            <div className="left">
              <h1>Your Fitness Journey Starts Here</h1>
              <h4>In just 30 minutes, our tailored trial session led by a certified trainer brings you closer to your fitness goals.</h4>
              <p>*Opt for added convenience with on-location sessions for a nominal fee.</p>
            </div>
            <div className="right">
              <div className="trialInfo">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={['DateTimePicker']}
                    className="demoContainer trialInput"
                    sx={{ width: "100%", paddingTop: "none", marginBottom: "10px" }}
                    views={['year', 'month', 'day', 'hours', 'minutes']}
                  >
                    <DateTimePicker
                      className='dateTimePicker'
                      value={dayjs(formData.datetime)}
                      name="datetime"
                      onChange={handleTimeChange}
                      disablePast
                      closeOnSelect
                      minutesStep={15}
                      ampm={false}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className="trialInfo">
                <input
                  type="text"
                  placeholder="First name"
                  className="trialInput"
                  style={{ marginRight: "10px" }}
                  name="firstName"
                  onChange={handleInputChange}
                  value={formData.firstName}
                  required
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="trialInput"
                  name="lastName"
                  onChange={handleInputChange}
                  value={formData.lastName}
                />
              </div>
              <div className="trialInfo">
                <input
                  type="text"
                  placeholder="Email"
                  className="trialInput"
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </div>
              <div className="trialInfo">
                <input
                  type="number"
                  placeholder="Phone number"
                  className="trialInput"
                  name="phone"
                  onChange={handleInputChange}
                  value={formData.phone}
                />
              </div>
              <button className='trialInput trialBtn' onClick={handleSubmit}>Submit</button>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Trial
