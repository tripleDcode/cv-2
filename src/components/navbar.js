import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


function Navbar({ }) {
    const [click, setClick] = useState(false);
    
    const HandleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [show, setShow] = useState(false);

  useEffect(() => {
    // Set a timeout to toggle the visibility of the navbar after a delay
    const timeout = setTimeout(() => {
      setShow(true);
    }, 500); // Adjust the delay time as needed

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);



  return (
    <div>
      <>
        <nav className={`navbar ${show ? 'show' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Daniel Davies <i class="fa-solid fa-code"></i>
                </Link>
                <div className="menu-icon" onClick={HandleClick}>
                    <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'}/>
                </div>
                <div className='menu-container'>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      </>
    </div>
  )
}

export default Navbar
