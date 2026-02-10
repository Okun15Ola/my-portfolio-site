import React from "react";
import { Link } from "react-router-dom";
import { UserConfig } from "../../../config/userConfig";
import { ABOUT, PROJECTS, SKILLS, CONTACT, HOME } from "../../../routes/RoutesConstant";

function groupStack(stack) {
  const frontendKeys = ["react", "typescript", "javascript", "tailwind", "html", "css", "figma", "accessibility"];
  const backendKeys = ["node", "express", "dsa"];
  const databaseKeys = ["mongo", "sql", "redis", "postgres"];
  const toLabel = (s) => String(s).replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase().replace(/\s/g, "_");
  const match = (item, keys) => keys.some((k) => String(item).toLowerCase().includes(k));
  const list = stack || [];
  return {
    frontend: list.filter((s) => match(s, frontendKeys)).map(toLabel),
    backend: list.filter((s) => match(s, backendKeys)).map(toLabel),
    database: list.filter((s) => match(s, databaseKeys)).map(toLabel),
  };
}

function formatTime() {
  return new Date().toISOString().slice(11, 19) + "_GMT";
}

export default function Skills() {
  const { capabilities, socials } = UserConfig;
  const grouped = groupStack(capabilities?.stack || []);
  const linkedinUrl = socials?.linkedin?.startsWith("http") ? socials.linkedin : `https://${socials?.linkedin || ""}`;
  const githubUrl = socials?.github || "#";
  const emailUrl = `mailto:${UserConfig.email || ""}`;

  return (
    <div className="min-h-screen bg-amber-body overflow-x-hidden">
      <div className="crt-overlay-amber" aria-hidden />
      <div className="scanline" aria-hidden />

      <div className="min-h-screen p-4 md:p-8 flex flex-col gap-4 flicker relative z-10">
        <header className="w-full terminal-border-amber p-3 flex flex-wrap justify-between items-center bg-amber-primary/5">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest glow-text-amber text-amber-primary">
              System Diagnostics: v0.42_STABLE
            </span>
            <span className="hidden md:inline text-[10px] text-amber-primary opacity-60">CPU_TEMP: 42°C</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-amber-primary animate-pulse" aria-hidden />
              <div className="w-2 h-2 bg-amber-primary/30" aria-hidden />
              <div className="w-2 h-2 bg-amber-primary/30" aria-hidden />
            </div>
            <span className="text-xs font-mono uppercase text-amber-primary">{formatTime()}</span>
          </div>
        </header>

        <main className="flex-grow grid grid-cols-12 gap-4">
          <aside className="col-span-12 md:col-span-3 flex flex-col gap-4">
            <div className="terminal-border-amber p-4 bg-amber-primary/5 h-full">
              <div className="mb-6">
                <h2 className="text-sm font-bold border-b border-amber-primary/40 pb-2 mb-4 uppercase tracking-tighter text-amber-primary">
                  Memory_Map
                </h2>
                <ul className="space-y-2 text-[11px] uppercase text-amber-primary opacity-80">
                  <li className="flex justify-between">
                    <Link to={HOME} className="hover:underline">0x000 - ROOT</Link>
                    <span className="text-amber-primary">[OK]</span>
                  </li>
                  <li className="flex justify-between">
                    <Link to={ABOUT} className="hover:underline">0x001 - About</Link>
                    <span className="text-amber-primary">[OK]</span>
                  </li>
                  <li className="flex justify-between">
                    <Link to={ABOUT} className="hover:underline">0x002 - Experience</Link>
                    <span className="text-amber-primary">[OK]</span>
                  </li>
                  <li className="flex justify-between text-black bg-amber-primary px-1">
                    <span>0x003 - Skills</span>
                    <span>[BUSY]</span>
                  </li>
                  <li className="flex justify-between">
                    <Link to={PROJECTS} className="hover:underline">0x004 - Projects</Link>
                    <span className="text-amber-primary">[OK]</span>
                  </li>
                  <li className="flex justify-between">
                    <Link to={CONTACT} className="hover:underline">0x005 - Contact</Link>
                    <span className="text-amber-primary">[OK]</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-9 flex flex-col gap-4">
            <section className="terminal-border-amber p-6 bg-amber-primary/5 flex-grow">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-icons text-xl text-amber-primary" aria-hidden>memory</span>
                <h2 className="text-lg font-bold tracking-tighter uppercase text-amber-primary">/usr/bin/skills</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-amber-primary/30">
                <div className="border-r border-b md:border-b-0 border-amber-primary/30 p-4 hover:bg-amber-primary/10 transition-colors">
                  <h3 className="text-xs font-bold mb-4 text-center border-b border-amber-primary/30 pb-2 text-amber-primary">[FRONTEND]</h3>
                  <ul className="text-[11px] space-y-2 font-mono text-amber-primary">
                    {(grouped.frontend.length ? grouped.frontend : ["REACT.JS", "TAILWIND_CSS", "TYPESCRIPT", "HTML_CSS"]).map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-primary flex-shrink-0" />
                        {item.replace(/_/g, " ")}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-r border-b md:border-b-0 border-amber-primary/30 p-4 hover:bg-amber-primary/10 transition-colors">
                  <h3 className="text-xs font-bold mb-4 text-center border-b border-amber-primary/30 pb-2 text-amber-primary">[BACKEND]</h3>
                  <ul className="text-[11px] space-y-2 font-mono text-amber-primary">
                    {(grouped.backend.length ? grouped.backend : ["NODE_RUNTIME", "EXPRESS"]).map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-primary flex-shrink-0" />
                        {item.replace(/_/g, " ")}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 hover:bg-amber-primary/10 transition-colors">
                  <h3 className="text-xs font-bold mb-4 text-center border-b border-amber-primary/30 pb-2 text-amber-primary">[DATABASE]</h3>
                  <ul className="text-[11px] space-y-2 font-mono text-amber-primary">
                    {(grouped.database.length ? grouped.database : ["MONGODB_ATLAS"]).map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-primary flex-shrink-0" />
                        {item.replace(/_/g, " ")}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer className="terminal-border-amber bg-black p-4 flex flex-col md:flex-row justify-between items-center gap-4 mt-auto">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <span className="text-amber-primary font-bold">ROOT@PORTFOLIO:~$</span>
            <span className="text-amber-primary opacity-80">FETCH_CONTACTS --ALL</span>
            <span className="w-2 h-4 bg-amber-primary cursor-blink ml-1 inline-block" aria-hidden />
          </div>
          <div className="flex gap-4 text-[10px] font-mono flex-wrap justify-center">
            <a className="border border-amber-primary/40 px-3 py-1 hover:bg-amber-primary hover:text-black transition-all text-amber-primary" href={githubUrl} target="_blank" rel="noopener noreferrer">RUN GITHUB.EXE</a>
            <a className="border border-amber-primary/40 px-3 py-1 hover:bg-amber-primary hover:text-black transition-all text-amber-primary" href={linkedinUrl} target="_blank" rel="noopener noreferrer">RUN LINKEDIN.EXE</a>
            <a className="border border-amber-primary/40 px-3 py-1 hover:bg-amber-primary hover:text-black transition-all text-amber-primary" href={emailUrl}>RUN EMAIL.EXE</a>
          </div>
        </footer>
      </div>

      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} aria-hidden />
      <div className="fixed top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-primary/40 pointer-events-none z-[60]" aria-hidden />
      <div className="fixed top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-primary/40 pointer-events-none z-[60]" aria-hidden />
      <div className="fixed bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-primary/40 pointer-events-none z-[60]" aria-hidden />
      <div className="fixed bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-primary/40 pointer-events-none z-[60]" aria-hidden />
    </div>
  );
}
