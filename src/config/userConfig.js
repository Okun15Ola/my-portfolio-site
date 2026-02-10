
import image2 from "../assets/static/Portfolio_images/2.png";
import mine2 from '../assets/img/mine2.jpg'
import mine from '../assets/img/mine.jpg'
import work2 from "../assets/static/Portfolio_images/work2 (2).jpg";
import olm from "../assets/img/olm.png";

export const UserConfig = {
    firstname: "Okunola",
    lastname: "Olubanjo",
    /** Display name for terminal/BIOS hero (e.g. ALEX_R00T) */
    terminalDisplayName: "OLUBANJO_R00T",
    email: "okunolaolubanjo@gmail.com",
    bio: "Resourceful and detail-oriented full-stack web developer with over 3 years of hands-on experience building scalable and modern web applications. Proficient in both front-end and backend development, with a strong command of modern technologies, frameworks, and best practices. Adept at delivering high-performance solutions, collaborating across teams, and driving projects from concept to deployment.",
    // create an accesskey on web3forms https://web3forms.com/
    accesskey: "5430673d-f9e8-478b-bc3a-b27b342479a1",
    resumeLink: "https://docs.google.com/document/d/1ZeTyVQ-i3yaFY_gnVggoZy59QZ4bjFo_/edit?usp=drive_link&ouid=110800062833918661055&rtpof=true&sd=true",
    mine: mine,
    about: {
        img2: mine2,
        title: "Resourceful full-stack web developer with over 3 years of experience building scalable, modern web applications.",
        des: `Resourceful and detail-oriented full-stack web developer with over 3 years of hands-on experience building scalable and modern web applications. Proficient in both front-end and backend development, with a strong command of modern technologies, frameworks, and best practices. Adept at delivering high-performance solutions, collaborating across teams, and driving projects from concept to deployment.`
    },
    capabilities: {
        title: "I am always looking to add more skills. Learning everyday to add to my skill set and be a better developer.",
        stack: ["reactjs", "typescript", "Nodejs", "Expressjs", "mongodb", "javascript", "accessibility", "figma",  "tailwindcss", "html", "css", "DSA"]
    },
    experience: [
        {
            id: 1,
            title: "Frontend Developer",
            startdate: "2023",
            enddate: "2024",
            company: "CodeGuru Hackademy",
            des: `Worked as a Frontend Developer at CodeGuru Hackademy (Nigeria), responsible for building real-world user interfaces and developing scalable, production-ready web applications.`
        },
        {
            id: 2,
            title: "Full-Stack Developer",
            startdate: "2023",
            enddate: "2024",
            company: "Learning Mind Academy",
            des: `Worked as a Full-Stack Engineer at Learning Mind Academy (USA), responsible for developing complex web applications and responsive websites to support the academy's digital infrastructure and learning experience.`
        },
        {
            id: 3,
            title: "Front-End Engineer",
            startdate: "2023",
            enddate: "2024",
            company: "Brain Health / OHealth",
            des: `Worked as a Frontend Engineer at Brain Health/OHealth Company, responsible for developing user interfaces for their Electronic Medical Records (EMR) system and integrating APIs for seamless data interaction.`
        },
        {
            id: 4,
            title: "Project Manager / Lead Developer",
            startdate: "2025",
            enddate: "Present",
            company: "IMO Tech Solution",
            des: `Worked as a project manager and lead developer at IMO Tech Solution, where we built a telehealth application with an integrated EMR system. Technologies included React Native, AWS, SQL, and other modern technologies.`
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
            type: "Challenge",
            tags: ["React", "JavaScript", "Tailwind"]
        },
        {
            id: "schoolportal",
            img: work2,
            title: "Full Functional School Portal",
            des: `Successfully developed a dynamic and user-friendly school portal system featuring student registration, course enrollment, grade tracking, and secure login authentication. Integrated admin and teacher dashboards for managing classes, uploading results, and monitoring student performance. Demonstrated advanced skills in full-stack web development using React.js, TypeScript, and Supabase for a structured database system, ensuring efficient data handling and security.`,
            year: "2025",
            role: "Front-end Developer",
            liveDemo: "https://npk-topaz.vercel.app/",
            githublink: "https://github.com/Okun15Ola/npk",
            type: "Project",
            tags: ["React", "TypeScript", "Supabase"]
        },
        {
            id: "OLM Fragrance",
            img: olm,
            title: "OLM Fragrance",
            des: `Developed and deployed a production-ready perfume e-commerce platform enabling users to browse fragrances, view product details, add items to cart, and complete secure purchases. Implemented authentication, dynamic product rendering, and responsive interfaces optimized for multiple devices. Built database and backend services with Supabase for product management and order handling, while using Next.js, TypeScript, and TailwindCSS to deliver a fast, scalable, and user-focused shopping experience that supports real business operations.`,
            year: "2025",
            role: "Full-Stack Developer",
            liveDemo: "https://olmfragrance.com",
            githublink: "https://github.com/Okun15Ola/aroma-ascend",
            type: "Company Project",
            tags: ["NextJs", "TypeScript", "Supabase", "TailwindCSS"]
        },
    ],
    socials: {
        linkedin: "www.linkedin.com/in/okunola-olubanjo-964541361",
        github: "https://github.com/Okun15Ola",
        twitter: "https://x.com/OkunolaOlu11042",
        instagram: "https://www.instagram.com/okunolaolubanjoolamide?igsh=Z3RlMGhtOWZ3ZzVi"
    }
}
