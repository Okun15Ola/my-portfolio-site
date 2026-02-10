import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import DarkMode from './darkmode/DarkMode';
import Hamburger from './hamburger/Hamburger';
import { HOME, ABOUT, PROJECTS, SKILLS, CONTACT } from '../../routes/RoutesConstant';
import { UserConfig } from '../../config/userConfig';

const HomeLinks = [
    { path: HOME, title: "Home" },
    { path: ABOUT, title: "About" },
    { path: PROJECTS, title: "Projects" },
    { path: SKILLS, title: "Skills" },
    { path: CONTACT, title: "Contact" },
]

const AboutLinks = [
    {
        path: "#about",
        title: "Resume"
    },
    {
        path: "#capabilities",
        title: "Capabilities"
    },
    {
        path: "#experience",
        title: "Experience"
    },
    {
        path: "#contact",
        title: "Contact"
    },
]

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const location = useLocation();

    const handleClicked = () => {
        setClicked(!clicked);
    }

    const scrollToDiv = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const links = location.pathname === ABOUT ? AboutLinks : HomeLinks;

    return (
        <section className="sticky top-0 bg-white dark:bg-black shadow-md z-50">
            <div className="container py-6 flex justify-between items-center font-interbold">
                <div className="flex justify-between items-center w-full mr-8">
                    <Link to={HOME} className="uppercase font-bold text-black dark:text-brandOffwhite font-bebas text-3xl">
                        {UserConfig.firstname} {UserConfig.lastname}
                    </Link>
                    <div>
                        <ul className={`sm:inline-flex sm:justify-center sm:items-center sm:gap-6
                            max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:w-1/2  max-sm:h-fit max-sm:flex max-sm:flex-col 
                            max-sm:px-8 max-sm:py-8 max-sm:gap-8 max-sm:bg-white dark:max-sm:bg-gray-950 
                            max-sm:transition-all max-sm:duration-300
                            ${clicked ? 'max-sm:translate-y-20 shadow-md z-10 max-sm:items-end' : 'max-sm:-translate-y-full -z-50 hidden'}`}>
                            {links.map((link, index) => (
                                <li key={index} className={`max-sm:transition-all max-sm:duration-300 ${clicked ? 'max-sm:self-start' : 'max-sm:opacity-0'}`}>
                                    {location.pathname === ABOUT && link.path.startsWith('#') ? (
                                        <a href={link.path} onClick={(e) => { e.preventDefault(); scrollToDiv(link.path.slice(1)); }} className="font-medium text-black dark:text-brandOffwhite">
                                            {link.title}
                                        </a>
                                    ) : (
                                        <Link to={link.path} className="font-medium text-black dark:text-brandOffwhite">
                                            {link.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <DarkMode />
                <Hamburger clicked={clicked} handler={handleClicked} />
            </div>
        </section>
    )
}

export default Navbar;
