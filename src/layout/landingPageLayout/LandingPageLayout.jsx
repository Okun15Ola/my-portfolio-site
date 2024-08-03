import React from 'react';
import { Outlet } from "react-router-dom";
// import Navbar from '../../components/navbar/Navbar';
import LetsConnect from '../../components/letsconnect/LetsConnect';

function LandingPageLayout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <LetsConnect />
        </div>
    );
}

export default LandingPageLayout;