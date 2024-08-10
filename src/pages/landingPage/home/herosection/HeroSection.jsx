import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import image from '../../../../assets/img/image.png'

const HeroSection = () => {
  return (
    <section id="hero">
      <div className='flex flex-col mb-4 md:flex-row justify-center items-center mt-4 gap-[5rem]' >
            <div className='flex flex-col w-[327px]'>
              <h2 className='text-[60px]'>HI, I AM</h2>
              <h2 className='text-[60px]'>ROBERT GARCIA.</h2>
              <p className='text-[18px]'>A Sydney based front-end developer passionate about building accessible and user friendly websites.</p>
              <div className='flex flex-row gap-3 items-center mt-6'>
                <div className='bg-[#D3E97A] flex flex-row items-center px-3 py-2 rounded-[50px]'>
                  <button className='text--black'>CONTACT ME</button>
                  <p className='font-[20px]'>.</p>
                </div>
                <FaLinkedin />
                <FaTwitter />
              </div>
            </div>
        <div className='flex flex-row'>
          <div className=''>
            <img src={image} alt="" />
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
