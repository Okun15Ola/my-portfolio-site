import React from 'react';
import PrimaryButton from '../../../../components/primarybutton/PrimaryButton';
import { UserConfig } from '../../../../config/userConfig';

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="md:container">
        <div className='flex flex-col gap-[5rem] mb-4 mt-4 md:flex-row md:justify-center md:items-center md:gap-40' >
          <div className='flex flex-col md:w-1/2'>
            <div>
              <h2 className='uppercase font-bebas text-5xl md:text-7xl mb-2'>HI, I AM</h2>
              <h2 className='uppercase font-bebas text-5xl md:text-7xl md:text-nowrap'>{UserConfig.firstname} {UserConfig.lastname}</h2>
            </div>
            <p className="text-base md:text-lg dark:text-brandOffwhite">{UserConfig.bio}</p>
            <div className='flex flex-row gap-3 items-center mt-6'>
              <PrimaryButton text={"contact me"} nobutton buttonlink={"#contact"} />
            </div>
          </div>
          <div className='flex flex-row md:w-1/2'>
            <div className="flex justify-center items-center w-full h-fit rounded-xl pt-8 md:pt-14 bg-brandGray dark:bg-brandOffwhite ">
              <img src={UserConfig.portraitimg} alt="hero=img-home" className="drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
