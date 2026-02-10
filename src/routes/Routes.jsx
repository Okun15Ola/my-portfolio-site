import { useRoutes } from "react-router-dom";
import { ABOUT, HOME, NOTFOUND, PROJECTS, SKILLS, CONTACT } from "./RoutesConstant";
import LandingPageLayout from "../layout/landingPageLayout/LandingPageLayout";
import Home from "../pages/landingPage/home/Home";
import About from "../pages/landingPage/about/About";
import Projects from "../pages/landingPage/projects/Projects";
import Skills from "../pages/landingPage/skills/Skills";
import Contact from "../pages/landingPage/contact/Contact";
import NotFound from "../pages/landingPage/NotFound";

export default function Router() {
  return useRoutes([
    {
      path: HOME,
      element: <LandingPageLayout />,
      children: [
        { path: HOME, element: <Home /> },
        { path: ABOUT, element: <About /> },
        { path: PROJECTS, element: <Projects /> },
        { path: SKILLS, element: <Skills /> },
        { path: CONTACT, element: <Contact /> },
        { path: NOTFOUND, element: <NotFound /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
}
