import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { UserConfig } from '../../config/userConfig';

const LetsConnect = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };
    console.log(formData)
  };
  return (
    <div className="md:container">
      <section id="contact" className="md:mt-10">
        <div className="container flex max-md:flex-col max-md:gap-16 py-14 max-md:relative z-10">
          <div className="md:w-1/2 flex flex-col justify-between gap-8 md:mt-10 mt-12">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h1 className="uppercase font-bebas md:text-7xl text-5xl">Let's connect</h1>
                <p className="md:text-lg dark:text-brandOffwhite">
                  Say hello at <a href={`mailto:${UserConfig.email}`} className="border-b dark:border-primary border-secondary">{UserConfig.email}</a> <br />
                  For more info, here's my <a href={`${UserConfig.resumeLink}`} target="_blank" rel="noopener noreferrer" className="border-b dark:border-primary border-secondary">resume</a>
                </p>
              </div>
              <div className="flex gap-6">
                <a href={UserConfig.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} className={"dark:text-primary text-secondary"} />
                </a>
                <a href={UserConfig.socials.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} className={"dark:text-primary text-secondary"} />
                </a>
                <a href={UserConfig.socials.twitter} target="_blank" rel="noopener noreferrer">
                  <FaXTwitter size={30} className={"dark:text-primary text-secondary"} />
                </a>
                <a href={UserConfig.socials.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} className={"dark:text-primary text-secondary"} />
                </a>
              </div>
            </div>
            <p className="max-md:absolute max-md:bottom-0 max-md:mb-16 font-medium dark:text-brandOffwhite">&copy; 2024 {UserConfig.firstname} {UserConfig.lastname}</p>
          </div>
          <div className="md:w-1/2 max-md:mb-32 md:mt-10">
            <form action="submit" method="post" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-medium dark:text-brandOffwhite">Name</label>
                  <input type="text" name="name" id="name" placeholder="John Doe" className="md:text-lg py-3 px-4 dark:bg-black border-none rounded-lg"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-medium dark:text-brandOffwhite">Email</label>
                  <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" className="md:text-lg py-3 px-4 dark:bg-black border-none rounded-lg"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="font-medium dark:text-brandOffwhite">Subject</label>
                  <input type="text" name="subject" id="subject" placeholder="..." className="md:text-lg py-3 px-4 dark:bg-black border-none rounded-lg"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-medium dark:text-brandOffwhite">Message</label>
                  <textarea id="message" name="message" placeholder="..." className="min-h-40 md:text-lg py-3 px-4 dark:bg-black border-none rounded-lg"></textarea>
                </div>
              </div>
              <button type="submit" className="border py-5 px-10 rounded-full dark:text-black text-white dark:bg-primary bg-secondary font-bold uppercase cursor-pointer">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LetsConnect
