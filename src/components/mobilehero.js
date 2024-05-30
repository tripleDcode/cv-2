import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../components/mobilehero.css'

function MobileHero() {

  return (
    <>
        <div className='mobile-hero-container'>
          <h1>Hi, I'm Dan</h1>
          <p>
          Transform your digital presence with my comprehensive skill set in <mark style={{backgroundColor: '#1abc9c'}}>digital marketing</mark>, <mark style={{backgroundColor: '#3498db'}}>web design</mark>, <mark style={{backgroundColor: '#9b59b6'}}>graphic design</mark>, and <mark style={{backgroundColor: '#fb4a36'}}>motion design</mark>. With a keen eye for aesthetics and a strategic mindset, I create visually stunning and highly functional websites that captivate and convert.</p>

        </div>
        <div className='mobile-photo-holder'>
            <img src='/hero-image.png' className='mobile-photo-image'></img>
            </div>
    </>
  )
}

export default MobileHero