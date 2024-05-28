import React from 'react'
import { Link } from 'react-router-dom';
import '../pages/dm.css'
import '/Users/dandavies/Documents/Projects/cv-2/src/App.css'

function DM() {
  return (
    <>
        <div className='dm-container'>
          <h1>Hi, I'm Dan</h1>
          <p><mark style={{ backgroundColor: '#1abc9c'}}>Elevate your brand’s online presence with my expert digital marketing skills. With a strategic approach and a deep understanding of the latest trends, I craft tailored marketing campaigns that drive engagement, increase conversions, and boost your ROI.</mark></p>
        </div>
        <div className='digiphoto-holder'>
            <img src='/digitalmarketing.png' className='digiphoto-image'></img>
            </div>
    </>
  )
}

export default DM