import React, { useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { UserConfig } from '../../config/userConfig';
import Swal from 'sweetalert2'

const LetsConnect = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", UserConfig.accesskey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    setIsLoading(false);

    if (res.success) {
      Swal.fire({
        title: "Thank You!",
        text: "Message sent to Obafisayo",
        icon: "success"
      });
    }
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
            <form action="submit" method="post" onSubmit={onSubmit}>
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-medium dark:text-brandOffwhite">Name</label>
                  <input required type="text" name="name" id="name" placeholder="John Doe" className="md:text-lg py-3 px-4 dark:bg-black border-none rounded-lg"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-medium dark:text-brandOffwhite">Email</label>
                  <input required type="email" name="email" id="email" placeholder="johndoe@gmail.com" className="md:text-lg py-3 px-4 dark:bg-black border-none rounded-lg"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="font-medium dark:text-brandOffwhite">Subject</label>
                  <input required type="text" name="subject" id="subject" placeholder="..." className="md:text-lg py-3 px-4 dark:bg-black border-none rounded-lg"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-medium dark:text-brandOffwhite">Message</label>
                  <textarea required id="message" name="message" placeholder="..." className="min-h-40 md:text-lg py-3 px-4 dark:bg-black border-none rounded-lg"></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="border py-5 px-10 rounded-full dark:text-black text-white dark:bg-primary bg-secondary font-bold uppercase cursor-pointer"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                    <span className="ml-2">sending...</span>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LetsConnect;