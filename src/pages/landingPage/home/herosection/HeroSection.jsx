import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa6';
import image from '../../../../assets/img/image.png'
import { FaArrowUp } from 'react-icons/fa6';

const HeroSection = () => {
  return (
    <section id="hero">
      <div className='flex flex-col gap-[5rem] mb-4 mt-4 md:flex-row md:justify-center md:items-center md:gap-[10rem]' >
            <div className='flex flex-col w-[327px]'>
              <div className=''>
              <h2 className='text-[57px] md:text-[57px] font-normal uppercase font-bebas'>HI, I AM</h2>
              <h2 className='text-[57px] md:text-[57px] font-normal uppercase font-bebas'>ROBERT GARCIA.</h2>
              </div>
              <p className='text-[14px]'>A Sydney based front-end developer passionate about building accessible and user friendly websites.</p>
              <div className='flex flex-row gap-3 items-center mt-6'>
              <div className="bg-[#D3E97A] flex flex-row items-center px-3 py-2 rounded-[50px] space-x-2">
                <button className="text-[#0A0A0A] text-[16px] font-bold">CONTACT ME</button>
                <FaArrowUp className="bg-black text-white p-1 rounded-full text-2xl transform rotate-45" />
              </div>
              <FaLinkedinIn className="bg-[#222222] text-[#D3E97A] p-2 rounded-full text-xl w-10 h-10 flex items-center justify-center" />
              <FaGithub className="bg-[#222222] text-[#D3E97A] p-2 rounded-full text-xl w-10 h-10 flex items-center justify-center" />

                
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
