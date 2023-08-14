import './about.scss';
import suit from '../../assets/suit01.png';


function About() {
  return (
    <div className='about' id='about'>
      <div className="EMS">
        <h1>What is EMS?</h1>
        <p><strong>Electrical Muscle Stimulation</strong> forces your muscles to contract without the use of the electrical impulses sent from your brain. Using an EMS device allows for deep and intense muscular contractions without activating or stressing your CNS (central nervous system).</p>
        <a href="https://youtu.be/qnekQR67B54">Learn more</a>
      </div>
      <div className="suit">
        <img src={suit} alt="powersuit" />
      </div>

    </div>
  )
}

export default About
