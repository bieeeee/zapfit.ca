import './trial.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import axios from 'axios';
import { axiosInstance } from '../../config';


function Trial({ setOpen }) {
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    datetime: null,
  });

  const handleTimeChange = (newTime) => {
    setFormData((prevData) => ({
      ...prevData,
      datetime: newTime.format('DD-MM-YYYY HH:mm'),
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post('/trials', formData);
      setIsSubmitted(true);
      setSubmitMessage("We'll send you the email once it's confirmed.");
    } catch (error) {
      setSubmitMessage(`*All fields must be filled.`);
      console.error(error);
    }
  };

  console.log(formData)

  return (
    <div className='trial'>
      <div className="tContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="tClose" onClick={() => setOpen(false)} />
        {isSubmitted ?
          <div className='submitted'>
            <h3>Thank you, {formData.firstName}!<br /><br />
              Your trial is successfully booked on {formData.datetime.toString()}.<br /><br />
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
