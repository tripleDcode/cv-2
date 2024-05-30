import React from 'react'
import { Link } from 'react-router-dom';
import '../pages/dm.css'
import '../../App.css'
import Navbar from '../navbar'
import Footer from '../footer'

function DM() {
  return (
    <>
        <div className='dm-container'>
        <Navbar animate={false} />
          <div className='dm-content'>
          <h1><mark style={{ backgroundColor: '#fff', color: 'black' }}>Hi, I'm Dan</mark></h1>
          <p><mark style={{ backgroundColor: '#1abc9c'}}>I am a skilled digital marketing professional with expertise in crafting comprehensive marketing strategies that drive engagement and growth. My proficiency spans across various digital channels, including social media, email marketing, and search engine optimization (SEO).</mark></p>
        </div>
        <div className='dmphoto-holder'>
            <img src='/digitalmarketing.png' className='dmphoto-image'></img>
            </div>
            <Footer animate={false}/>
          </div>
    </>
  )
}

export default DM