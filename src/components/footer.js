import React, { useState, useEffect } from 'react';
import './footer.css';
import { Button } from '../components/button'
import { Link } from 'react-router-dom'

function Footer() {
    const [show, setShow] = useState(false);

    useEffect(() => {
      // Set a timeout to toggle the visibility of the footer after a delay
      const timeout = setTimeout(() => {
        setShow(true);
      }, 1000); // Adjust the delay time as needed
  
      // Clean up the timeout on component unmount
      return () => clearTimeout(timeout);
    }, []);

  return (
    <div className={`footer-container ${show ? 'show' : ''}`}>
    <Link to='/digital-marketing'>
      <Button className="btns" buttonStyle='btn--1'>DIGITAL MARKETING</Button>
    </Link>
    <Link to='/web-design'>
      <Button className="btns" buttonStyle='btn--2'>WEBSITE DESIGN</Button>
    </Link>
    <Link to='/graphic-design'>
      <Button className="btns" buttonStyle='btn--3'>GRAPHIC DESIGN</Button>
      </Link>
    <Link to='/motion-design'>
      <Button className="btns" buttonStyle='btn--4'>MOTION DESIGN</Button>
    </Link>
    </div>
  )
}

export default Footer
