import { useRoutes } from "react-router-dom"
import { ABOUT, HOME, NOTFOUND } from "./RoutesConstant"
import LandingPageLayout from "../layout/landingPageLayout/LandingPageLayout"
import Home from "../pages/landingPage/home/Home"
import About from "../pages/landingPage/about/About"
import NotFound from "../pages/landingPage/NotFound"

export default function Router() {
    return useRoutes([
        {
            path: HOME,
            element: <LandingPageLayout />,
            children: [
                {
                    path: HOME,
                    element: <Home />
                },
                {
                    path: ABOUT,
                    element: <About />
                },
                {
                    path: NOTFOUND,
                    element: <NotFound />
                },
            ]
        },
        { path: '*', element: <NotFound /> }
    ])
}
