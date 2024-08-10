import React from 'react';
import PrimaryButton from '../../../../components/primarybutton/PrimaryButton';
import { UserConfig } from '../../../../config/userConfig';

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="md:container">
        <div className='flex flex-col gap-[5rem] mb-4 mt-4 md:flex-row md:justify-center md:items-center md:gap-40' >
          <div className='flex flex-col'>
            <div>
              <h2 className='uppercase font-bebas text-5xl md:text-7xl mb-2'>HI, I AM</h2>
              <h2 className='uppercase font-bebas text-5xl md:text-7xl md:text-nowrap'>{UserConfig.firstname} {UserConfig.lastname}</h2>
            </div>
            <p className='text-[14px]'>{UserConfig.bio}</p>
            <div className='flex flex-row gap-3 items-center mt-6'>
              <PrimaryButton text={"contact me"} nobutton buttonlink={"#contact"} />
            </div>
          </div>
          <div className='flex flex-row'>
            <div className="flex justify-center items-center w-full h-fit rounded-xl pt-8 md:pt-14 bg-brandGray dark:bg-brandOffwhite ">
              <img src={UserConfig.portraitimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
