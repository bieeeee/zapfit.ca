import './trial.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function Trial({ setOpen }) {


  return (
    <div className='trial'>
      <div className="tContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="tClose" onClick={() => setOpen(false)} />
        <div className="left">

        </div>
        <div className="right">
          <div className="trialInfo">
            <input
              type="text"
              placeholder="First name"
              className="trialInput"
              style={{marginRight: "10px"}}
            />
            <input
              type="text"
              placeholder="Last name"
              className="trialInput"
            />
          </div>
          <div className="trialInfo">
            <input
              type="text"
              placeholder="Email"
              className="trialInput"
            />
          </div>
          <div className="trialInfo">
            <input
              type="number"
              placeholder="Phone number"
              className="trialInput"
            />
          </div>
          <div className="trialInfo">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimePicker']} className="demoContainer trialInput">
                <DateTimePicker className='dateTimePicker' />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <button className='trialInput' style={{marginTop: "20px"}}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Trial
