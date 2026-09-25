import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
//import Main from './Main';

import MainSite from "./MainSite";
import PositionsSite from './PapersSite';
import SoftwareSite from './SoftwareSite';

export default function Layout({ children }) {
  const [activeSite, setActiveSite] = useState('main'); // Startseite
  const [scrollTarget, setScrollTarget] = useState(null); // Tracks section to scroll to

  const navigateAndScroll = (view, sectionId) => {
    setActiveSite(view);
    setScrollTarget(sectionId); // Queue the section ID for after render
  };


  return (
    <div className="layout-container">
      <Header
      onNavigate={navigateAndScroll}  
      activeSite={activeSite} 
      setActiveSite={setActiveSite}
       />
       <main style={{ padding: '20px' }} className='main'>
        {activeSite === 'main' && 
          <MainSite 
            scrollTarget={scrollTarget} 
            clearScrollTarget={() => setScrollTarget(null)} 
              />}
        {activeSite === 'papers' && <PositionsSite />}
        {activeSite === 'software' && <SoftwareSite />}
        {activeSite === 'positions' && <PositionsSite />}
      </main>
      <Footer />
    </div>
  );
}