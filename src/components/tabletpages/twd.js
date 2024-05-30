import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../tabletpages/twd.css'

function TWD() {

  return (
    <>
        <div className='twd-container'>
        <h1><mark style={{ backgroundColor: '#fff', color: 'black' }}>Hi, I'm Dan</mark></h1>
          <p><mark style={{ backgroundColor: '#3498db'}}>As a web developer, I possess a comprehensive skill set in designing and building responsive, user-friendly websites. With expertise in front-end technologies such as HTML, CSS, and JavaScriptn.</mark></p>
        </div>
        <div className='twd-holder'>
            <img src='/webdesign.png' className='twd-image'></img>
            </div>
    </>
  )
}

export default TWD