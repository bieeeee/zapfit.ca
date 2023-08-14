import './header.scss';
import video from '../../assets/zapfit1.mp4';
import { useState } from 'react';
import Trial from '../trial/Trial';

function Header() {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  }

  return (
    <div className='header'>
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      <div className="content">
        <h1>SUPERCHARGE YOUR WORKOUT</h1>
        <h3>Turn your hour long workout into <strong>20 minutes</strong> with the EMS Powersuit and a certified personal trainer</h3>
        <button className="tButton" onClick={handleClick}>Book a trial</button>
      </div>
      {openModal && <Trial setOpen={setOpenModal} />}
    </div>
  )
}

export default Header
