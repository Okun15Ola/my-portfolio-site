import React from 'react'
import HeroSection from './herosection/HeroSection';
import Featured from './featured/Featured';
import AboutMe from './aboutme/AboutMe';
import { ABOUT } from '../../../routes/RoutesConstant';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <div className="container">
        <HeroSection />
        <Featured />
        <AboutMe>
          <Link to={ABOUT}>
            <div className="w-fit text-secondary dark:text-primary border-b-2 border-secondary dark:border-primary">
              <h6 className="uppercase">more about me</h6>
            </div>
          </Link>
        </AboutMe>
      </div>
    </main>
  )
}

export default Home;
