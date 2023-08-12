import { Link, useNavigate } from 'react-router-dom';
import './navbar.scss';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

function Navbar() {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({type: "LOGOUT"});
  }

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Zapfit</span>
        </Link>
        <div className="links">
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="contact">Contact</span>
          </Link>
        </div>
        {user ?
          <div className="navItems">
            <span>Hello, {user.username}</span>
            <button onClick={handleLogout} className="navButton">Logout</button>
          </div>
          :
          <div className="navItems">
            <button className="navButton">Register</button>
            <button onClick={handleLogin} className="navButton">Login</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
