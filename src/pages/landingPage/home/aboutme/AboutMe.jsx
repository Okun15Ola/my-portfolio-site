import React from 'react'

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
              <h1 className="font-medium text-lg md:text-3xl">I am a front-end developer based in Sydney. Has 
                Mechanical Engineering background. </h1>
              <p className="dark:text-brandOffwhite md:text-lg">I am a front-end developer based in Sydney looking for 
                exciting opportunities. Has Mechanical Engineering 
                background. Likes to focus on accessibility when 
                developing. Passionate and curious about solving 
                problems. Currently, I’m exploring Reactjs, Webflow and a bit of 
                Designing. While I am not programming, I enjoy playing football, 
                photography and playing Valorant. Learning more to improve skill.
              </p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
