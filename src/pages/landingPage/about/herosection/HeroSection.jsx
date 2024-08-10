import React from 'react';
import AboutMe from '../../home/aboutme/AboutMe';
import PrimaryButton from '../../../../components/primarybutton/PrimaryButton';
import Image from "../../../../assets/static/img/coolimg.png"

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-24 md:gap-40">
      <AboutMe>
        <PrimaryButton text={"DOWNLOAD RESUME"} />
      </AboutMe>
      <div className="md:container">
        <div className="flex justify-center items-center w-full h-fit rounded-xl pt-8 md:pt-14 bg-brandGray dark:bg-brandOffwhite ">
          <img src={Image} alt="hero-img" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
