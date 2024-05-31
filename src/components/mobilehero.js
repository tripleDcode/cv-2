import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../components/mobilehero.css'

function MobileHero() {

  return (
    <>
        <div className='mobile-hero-container'>
          <h1><mark style={{ backgroundColor: '#fff', color: 'black' }}>Hi, I'm Dan</mark></h1>
          <p>
          <mark style={{ backgroundColor: '#fff', color: 'black' }}>Transform your digital presence with my comprehensive skill set in</mark> <mark style={{backgroundColor: '#1abc9c'}}>digital marketing</mark>, <mark style={{backgroundColor: '#3498db'}}>web design</mark>, <mark style={{backgroundColor: '#9b59b6'}}>graphic design</mark><mark style={{ backgroundColor: '#fff', color: 'black' }}>, and</mark> <mark style={{backgroundColor: '#fb4a36'}}>motion design</mark>. <mark style={{ backgroundColor: '#fff', color: 'black' }}>With a keen eye for aesthetics and a strategic mindset, I create visually stunning and highly functional websites that captivate and convert.</mark></p>

        </div>
    </>
  )
}

export default MobileHero