import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { RiArrowRightUpLine } from "react-icons/ri";
import { BiDownload } from "react-icons/bi";
import { UserConfig } from '../../config/userConfig';

const PrimaryButton = ({ text, nobutton, buttonlink }) => {
  return (
    <div className="flex max-sm:justify-between gap-4">
        <a href={buttonlink} target={nobutton? "" : "_blank"} rel="noopener noreferrer">
            <button className={`group flex items-center dark:bg-primary bg-secondary gap-3 rounded-full md:pl-6 pl-4 md:pr-2 pr-1`}>
                <h1 className="font-bold dark:text-black text-white md:py-5 py-[16px] max-md:text-sm uppercase">{text}</h1>
                <div className="flex items-center justify-center border rounded-full md:w-11 w-9 md:h-11 h-9 dark:bg-black bg-white md:scale-[.3] group-hover:scale-100 md:transition-all md:duration-300">
                    <RiArrowRightUpLine size={30} className={`${!nobutton && "hidden"} md:hidden md:group-hover:block md:transition-all md:duration-300`} />
                    {!nobutton && <BiDownload size={24} className={"md:hidden"} />}
                </div>
            </button>
        </a>
        <a href={UserConfig.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <div className="w-full h-full flex justify-center items-center px-[12px] md:px-[18px] rounded-full dark:bg-brandGray/40 bg-brandOffwhite/40">
                <FaLinkedinIn size={30} className={"dark:text-primary text-secondary"} />
            </div>
        </a>
        <a href={UserConfig.socials.github} target="_blank" rel="noopener noreferrer">
            <div className="w-full h-full flex justify-center items-center px-[12px] md:px-[18px] rounded-full dark:bg-brandGray/40 bg-brandOffwhite/40">
                <FaGithub size={30} className={"dark:text-primary text-secondary"} />
            </div>
        </a>
    </div>
  )
}

export default PrimaryButton;
