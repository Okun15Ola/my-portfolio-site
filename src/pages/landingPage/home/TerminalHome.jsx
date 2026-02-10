import React from "react";
import { Link } from "react-router-dom";
import { UserConfig } from "../../../config/userConfig";
import { ABOUT, PROJECTS, SKILLS, CONTACT } from "../../../routes/RoutesConstant";

const NAV_COMMANDS = [
  { path: ABOUT, label: "ls /about" },
  { path: PROJECTS, label: "ls /projects" },
  { path: SKILLS, label: "ls /skills" },
  { path: CONTACT, label: "ls /contact" },
];

export default function TerminalHome() {
  const displayName = UserConfig.terminalDisplayName || "DEV_R00T";
  const role = "Full-Stack Engineer";

  return (
    <div className="crt-container flex flex-col p-8 md:p-12 selection:bg-primary selection:text-background-dark">
      <div className="crt-overlay" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="screen-curve" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      {/* BIOS Header */}
      <header className="mb-12 opacity-80 uppercase tracking-widest text-xs md:text-sm relative z-10">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <p>BIOS Version 2.0.24-LTS (Build 8802)</p>
            <p>Copyright (C) 2022-2026 DEVSYSTEMS Inc.</p>
            <p className="mt-2">CPU: 8086-COMPATIBLE VIRTUAL CORE @ 4.77MHz</p>
            <p>MEMORY TEST: 655360B OK</p>
          </div>
          <div className="text-right">
            <p>SYSTEM STATUS: NOMINAL</p>
            <p>SECURE BOOT: ENABLED</p>
          </div>
        </div>
        <div className="mt-4 border-b border-primary/20 pb-2">
          <p>Mounting /root/dev_portfolio...</p>
          <p>Loading kernel modules... DONE</p>
          <p>Initializing user interface... OK</p>
        </div>
      </header>

      {/* Main Terminal Stage */}
      <main className="flex-grow flex flex-col justify-center items-center text-center relative z-10">
        <div className="max-w-4xl w-full">
          {/* Typewriter Identity */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4 tracking-tighter glitch-text">
              Dev Name: <span className="text-primary/90">{displayName}</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 font-light tracking-wide italic">
              Role: {role}
              <span className="cursor-blink" aria-hidden="true" />
            </p>
          </div>

          {/* Navigation Commands */}
          <nav className="flex flex-col items-center gap-0" aria-label="Terminal navigation">
            <div className="w-full max-w-xs text-left">
              {NAV_COMMANDS.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="group block py-2 px-4 border border-transparent hover:border-primary/50 transition-all duration-150"
                >
                  <span className="text-primary/40 group-hover:text-primary transition-colors">
                    &gt; {label}
                  </span>
                  <span className="hidden group-hover:inline ml-2 text-[10px] uppercase opacity-60 tracking-tighter">
                    [execute]
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </main>

      {/* Bottom Status Bar */}
      <footer className="mt-12 flex justify-between items-end border-t border-primary/20 pt-4 text-[10px] md:text-xs uppercase tracking-widest opacity-60 relative z-10 flex-wrap gap-4">
        <div className="flex gap-8 flex-wrap">
          <div>
            <p className="text-primary/40">Network</p>
            <p>Connected: SSH_V2</p>
          </div>
          <div>
            <p className="text-primary/40">Location</p>
            <p>Node_01: Ibadan_NG</p>
          </div>
        </div>
        <div className="text-right">
          <p>F1: HELP | F2: SHELL | F10: POWER_OFF</p>
          <p className="mt-1">PORTFOLIO_OS V.2.0.24_BETA</p>
        </div>
      </footer>

      {/* Decorative circuit board element - optional local asset or inline SVG later */}
      <div
        className="absolute bottom-8 right-8 w-32 h-32 opacity-10 pointer-events-none grayscale invert border border-primary p-1 hidden md:block"
        aria-hidden="true"
      >
        <div className="w-full h-full bg-primary/20 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}
