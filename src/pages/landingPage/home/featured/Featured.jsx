import React from 'react'
import Project from './project/Project';
import { ProjectConfig } from '../../../../config/projectConfig';

const Featured = () => {
  return (
    <section id="feature">
      <div className="md:container">
        <div className="flex flex-col">
          <div className="py-14 md:mt-10 mt-12">
            <div className="w-full md:w-[600px] flex flex-col gap-4">
              <h1 className="uppercase font-bebas text-5xl md:text-7xl">
                Featured Projects
              </h1>
              <p className="text-base md:text-lg dark:text-brandOffwhite">Here are some of the selected projects that showcase my passion for front-end development</p>
            </div>
          </div>
          <div className="flex flex-col gap-20">
            {ProjectConfig.map((dets, index) => (
              <Project
                key={index}
                client={dets.client}
                des={dets.des}
                githublink={dets.githublink}
                id={index}
                img={dets.img}
                livedemo={dets.liveDemo}
                role={dets.role}
                title={dets.title}
                type={dets.type}
                year={dets.year}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured;
