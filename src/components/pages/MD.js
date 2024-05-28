import React from 'react'
import { Link } from 'react-router-dom';
import '../pages/md.css'
import '/Users/dandavies/Documents/Projects/cv-2/src/App.css'

function MD() {
  return (
    <>
        <div className='md-container'>
          <h1>Hi, I'm Dan</h1>
          <p><mark style={{ backgroundColor: '#fb4a36'}}>Bring your brand to life with my exceptional motion design skills. With a passion for storytelling and a keen eye for detail, I create dynamic animations and videos that captivate and engage your audience. From animated logos and explainer videos to social media content and promotional ads.</mark></p>
        </div>
        <div className='mdphoto-holder'>
            <img src='/motiondesign.gif' className='mdphoto-image'></img>
            </div>
    </>
  )
}

export default MD