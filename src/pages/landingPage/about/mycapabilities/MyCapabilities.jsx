import React from 'react'
import { UserConfig } from '../../../../config/userConfig';

const MyCapabilities = () => {
  return (
    <section id="capabilities" className="md:mt-10">
      <div className="container">
        <div className="flex max-md:flex-col max-md:gap-6">
          <div className="md:w-5/12 md:mt-24 mt-28">
            <h1 className="uppercase font-bebas text-5xl md:text-7xl">My capabilities</h1>
          </div>
          <div className="flex flex-col md:w-7/12 gap-7 md:gap-14 md:mt-24">
            <p className="dark:text-brandOffwhite md:text-lg">{UserConfig.capabilities.title}</p>
            <div className="flex flex-wrap gap-4">
              {UserConfig.capabilities.stack.map((text, index) => (
                <div key={index} className="px-10 py-5 rounded-full border dark:border-brandGray border-black">
                  <h1 className="uppercase">{text}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyCapabilities;
