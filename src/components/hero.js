import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../components/hero.css'
import { lockScroll, unlockScroll } from '../components/lockscroll';

function Hero() {
  useEffect(() => {
    lockScroll();

    return () => {
      unlockScroll();
    };
  }, []);

  return (
    <>
        <div className='hero-container'>
          <h1>Hi, I'm Dan</h1>
          <p>
Transform your digital presence with my comprehensive skill set in <mark style={{backgroundColor: '#1abc9c'}}>digital marketing</mark>, <mark style={{backgroundColor: '#3498db'}}>web design</mark>, <mark style={{backgroundColor: '#9b59b6'}}>graphic design</mark>, and <mark style={{backgroundColor: '#fb4a36'}}>motion design</mark>. With a keen eye for aesthetics and a strategic mindset, I create visually stunning and highly functional websites that captivate and convert.</p>
        </div>
        <div className='photo-holder'>
            <img src='/hero-image.png' className='photo-image'></img>
            </div>
    </>
  )
}

export default Hero