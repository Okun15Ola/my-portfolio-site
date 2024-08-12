import image1 from "../assets/static/Portfolio_images/1.png";
import image2 from "../assets/static/Portfolio_images/2.png";
import image3 from "../assets/static/Portfolio_images/3.png";
import image4 from "../assets/static/Portfolio_images/4.png";
import image5 from "../assets/static/Portfolio_images/5.png";
import image6 from "../assets/static/Portfolio_images/6.png";
import portraitimg from "../assets/static/Portfolio_images/8.png";
import aboutimg from "../assets/static/Portfolio_images/7.png";

export const UserConfig = {
    firstname: "Obafisayo",
    lastname: "Abimbola",
    email: "abimbolaobafisayo@gmail.com",
    bio: "Full stack software engineer (MERN) experienced in working with teams, seeking a new challenge to build novel B2C products",
    // create an accesskey on web3forms https://web3forms.com/
    accesskey: "65833fa4-e6eb-478d-88db-c1c5f6658b1f",
    resumeLink: "https://drive.google.com/file/d/1Q2CVdUm8WoQWr4mCBJjdi2DRrDJFs0Nk/view?usp=sharing",
    portraitimg: portraitimg,
    about: {
        img2: aboutimg,
        title: "I am a front-end developer based in Nigeria with a background in Software Engineering.",
        des: `I am a front-end developer based in Nigeria looking for exciting opportunities. I have a Software Engineering background. 
            I focus on accessibility and responsiveness when developing. I am passionate and curious about solving problems. Currently, 
            I'm exploring Typescript, Webflow, and a bit of Designing. When I'm not programming, 
            I enjoy watching anime, content creation, and playing the Violin. I'm always learning to improve my skills.`
    },
    capabilities: {
        title: "I am always looking to add more skills. Learning everyday to add to my skill set and be a better developer.",
        stack: ["reactjs", "typescript", "Nodejs", "Expressjs", "mysql", "mongodb", "javascript", "jquery", "python", "flask", "accessibility", "figma", "tailwindcss", "html", "css", "c", "DSA"]
    },
    experience: [
        {
            id: 1,
            title: "Freelance Developer",
            startdate: "June 2023",
            enddate: "May 2024",
            company: "",
            des: `Worked as a freelance developer, taking on various projects and clients.
                Gained experience in building web applications, working with clients, and delivering quality work on tight deadlines.
                Utilized a range of technologies and skills, including React, TypeScript, Node.js, Express.js and MySQL, to solve complex problems for clients.
                Demonstrated the ability to work independently and as part of a team to achieve project goals.`
        },
        {
            id: 2,
            title: "Front-End Intern",
            startdate: "June 2024",
            enddate: "Present",
            company: "Codeguru Hackademy",
            des: `Joined Codeguru Hackademy as a front-end intern, where I'm currently gaining hands-on experience in web development.
                Collaborating with cross-functional teams to build responsive and accessible web applications.
                Leveraging technologies like React, TypeScript, and CSS frameworks to deliver high-quality user interfaces.
                Continuously learning and expanding my skills in front-end development, including accessibility, performance optimization, and design implementation.`
        },
    ],
    projects: [
        {
            id: "figure",
            img: image1,
            title: "Full website clone of the old FIGURE.AI website",
            des: `Implemented all the features of the old figure.ai website using react.js, 
                styled components. Implemented accesiblity to it's peak and added responsiveness`,
            year: "2023",
            role: "Front-end Developer",
            liveDemo: "https://figure-ai.netlify.app/",
            githublink: "https://github.com/obafisayo/figure-app",
            type: "Project"
        },
        {
            id: "exclusive-ecom",
            img: image2,
            title: "Full E-commerce Website",
            des: `Successfully crafted an engaging E-commerce site, with a product page that features a dynamic lightbox gallery and seamless cart functionality, 
                showcasing proficiency in JavaScript development.`,
            year: "2024",
            role: "Front-end Developer",
            liveDemo: "https://exclusive-ecom-site.netlify.app/",
            githublink: "https://github.com/obafisayo/e-commerce-site",
            type: "Challenge"
        },
        {
            id: "piggyvest",
            img: image3,
            title: "Web clone of the official piggyvest site",
            des: `Mastered the art of styled components to fully showcase all the features of the official piggyvesst website.
                Full utilisation of Reactjs libraries to implement seamless functionalities`,
            year: "2024",
            role: "Front-end Developer",
            liveDemo: "https://my-piggyvest.netlify.app/",
            githublink: "https://github.com/obafisayo/piggyvest",
            type: "Project"
        },
        {
            id: "organogram",
            img: image4,
            title: "Workspace website for a company",
            des: `Mastered CSS Grid complexities in building an innovative workspace homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.`,
            client: "Organogram",
            year: "2023",
            role: "Front-end Developer",
            liveDemo: "https://organogramm.netlify.app/",
            type: "Conceptual work"
        },
        {
            id: "onekeybags",
            img: image5,
            title: "Simple E-com landing page",
            des: `Developed the web landing page, of an ecommerce site using React, tailwind css, 
                Implemented a third party realtime messaging system to connect clients to a customer service (Tawkto)`,
            year: "2023",
            role: "Front-end Developer",
            liveDemo: "https://onekeybags.netlify.app/",
            githublink: "https://github.com/obafisayo/onekeybags-frontend"
        },
        {
            id: "revie",
            img: image6,
            title: "Simple reviews site",
            des: `Implemented the latest cloudinary image
                hosting service to host mages and videos from the front end before sending it to a backend server.
                Implemented a simple backend written in Nodejs and expressjs to create api endpoints deployed to digital ocean`,
            client: "Codeguru Hackademy",
            year: "2024",
            role: "back-end Developer",
            liveDemo: "https://revie.netlify.app/",
            type: "Conceptual work"
        },
    ],
    socials: {
        linkedin: "https://www.linkedin.com/in/obafisayo-abimbola-040689212/",
        github: "https://github.com/obafisayo",
        twitter: "https://x.com/obafisayo_og",
        instagram: "https://www.instagram.com/shirtless_coder/"
    }
}
