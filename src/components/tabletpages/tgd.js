import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../tabletpages/tgd.css'

function TGD() {

  return (
    <>
        <div className='tgd-container'>
        <h1><mark style={{ backgroundColor: '#fff', color: 'black' }}>Hi, I'm Dan</mark></h1>
          <p><mark style={{ backgroundColor: '#9b59b6'}}>Enhance your brand’s visual identity with my expert graphic design skills. With a strong foundation in design principles and a creative flair, I craft compelling and memorable visuals that resonate with your audience.</mark></p>
        </div>
        <div className='tgd-holder'>
            <img src='/graphicdesign.png' className='tgd-image'></img>
            </div>
    </>
  )
}

export default TGD