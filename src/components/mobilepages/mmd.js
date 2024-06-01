import React, { useEffect } from 'react'
import '../mobilepages/mmd.css'

function Mmd() {

  return (
    <>
        <div className='mmd-container'>
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
    </>
  )
}

export default Mmd