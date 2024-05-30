import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../pages/md.css';
import '../../App.css';
import Navbar from '../navbar';
import Footer from '../footer';

function MD() {
  useEffect(() => {
    const video = document.getElementById('myVideo');

    if (video) {
      // Disable controls
      video.controls = false;

      // Prevent pausing
      const preventPause = () => video.play();
      video.addEventListener('pause', preventPause);

      // Auto-play the video if it gets paused for any reason
      video.play();

      // Cleanup function to remove event listener
      return () => {
        video.removeEventListener('pause', preventPause);
      };
    }
  }, []);

  return (
    <>
      <div className='md-container'>
        <Navbar animate={false} />
        <div className='md-content'>
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
        <div className='mdphoto-holder'>
          <video id='myVideo' className="mdphoto-image" autoPlay muted loop playsInline>
            <source src="/motiondesign2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Footer animate={false} />
      </div>
    </>
  );
}

export default MD;
