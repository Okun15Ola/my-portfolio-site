import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { RiArrowRightUpLine } from "react-icons/ri";
import { BiDownload } from "react-icons/bi";

const PrimaryButton = ({text}) => {
  return (
    <div className="flex max-sm:justify-between gap-4">
        <button className="group flex items-center dark:bg-primary bg-secondary gap-3 rounded-full md:pl-6 pl-4 md:pr-2 pr-1">
            <h1 className="font-bold dark:text-black text-white md:py-5 py-[16px] max-md:text-sm">{text}</h1>
            <div className="flex items-center justify-center border rounded-full md:w-11 w-9 md:h-11 h-9 dark:bg-black bg-white md:scale-[.3] group-hover:scale-100 md:transition-all md:duration-300">
                <RiArrowRightUpLine size={30} className={"hidden md:group-hover:block md:transition-all md:duration-300"} />
                <BiDownload size={24} className={"md:hidden"} />
            </div>
        </button>
        <div className="flex justify-center items-center px-[12px] md:px-[18px] rounded-full dark:bg-brandGray/40 bg-brandOffwhite/40">
            <FaLinkedinIn size={30} className={"dark:text-primary text-secondary"} />
        </div>
        <div className="flex justify-center items-center px-[12px] md:px-[18px] rounded-full dark:bg-brandGray/40 bg-brandOffwhite/40">
            <FaGithub size={30} className={"dark:text-primary text-secondary"} />
        </div>
    </div>
  )
}

export default PrimaryButton;
