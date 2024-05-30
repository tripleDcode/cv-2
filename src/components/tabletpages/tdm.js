import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../tabletpages/tdm.css'

function TDM() {

  return (
    <>
        <div className='tdm-container'>
        <h1><mark style={{ backgroundColor: '#fff', color: 'black' }}>Hi, I'm Dan</mark></h1>
          <p><mark style={{ backgroundColor: '#1abc9c'}}>I am a skilled digital marketing professional with expertise in crafting comprehensive marketing strategies that drive engagement and growth. My proficiency spans across various digital channels, including social media, email marketing, and search engine optimization (SEO).</mark></p>
        </div>
        <div className='tdm-holder'>
            <img src='/digitalmarketing.png' className='tdm-image'></img>
            </div>
    </>
  )
}

export default TDM