import React from 'react';
import AboutMe from '../../home/aboutme/AboutMe';
import PrimaryButton from '../../../../components/primarybutton/PrimaryButton';
import { UserConfig } from '../../../../config/userConfig';

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-24 md:gap-40">
      <AboutMe>
        <PrimaryButton text={"DOWNLOAD RESUME"} buttonlink={UserConfig.resumeLink} />
      </AboutMe>
      <div className="md:container">
        <div className="flex justify-center items-center w-full h-fit rounded-xl pt-8 md:pt-14 bg-brandGray dark:bg-brandOffwhite ">
          <img src={UserConfig.about.img2} alt="hero-img-about" className="drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
