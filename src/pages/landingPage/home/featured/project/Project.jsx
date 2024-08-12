import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Project = ({id, img, title, des, client, year, role, livedemo, githublink, type}) => {
  return (
    <div className="flex md:max-h-[600px] md:shadow-md rounded-se-full max-md:flex-col">
        <div className="md:w-1/2 flex flex-col md:p-6 p-2">
            {type && <small className="">{type}</small>}
            <div className="md:px-5 p-2 md:py-16">
                <img className="shadow-lg md:shadow-2xl shadow-black dark:shadow-stone-50 dark:border-none border-4 rounded-[19px] border-black" src={img} alt={`img-${id}`} />
            </div>
        </div>
        <div className="md:w-1/2 py-12 md:pl-10">
            <div className="flex flex-col justify-between h-full max-md:gap-10">
                <div className="flex flex-col gap-8">
                    <div className="flex-col flex gap-4">
                        <h1 className="text-2xl md:text-3xl font-medium">{title}</h1>
                        <p className="md:text-lg dark:text-brandOffwhite">{des}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="uppercase font-semibold">Project Info</h1>
                        <div>
                            {client && <div className="flex justify-between items-center py-3">
                                <h4 className="font-medium">Client</h4>
                                <h4 className="font-medium dark:text-brandOffwhite">{client}</h4>
                            </div>}
                            {year && <div className="flex justify-between items-center py-3">
                                <h4 className="font-medium">Year</h4>
                                <h4 className="font-medium dark:text-brandOffwhite">{year}</h4>
                            </div>}
                            {role && <div className="flex justify-between items-center py-3">
                                <h4 className="font-medium">Role</h4>
                                <h4 className="font-medium dark:text-brandOffwhite">{role}</h4>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    {livedemo && <div className="flex border-b-2 border-secondary dark:border-primary uppercase items-center justify-center gap-1">
                        <a className="text-sm md:text-base text-secondary dark:text-primary font-medium" href={livedemo} target="_blank" rel="noreferrer">Live Demo</a>
                        <MdArrowOutward size={20} className={"dark:text-primary text-secondary"} />
                    </div>}
                    {githublink && <div className="flex border-b-2 border-secondary dark:border-primary uppercase items-center justify-center gap-1">
                        <a className="text-sm md:text-base text-secondary dark:text-primary font-medium" href={githublink} target="_blank" rel="noreferrer">See On Github</a>
                        <FaGithub size={20} className={"dark:text-primary text-secondary"} />
                    </div>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project;
