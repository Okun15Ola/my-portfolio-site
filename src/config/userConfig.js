import portraitimg from "../assets/static/img/potrait.png"
import image1 from "../assets/static/img/work.png"
import image2 from "../assets/static/img/project2.png";
import image3 from "../assets/static/img/project3.png"
import aboutimg1 from "../assets/static/img/aboutimage.png"
import aboutimg2 from "../assets/static/img/coolimg.png"

export const UserConfig = {
    firstname: "Obafisayo",
    lastname: "Abimbola",
    email: "abimbolaobafisayo@gmail.com",
    bio: "A Sydney based front-end developer passionate about building accessible and user friendly websites.",
    // create an accesskey on web3forms https://web3forms.com/
    accesskey: "65833fa4-e6eb-478d-88db-c1c5f6658b1f",
    resumeLink: "https://drive.google.com/file/d/1Q2CVdUm8WoQWr4mCBJjdi2DRrDJFs0Nk/view?usp=sharing",
    portraitimg: portraitimg,
    about: {
        img1: aboutimg1,
        img2: aboutimg2,
        title: "I am a front-end developer based in Sydney. Has Mechanical Engineering background.",
        des: "I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill."
    },
    capabilities: {
        title: "I am always looking to add more skills. Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.",
        stack: ["html", "css", "javascript", "jquery", "accessibility", "figma", "tailwindcss"]
    },
    experience: [
        {
            id: 1,
            title: "Front-End Intern",
            startdate: "Sep 2023",
            enddate: "Nov 2023",
            company: "Roos Tech",
            des: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            id: 2,
            title: "Freelance Developer",
            startdate: "Nov 2023",
            enddate: "Present",
            company: "",
            des: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
    ],
    projects: [
        {
            img: image1,
            title: "Promotional landing page for our favorite show",
            des: "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
            year: "2023",
            role: "Front-end Developer",
            liveDemo: "",
            githublink: "",
            type: "Conceptual Work"
        },
        {
            img: image2,
            title: "Blog site for World News",
            des: "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.",
            client: "World News",
            year: "2022",
            role: "Front-end Developer",
            liveDemo: ""
        },
        {
            img: image3,
            title: "E-commerce product page",
            des: "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
            year: "2022",
            role: "Front-end Developer",
            liveDemo: "",
            githublink: "",
            type: "Challenge"
        },
    ],
    socials: {
        linkedin: "www.linkedin.com/in/obafisayo-abimbola-040689212",
        github: "https://github.com/obafisayo",
        twitter: "https://x.com/obafisayo_og",
        instagram: "https://www.instagram.com/shirtless_coder/"
    }
}