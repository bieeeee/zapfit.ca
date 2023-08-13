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


function Trial({ setOpen }) {
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    datetime: new Date(),
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/trials', formData);
      setIsSubmitted(true);
      setSubmitMessage("Trial's been successfully booked. We'll send you the email once it's confirmed.");
    } catch (error) {
      setSubmitMessage(`*All fields must be filled.`);
      console.error(error);
    }
  };

  return (
    <div className='trial'>
      <div className="tContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="tClose" onClick={() => setOpen(false)} />
        {isSubmitted ? <p>{submitMessage}</p>
          : <>
            <div className="left">

            </div>
            <div className="right">
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
              <div className="trialInfo">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateTimePicker']} className="demoContainer trialInput">
                    <DateTimePicker
                      className='dateTimePicker'
                      value={dayjs(formData.datetime)}
                      onChange={(newDateTime) => setFormData((prevData) => ({ ...prevData, dateTime: newDateTime }))}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <button className='trialInput' style={{ marginTop: "20px", cursor: "pointer" }} onClick={handleSubmit}>Submit</button>
              <p>{submitMessage}</p>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Trial
