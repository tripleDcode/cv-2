import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../tabletpages/tmd.css'

function TMD() {

  return (
    <>
        <div className='tmd-container'>
        <h1>
            <mark style={{ backgroundColor: '#fff', color: 'black' }}>
              Hi, I'm Dan
            </mark>
          </h1>
          <p>
            <mark style={{ backgroundColor: '#fb4a36'}}>
              Bring your brand to life with my exceptional motion design skills. 
              With a passion for storytelling and a keen eye for detail, I create 
              dynamic animations and videos that captivate and engage your audience. 
              From animated logos and explainer videos to social media content and 
              promotional ads.
            </mark>
          </p>
        </div>
        <div className='tmd-holder'>
          <video id='myVideo' className="tmd-image" autoPlay muted loop playsInline>
            <source src="/motiondesign2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </>
  )
}

export default TMD