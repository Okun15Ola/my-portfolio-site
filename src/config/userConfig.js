
import image2 from "../assets/static/Portfolio_images/2.png";
// import image3 from "../assets/static/Portfolio_images/3.png";
// import image4 from "../assets/static/Portfolio_images/4.png";
// import image6 from "../assets/static/Portfolio_images/6.png";
import mine2 from '../assets/img/mine2.jpg'
import mine from '../assets/img/mine.jpg'

export const UserConfig = {
    firstname: "Okunola",
    lastname: "Olubanjo",
    email: "okunolaolubanjo@gmail.com",
    bio: "Full stack software engineer (MERN) experienced in working with teams, adept at developing cutting-edge web solutions.",
    // create an accesskey on web3forms https://web3forms.com/
    accesskey: "5430673d-f9e8-478b-bc3a-b27b342479a1",
    resumeLink: "https://docs.google.com/document/d/1ZeTyVQ-i3yaFY_gnVggoZy59QZ4bjFo_/edit?usp=drive_link&ouid=110800062833918661055&rtpof=true&sd=true",
    mine: mine,
    about: {
        img2: mine2,
        title: "I am a front-end developer based in Nigeria with a background in Software Engineering.",
        des: `I am a front-end developer based in Nigeria looking for exciting opportunities. I have a Software Engineering background. 
            I focus on accessibility and responsiveness when developing. I am passionate and curious about solving problems. Currently, 
            I'm exploring, node.js, Typescript and a bit of designing. When I'm not programming, 
            I enjoy watching fantasy movies and helping out by giving motivation while communicating. I'm always learning to improve my skills.`
    },
    capabilities: {
        title: "I am always looking to add more skills. Learning everyday to add to my skill set and be a better developer.",
        stack: ["reactjs", "typescript", "Nodejs", "Expressjs", "mongodb", "javascript", "accessibility", "figma",  "tailwindcss", "html", "css", "DSA"]
    },
    experience: [
        {
            id: 1,
            title: "Frontend Developer",
            startdate: "December 2023",
            enddate: "April 2024",
            company: "",
            des: `Worked as a frontend developer and building complex web applications.
                Gained experience in building web applications, working with clients, and delivering quality work on tight deadlines.
                Utilized a range of technologies and skills, including React, TypeScript, Node.js, and Express.js to solve complex problems for clients.
                Demonstrated the ability to work independently and as part of a team to achieve project goals.`
        },
        {
            id: 2,
            title: "CEO",
            startdate: "January 2024",
            enddate: "Present",
            company: "Codeguru Hackademy",
            des: `Started Codeguru Hackademy as a frontend developer, where I'm currently gaining hands-on experience in web development.
                Collaborating with cross-functional teams to build responsive and accessible web applications.
                Leveraging technologies like React, TypeScript, and CSS frameworks to deliver high-quality user interfaces.
                Continuously learning and expanding my skills in front-end development, including accessibility, performance optimization, and design implementation.`
        },
    ],
    projects: [

        {
            id: "exclusive-ecom",
            img: image2,
            title: "Full E-commerce Website",
            des: `Successfully crafted an engaging E-commerce site, with a product page that features a dynamic lightbox gallery and seamless cart functionality, 
                showcasing proficiency in JavaScript development.`,
            year: "2024",
            role: "Front-end Developer",
            liveDemo: "https://e-commerce-site-two-inky.vercel.app/",
            githublink: "https://okun15ola.github.io/e-commerce-site/",
            type: "Challenge"
        },
        // {
        //     id: "piggyvest",
        //     img: image3,
        //     title: "Web clone of the official piggyvest site",
        //     des: `Mastered the art of styled components to fully showcase all the features of the official piggyvesst website.
        //         Full utilisation of Reactjs libraries to implement seamless functionalities`,
        //     year: "2024",
        //     role: "Front-end Developer",
        //     liveDemo: "https://my-piggyvest.netlify.app/",
        //     githublink: "https://github.com/obafisayo/piggyvest",
        //     type: "Project"
        // },
        // {
        //     id: "organogram",
        //     img: image4,
        //     title: "Workspace website for a company",
        //     des: `Mastered CSS Grid complexities in building an innovative workspace homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.`,
        //     client: "Organogram",
        //     year: "2023",
        //     role: "Front-end Developer",
        //     liveDemo: "https://organogramm.netlify.app/",
        //     type: "Conceptual work"
        // },
        // {
        //     id: "revie",
        //     img: image6,
        //     title: "Simple reviews site",
        //     des: `Implemented the latest cloudinary image
        //         hosting service to host mages and videos from the front end before sending it to a backend server.
        //         Implemented a simple backend written in Nodejs and expressjs to create api endpoints deployed to digital ocean`,
        //     client: "Codeguru Hackademy",
        //     year: "2024",
        //     role: "back-end Developer",
        //     liveDemo: "https://revie.netlify.app/",
        //     type: "Conceptual work"
        // },
    ],
    socials: {
        linkedin: "https://www.linkedin.com/in/okunola-olubanjo-0ab9b9264",
        github: "https://github.com/Okun15Ola",
        twitter: "https://x.com/OkunolaOlu11042",
        instagram: "https://www.instagram.com/okunolaolubanjoolamide?igsh=Z3RlMGhtOWZ3ZzVi"
    }
}
