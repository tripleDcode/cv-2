import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/hero';
import DM from './components/pages/dm';
import WD from './components/pages/wd';
import GD from './components/pages/GD';
import MD from './components/pages/MD'
import TabletSite from './components/TabletSite'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function setVh() {
    // Get the viewport height and set it as a CSS custom property
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // Call the function initially
  setVh();
  
  // Recalculate the value on resize
  window.addEventListener('resize', setVh);
  

  return (
    <>
      {windowWidth <= 975 ? (
        <Router>
        <TabletSite />
        <Routes>
        </Routes>
        </Router>
      ) : (
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" exact element={<Hero />} />
            <Route path="/digital-marketing" exact element={<DM />} />
            <Route path="/web-design" exact element={<WD />} />
            <Route path="/graphic-design" exact element={<GD />} />
            <Route path="/motion-design" exact element={<MD />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      )}
    </>
  );
}

export default App;
