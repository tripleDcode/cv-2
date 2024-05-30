import React, { useState, useEffect } from 'react';
import './mobilemenu.css';
import { Button } from '../components/mobilebutton'
import { Link } from 'react-router-dom'

function MobileMenu({ animate }) {
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

  return (
    <div className={`mobile-container ${animate ? 'animate' : ''} ${show ? 'show' : ''}`}>
        <div className='mobile-buttons'>
    <Link to='/digital-marketing'>
      <Button className="m-btns" buttonStyle='m-btn--1'>DIGITAL MARKETING</Button>
    </Link>
    <Link to='/web-design'>
      <Button className="m-btns" buttonStyle='m-btn--2'>WEBSITE DESIGN</Button>
    </Link>
    <Link to='/graphic-design'>
      <Button className="m-btns" buttonStyle='m-btn--3'>GRAPHIC DESIGN</Button>
      </Link>
    <Link to='/motion-design'>
      <Button className="m-btns" buttonStyle='m-btn--4'>MOTION DESIGN</Button>
    </Link>
    </div>
    </div>
  )
}

export default MobileMenu

