import React from 'react'
import HeroSection from './herosection/HeroSection';
import MyCapabilities from './mycapabilities/MyCapabilities';
import MyExperience from './myexperience/MyExperience';

const About = () => {
  return (
    <main>
      <div className="container">
        <HeroSection />
        <MyCapabilities />
        <MyExperience />
      </div>
    </main>
  )
}

export default About;
