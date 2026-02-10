import React from "react";
import { Link } from "react-router-dom";
import { UserConfig } from "../../../config/userConfig";
import { HOME, ABOUT, SKILLS, CONTACT } from "../../../routes/RoutesConstant";

/** Format project title as system filename (e.g. "Full E-commerce Website" -> "Ecommerce_Website.sys") */
function toSystemFileName(title) {
  const slug = title
    .replace(/[^a-z0-9\s]/gi, "")
    .replace(/\s+/g, "_")
    .slice(0, 24);
  return `${slug}.sys`;
}

/** Format year as last modified (e.g. "2024" -> "12-OCT-2024") */
function toLastModified(year) {
  if (!year) return "ERR_UNREADABLE";
  const m = { "2023": "12-DEC-2023", "2024": "12-OCT-2024", "2025": "04-JAN-2025" };
  return m[year] || `01-JAN-${year}`;
}

function ProjectCard({ project, isHighlight }) {
  const fileName = toSystemFileName(project.title);
  const tags = project.tags || [project.role, project.type];
  const lastMod = toLastModified(project.year);
  const liveUrl = project.liveDemo || project.githublink || "#";

  return (
    <div
      className={`flex flex-col border-pixel bg-background-dark group hover:-translate-y-1 transition-transform relative ${isHighlight ? "opacity-80" : ""}`}
    >
      {isHighlight && (
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white animate-pulse" aria-hidden />
      )}
      <div className="window-header h-8 flex items-center justify-between px-2 border-b-2 border-primary">
        <span className="bg-background-dark px-2 text-[10px] font-bold tracking-widest uppercase">
          {fileName}
        </span>
        <div className="flex gap-1">
          <span className="w-4 h-4 bg-background-dark border border-primary flex items-center justify-center text-[8px]">_</span>
          <span className="w-4 h-4 bg-background-dark border border-primary flex items-center justify-center text-[8px]">X</span>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="aspect-video bg-primary/10 border border-primary/20 relative overflow-hidden">
          <img
            src={project.img}
            alt=""
            className="w-full h-full object-cover grayscale contrast-125 brightness-75 opacity-90 mix-blend-screen"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-primary/60 border-b border-primary/10 pb-1">
            <span className={isHighlight ? "glitch-jitter" : ""}>TYPE: {project.type?.toUpperCase() || "EXECUTABLE"}</span>
            <span>SIZE: 44.2 MB</span>
          </div>
          <p className="text-sm leading-relaxed text-primary/90">{project.des}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {(Array.isArray(tags) ? tags : [tags]).slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className={`text-[10px] border border-primary px-2 py-0.5 uppercase ${i === 0 ? "bg-primary text-black font-bold" : ""}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto border-t border-primary/20 p-2 flex justify-between items-center">
        <span className="text-[9px] text-primary/40 italic">Last Modified: {lastMod}</span>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] uppercase font-bold hover:bg-white hover:text-black px-2 transition-colors border border-transparent hover:border-white"
        >
          Execute_Run
        </a>
      </div>
    </div>
  );
}

function BrokenCard() {
  return (
    <div className="flex flex-col border-pixel bg-background-dark opacity-80 group hover:opacity-100 transition-all border-dashed">
      <div className="window-header h-8 flex items-center justify-between px-2 border-b-2 border-primary grayscale">
        <span className="bg-background-dark px-2 text-[10px] font-bold tracking-widest uppercase">
          System_Patch_004.dmg
        </span>
        <div className="flex gap-1">
          <span className="w-4 h-4 bg-background-dark border border-primary flex items-center justify-center text-[8px]">X</span>
        </div>
      </div>
      <div className="p-8 flex flex-col items-center justify-center text-center gap-4">
        <span className="material-icons text-4xl text-primary" aria-hidden>report_problem</span>
        <div>
          <h3 className="text-sm font-bold uppercase glitch-text">Memory Leak Detected</h3>
          <p className="text-[10px] text-primary/60 uppercase max-w-[200px] mt-2 mx-auto">
            The specified project module has been quarantined due to critical dependency failure.
          </p>
        </div>
        <button
          type="button"
          className="text-[10px] border border-primary px-4 py-1 uppercase hover:bg-primary hover:text-black transition-all"
        >
          Re-Index
        </button>
      </div>
    </div>
  );
}

function ConsoleCard() {
  const projects = UserConfig.projects || [];
  return (
    <div className="flex flex-col border-pixel bg-black col-span-1 md:col-span-2">
      <div className="window-header h-8 flex items-center justify-between px-2 border-b-2 border-primary">
        <span className="bg-black px-2 text-[10px] font-bold tracking-widest uppercase">
          System_Console_Out
        </span>
        <div className="flex gap-1">
          <span className="w-4 h-4 bg-black border border-primary flex items-center justify-center text-[8px]">X</span>
        </div>
      </div>
      <div className="p-4 font-mono text-[11px] leading-tight text-primary space-y-1">
        <p>&gt; FETCHING PROJECTS FROM CLUSTER_B...</p>
        {projects.map((p, i) => (
          <p key={p.id}>&gt; [OK] {toSystemFileName(p.title)} (200 OK)</p>
        ))}
        <p>&gt; ACCESSING KERNEL MEMORY... <span className="text-white">SUCCESS</span></p>
        <p className="terminal-cursor text-white pt-2">&gt; _</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = UserConfig.projects || [];
  const now = new Date();
  const timeStr = now.toISOString().slice(11, 19) + " GMT";

  return (
    <>
      <div className="scanlines-fixed" aria-hidden />
      <div className="crt-overlay-fixed" aria-hidden />
      <main className="min-h-screen bg-background-dark p-4 md:p-8 flex flex-col gap-8 relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-primary/20 pb-4 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-icons text-sm" aria-hidden>terminal</span>
              <span className="text-xs uppercase tracking-tighter">
                C:\PORTFOLIO\PROJECTS\ROOT_DIR
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter uppercase glitch-text">
              System_Directory.exe
            </h1>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="text-[10px] text-primary/60 uppercase">System Status: NOMINAL</span>
            <span className="text-sm font-mono terminal-cursor">0x4F2A_DECRYPTING</span>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              isHighlight={index === 1}
            />
          ))}
          <BrokenCard />
          <ConsoleCard />
        </section>

        <footer className="mt-auto border-t-2 border-primary/20 pt-4 flex flex-wrap justify-between items-center gap-4 text-[10px] tracking-widest text-primary/60 uppercase">
          <div className="flex gap-6 flex-wrap items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden />
              <span>Link_Established</span>
            </div>
            <div>CPU_LOAD: 12.4%</div>
            <div>RAM_USAGE: 4096MB/16384MB</div>
            <div className="flex gap-2 flex-wrap">
              <Link to={HOME} className="hover:text-primary">ROOT</Link>
              <span>|</span>
              <Link to={ABOUT} className="hover:text-primary">ABOUT</Link>
              <span>|</span>
              <Link to={SKILLS} className="hover:text-primary">SKILLS</Link>
              <span>|</span>
              <Link to={CONTACT} className="hover:text-primary">CONTACT</Link>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span>0x00FF88_SYSTEM_CLOCK</span>
            <span className="bg-primary/20 text-white px-2 py-0.5">{timeStr}</span>
          </div>
        </footer>
      </main>

      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
    </>
  );
}
