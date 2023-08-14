import './faq.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Faq() {
  return (
    <div className='faq' id='faq'>
      <div className="fContainer">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faAngleDown} style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="sum"
          >
            <p>I'm a complete beginner when it comes to excercise. Will this work for me?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Yes! It is a great way for you to learn about exercise and fitness while experiencing something new. You will have someone knowledgeable teaching and guiding you along the way in your fitness journey.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faAngleDown} style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="sum"
          >
            <p>Do I need to join a gym?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              No! ZAPFIT is a mobile personal training service, meaning that I come to you! Whether it is in the comfort of your own home or a nearby park, you can train with me anywhere at anytime. Equipment such as weights, an agility course set, skipping ropes, benches, pull up and dip bars, resistance bands, yoga mats, etc., will be provided at no extra cost.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faAngleDown} style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="sum"
          >
            <p>What kind of results can I expect?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              In as little a month, coupled with good dieting, there will be a noticeable decrease in body fat as well as an increase in cardiovascular health and muscle mass.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faAngleDown} style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="sum"
          >
            <p>Is this program suitable for everyone?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Unfortunately, no. Those with pacemakers, fitted defibrillators, type 2 diabetes, and severe multiple sclerosis  cannot do EMS training without putting themselves at risk of injury, but don't worry! I am currently working on designing programs to accommodate those with various medical needs.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default Faq
