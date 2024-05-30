import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../pages/WD.css'
import '../../App.css'
import Navbar from '../navbar'
import Footer from '../footer'




function WD() {

  return (
    <>
        <div className='wd-container'>
        <Navbar animate={false} />
          <div className='wd-content'>
          <h1><mark style={{ backgroundColor: '#fff', color: 'black' }}>Hi, I'm Dan</mark></h1>
          <p><mark style={{ backgroundColor: '#3498db'}}>As a web developer, I possess a comprehensive skill set in designing and building responsive, user-friendly websites. With expertise in front-end technologies such as HTML, CSS, and JavaScriptn.</mark></p>
        </div>
        <div className='webphoto-holder'>
            <img src='/webdesign.png' className='webphoto-image'></img>
            </div>
            <Footer animate={false}/>
          </div>
    </>
  )
}
export default WD