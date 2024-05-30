import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/hero';
import DM from './components/pages/dm';
import WD from './components/pages/wd';
import GD from './components/pages/GD';
import MD from './components/pages/MD'
import TabletSite from './components/TabletSite'
import TabletWD from './components/TabletWD';
import TabletMD from './components/TabletMD';
import TabletGD from './components/TabletGD';
import TabletDM from './components/TabletDM';

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
      {windowWidth <= 975 ? (
        <Router>
        <Routes>
          <Route path='/' exact element={<TabletSite />}></Route>
          <Route path='/web-design' exact element={<TabletWD />}></Route>
          <Route path='/motion-design' exact element={<TabletMD />}></Route>
          <Route path='/graphic-design' exact element={<TabletGD />}></Route>
          <Route path='/digital-marketing' exact element={<TabletDM />}></Route>
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
