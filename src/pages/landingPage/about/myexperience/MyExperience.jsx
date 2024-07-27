import React from 'react'
import { ExpConfig } from '../../../../config/experienceConfig.js';

const MyExperience = () => {
  return (
    <section id="experience" className="mt-10">
      <div className="container">
        <div className="flex max-md:flex-col max-md:gap-6">
          <div className="md:w-5/12 md:mt-24 mt-28">
            <h1 className="uppercase font-bebas text-5xl md:text-7xl">My Experience</h1>
          </div>
          <div className="flex flex-col md:w-7/12 gap-7 md:gap-14 md:mt-24">
            {ExpConfig.map((data) => (
              <div className="flex flex-col gap-4" key={data.id}>
                <div className="flex justify-between max-md:flex-col">
                  <h1 className="font-medium text-lg md:text-2xl">{data.title}</h1>
                  <p className="dark:text-brandOffwhite md:text-lg">{data.startdate} - {data.enddate}</p>
                </div>
                {data.company && <p className="dark:text-primary text-secondary font-semibold md:text-lg">{data.company}</p>}
                <p className="dark:text-brandOffwhite md:text-lg">{data.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyExperience;
