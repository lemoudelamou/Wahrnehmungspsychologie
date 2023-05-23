import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../style/Navbar.css';
import Logo from '../assets/logo.png';
import Home from '../assets/home.png';
import Wie from '../assets/wiefunktioniert.png';
import Flask from '../assets/flask.png';
import Login from '../assets/login.png'
import Register from '../assets/anmelden.png'
import Cal from '../assets/cal.png';

export default function Navbar({ activeTab, handleTabClick, loggedIn }) {
  const navRef = useRef();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    // Perform logout logic here
    // You can clear the user session, update the state, etc.
    // Example:
    // logout();

    // Redirect the user to the home page or the desired location
    window.location.href = '/';
  };

  return (
    <header className='navbar-fixed'>
      <img className='logo' src={Logo} alt='Logo' />
      <nav ref={navRef}>
        <div>
          <img className='home-tab' src={Home} alt='Home' />
          <a
            className={activeTab === 'home' ? 'active' : ''}
            onClick={event => (window.location.href = '/Home')}
          >
            Home
          </a>
        </div>
        <div>
          <img className='experiment-tab' src={Flask} alt='Experiment' />
          <a
            className={activeTab === 'experiment' ? 'active' : ''}
            onClick={event => (window.location.href = '/Experiment')}
          >
            Experiment
          </a>
        </div>
        <div>
          <img className='wie-tab' src={Wie} alt='Wie funktioniert es?' />
          <a
            className={activeTab === 'Rules' ? 'active' : ''}
            onClick={event => (window.location.href = '/Rules')}
          >
            Wie funktioniert es?
          </a>
        </div>
        <div>
          <img className='cal' src={Cal} alt='Berechnen' />
          <a
            className={activeTab === 'berechnen' ? 'active' : ''}
            onClick={event => (window.location.href = '/Calculate')}
          >
            Berechnen
          </a>
        </div>
        <div className='dropdown-container'>
          {loggedIn ? (
            <button className='logout-btn' onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className='dropdown-btn' onClick={toggleDropdown}>
              {dropdownVisible ? 'Close' : 'Sign In / Sign Up'}
            </button>
          )}
          {dropdownVisible && !loggedIn && (
            <div className='dropdown-menu'>
              <img className='cal' src={Login} alt='Login' />
              <a className='signin' href='/signin'>
                Sign In
              </a>
              <img className='cal' src={Register} alt='Register' />
              <a className='signup' href='/SignUp'>
                Sign Up
              </a>
            </div>
          )}
        </div>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
