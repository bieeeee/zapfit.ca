import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './manage.scss';
import Admin from './Admin';

function Manage() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user.isAdmin &&
        <Admin />
      }
    </div>
  )
}

export default Manage
