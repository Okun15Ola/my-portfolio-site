import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserConfig } from "../../../config/userConfig";
import { ABOUT, PROJECTS, SKILLS, CONTACT, HOME } from "../../../routes/RoutesConstant";
import Swal from "sweetalert2";

function formatTime() {
  return new Date().toISOString().slice(11, 19) + "_GMT";
}

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const { socials } = UserConfig;
  const linkedinUrl = socials?.linkedin?.startsWith("http") ? socials.linkedin : `https://${socials?.linkedin || ""}`;
  const githubUrl = socials?.github || "#";
  const emailUrl = `mailto:${UserConfig.email || ""}`;

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    formData.append("access_key", UserConfig.accesskey);
    const json = JSON.stringify(Object.fromEntries(formData));
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      }).then((r) => r.json());
      if (res.success) {
        Swal.fire({ title: "Thank You!", text: `Message sent to ${UserConfig.firstname}`, icon: "success" });
        e.target.reset();
      }
    } finally {
      setIsLoading(false);
    }
  };

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
                  <li className="flex justify-between">
                    <Link to={SKILLS} className="hover:underline">0x003 - Skills</Link>
                    <span className="text-amber-primary">[OK]</span>
                  </li>
                  <li className="flex justify-between">
                    <Link to={PROJECTS} className="hover:underline">0x004 - Projects</Link>
                    <span className="text-amber-primary">[OK]</span>
                  </li>
                  <li className="flex justify-between text-black bg-amber-primary px-1">
                    <span>0x005 - Contact</span>
                    <span>[BUSY]</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-9 flex flex-col gap-4">
            <section className="terminal-border-amber p-6 bg-amber-primary/5 flex-grow">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-icons text-xl text-amber-primary" aria-hidden>contact_mail</span>
                <h2 className="text-lg font-bold tracking-tighter uppercase text-amber-primary">/var/spool/contact</h2>
              </div>
              <p className="text-sm text-amber-primary/80 mb-6">
                &gt; Say hello at <a href={emailUrl} className="underline hover:text-amber-primary">{" "}{UserConfig.email}</a><br />
                &gt; Resume: <a href={UserConfig.resumeLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-primary">LINK</a>
              </p>
              <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-amber-primary/80 mb-1">NAME:</label>
                  <input id="name" name="name" required type="text" placeholder="John_Doe" className="w-full bg-black border border-amber-primary/40 px-3 py-2 text-amber-primary font-mono text-sm placeholder:text-amber-primary/30 focus:outline-none focus:border-amber-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-amber-primary/80 mb-1">EMAIL:</label>
                  <input id="email" name="email" required type="email" placeholder="user@host.local" className="w-full bg-black border border-amber-primary/40 px-3 py-2 text-amber-primary font-mono text-sm placeholder:text-amber-primary/30 focus:outline-none focus:border-amber-primary" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-amber-primary/80 mb-1">SUBJECT:</label>
                  <input id="subject" name="subject" required type="text" placeholder="..." className="w-full bg-black border border-amber-primary/40 px-3 py-2 text-amber-primary font-mono text-sm placeholder:text-amber-primary/30 focus:outline-none focus:border-amber-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-amber-primary/80 mb-1">MESSAGE:</label>
                  <textarea id="message" name="message" required rows={5} placeholder="..." className="w-full bg-black border border-amber-primary/40 px-3 py-2 text-amber-primary font-mono text-sm placeholder:text-amber-primary/30 focus:outline-none focus:border-amber-primary resize-y" />
                </div>
                <button type="submit" disabled={isLoading} className="border border-amber-primary px-4 py-2 text-amber-primary font-mono text-sm uppercase hover:bg-amber-primary hover:text-black transition-colors disabled:opacity-50">
                  {isLoading ? "SENDING..." : "SUBMIT_MESSAGE"}
                </button>
              </form>
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
