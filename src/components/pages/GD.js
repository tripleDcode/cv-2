import React from 'react'
import { Link } from 'react-router-dom';
import '../pages/GD.css'
import '../../App.css'
import Navbar from '../navbar'
import Footer from '../footer'

function GD() {
  return (
    <>
        <div className='gd-container'>
          <Navbar animate={false}/>
        <div className='gd-content'>
        <h1><mark style={{ backgroundColor: '#fff', color: 'black' }}>Hi, I'm Dan</mark></h1>
          <p><mark style={{ backgroundColor: '#9b59b6'}}>Enhance your brand’s visual identity with my expert graphic design skills. With a strong foundation in design principles and a creative flair, I craft compelling and memorable visuals that resonate with your audience.</mark></p>
        </div>
        <div className='graphoto-holder'>
            <img src='/graphicdesign.png' className='graphoto-image'></img>
            </div>
            <Footer animate={false}/>
          </div>
    </>
  )
}

export default GD