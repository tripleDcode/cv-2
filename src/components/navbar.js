import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar({ animate }) {
    const [click, setClick] = useState(false);
    const [show, setShow] = useState(false);
  
    useEffect(() => {
      let timeout;
      if (animate) {
        timeout = setTimeout(() => {
          setShow(true);
        }, 500); // Adjust the delay time as needed
      } else {
        setShow(true); // Show navbar immediately if animation is not required
      }
  
      // Clean up the timeout on component unmount
      return () => clearTimeout(timeout);
    }, [animate]);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <>
        <nav className={`navbar ${animate ? 'animate' : ''} ${show ? 'show' : ''}`}>
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              Daniel Davies <i className="fa-solid fa-code"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
            </div>
            <div className='menu-container'>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/experience' className='nav-links' onClick={closeMobileMenu}>
                    Experience
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}

export default Navbar;
