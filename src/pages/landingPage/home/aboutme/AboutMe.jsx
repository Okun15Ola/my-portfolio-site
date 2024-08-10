import React from 'react'
import { UserConfig } from '../../../../config/userConfig';

const AboutMe = ({children}) => {
  return (
    <section id="about" className="md:mt-10">
      <div className="md:container">
        <div className="flex max-md:flex-col max-md:gap-6">
          <div className="md:w-5/12 md:mt-24 mt-28">
            <h1 className="uppercase font-bebas text-5xl md:text-7xl">ABOUT ME</h1>
          </div>
          <div className="flex flex-col md:w-7/12 gap-7 md:gap-14 md:mt-24">
            <div className="flex flex-col gap-6">
              <h1 className="font-medium text-lg md:text-3xl">{UserConfig.about.title}</h1>
              <p className="dark:text-brandOffwhite md:text-lg">{UserConfig.about.des}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
