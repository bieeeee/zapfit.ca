import { Link, useNavigate } from 'react-router-dom';
import './navbar.scss';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useState } from 'react';


function Navbar() {
  const { user, dispatch } = useContext(AuthContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  }

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <div className={`navbar ${drawerOpen ? 'drawer-open' : ''}`}>
      <div className="navContainer">
        <a href="/">
          <img src='./assets/logo.png' alt="logo" className='logo' />
        </a>
        <div className={`links ${drawerOpen ? 'drawer-open' : ''}`}>
          <a href="#about" onClick={toggleDrawer}>About</a>
          <a href="#faq" onClick={toggleDrawer}>FAQ</a>
          <a href="#contact" onClick={toggleDrawer}>Contact</a>
          {user ?
            <>
              <span>{user.username}</span>
              <button onClick={handleLogout} className="navButton">Logout</button>
            </>
            :
            <button onClick={handleLogin} className="navButton">Login</button>
          }
        </div>
        <div className="drawer-icon" onClick={toggleDrawer}>
          <div className={`bar ${drawerOpen ? 'open' : ''}`}></div>
          <div className={`bar ${drawerOpen ? 'open' : ''}`}></div>
          <div className={`bar ${drawerOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
