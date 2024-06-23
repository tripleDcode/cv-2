import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/hero';
import DM from './components/pages/dm';
import WD from './components/pages/wd';
import GD from './components/pages/GD';
import MD from './components/pages/MD';
import TabletSite from './components/TabletSite';
import TabletWD from './components/TabletWD';
import TabletMD from './components/TabletMD';
import TabletGD from './components/TabletGD';
import TabletDM from './components/TabletDM';
import MobileSite from './components/MobileSite';
import MobileDM from './components/MobileDM';
import MobileGD from './components/MobileGD';
import MobileMD from './components/MobileMD';
import MobileWD from './components/MobileWD';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setVh(); // Update vh variable on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // Call the function initially
  useEffect(() => {
    setVh();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {windowWidth <= 550 ? (
            <>
            <Route path='/' exact element={<MobileSite />} />
            <Route path='/digital-marketing' exact element={<MobileDM />} />
            <Route path='/graphic-design' exact element={<MobileGD />} />
            <Route path='/motion-design' exact element={<MobileMD />} />
            <Route path='/web-design' exact element={<MobileWD />} />
            </>
          ) : windowWidth <= 975 ? (
            <>
              <Route path='/' exact element={<TabletSite />} />
              <Route path='/web-design' exact element={<TabletWD />} />
              <Route path='/motion-design' exact element={<TabletMD />} />
              <Route path='/graphic-design' exact element={<TabletGD />} />
              <Route path='/digital-marketing' exact element={<TabletDM />} />
            </>
          ) : (
            <>
              <Route path="/" exact element={<Hero />} />
              <Route path="/digital-marketing" exact element={<DM />} />
              <Route path="/web-design" exact element={<WD />} />
              <Route path="/graphic-design" exact element={<GD />} />
              <Route path="/motion-design" exact element={<MD />} />
              <Route path="/experience" exact element={<Experience />} />
              <Route path='/contact' exact element={<ContactForm />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
