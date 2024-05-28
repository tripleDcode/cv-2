// src/Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Button } from '../components/sidebutton'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  return (
    <>
    <div className='logo'>
    <Link to="/">
          Daniel Davies <i class="fa-solid fa-code"></i>
    </Link>
    </div>
    <div className='sidebar'>
      <div className='sidebar-buttons'>
         <Link to='/digital-marketing'>
      <Button className="sbtns" buttonStyle='sbtn--1'>DIGITAL MARKETING</Button>
    </Link>
    <Link to='/web-design'>
      <Button className="sbtns" buttonStyle='sbtn--2'>WEBSITE DESIGN</Button>
    </Link>
    <Link to='/graphic-design'>
      <Button className="sbtns" buttonStyle='sbtn--3'>GRAPHIC DESIGN</Button>
      </Link>
    <Link>
      <Button className="sbtns" buttonStyle='sbtn--4'>MOTION DESIGN</Button>
    </Link>
    </div>
    </div>
    </>
  );
};

export default SideMenu;
