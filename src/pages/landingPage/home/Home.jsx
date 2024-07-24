import React from 'react'
import HeroSection from './herosection/HeroSection';
import Featured from './featured/Featured';
import AboutMe from './aboutme/AboutMe';

const Home = () => {
  return (
    <main>
      <div className="container">
        <HeroSection />
        <Featured />
        <AboutMe />
      </div>
    </main>
  )
}

export default Home;
