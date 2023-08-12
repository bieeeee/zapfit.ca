import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './trial.scss';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Trial({ setOpen }) {
  return (
    <div className='trial'>
      <div className="tContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="tClose" onClick={() => setOpen(false)} />
        Trial
      </div>
    </div>
  )
}

export default Trial
