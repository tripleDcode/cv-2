import React from 'react'
import { Link } from 'react-router-dom';
import '../pages/GD.css'
import '/Users/dandavies/Documents/Projects/cv-2/src/App.css'

function GD() {
  return (
    <>
        <div className='gd-container'>
          <h1>Hi, I'm Dan</h1>
          <p><mark style={{ backgroundColor: '#9b59b6'}}>Enhance your brand’s visual identity with my expert graphic design skills. With a strong foundation in design principles and a creative flair, I craft compelling and memorable visuals that resonate with your audience.</mark></p>
        </div>
        <div className='graphoto-holder'>
            <img src='/graphicdesign.png' className='graphoto-image'></img>
            </div>
    </>
  )
}

export default GD