"use client";

import { LOGO, POLYSLICER_LOGO, ICON_1, ICON_2, ICON_3, ICON_4, CONDUCTIVE_RESIN_IMG } from "@/components/imageAssets";

import { useState, useEffect, useRef } from "react";




// Hook: returns a ref — element fades up when it enters the viewport
function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, style: { opacity: 0, transform: "translateY(20px)", transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms` } as React.CSSProperties };
}


const APP_VIDEO_URL =
  "https://www.dropbox.com/scl/fi/4u4ol468fv9aaefcybo1s/PCB-ICON.mp4?rlkey=rvguvv3iyhu6b7laamts27ksu&raw=1";

const VIDEO_URL =
  "https://www.dropbox.com/scl/fi/hnfqm7sjxeievrcsb0u6d/HEADER-VIDEO.mp4?rlkey=a4nu6vdjbjl81sh3m075o9m6v&raw=1";


export default function PolysynthLandingPage() {
  const nav = [{ label: "Products", href: "/products" }, { label: "Applications", href: "#applications" }, { label: "Materials", href: "#materials" }, { label: "Software", href: "#software" }, { label: "Company", href: "#" }];

  const stats = [
    { label: "Materials Capability", value: "Up to 8 Materials*" },
    { label: "Starting Price", value: "$4,999+" },
    { label: "Core Innovation", value: "Layer Cleaning System (Patent Pending)" },
  ];

  const useCases = [
    { title: "Multi Material Prototyping", icon: ICON_1, description: "Compress design cycles from weeks to hours. Switch materials mid-print without post-processing or assembly." },
    { title: "Functional Conductive Parts", icon: ICON_4, description: "Print embedded circuits directly into your parts. No wiring, no soldering — functional electronics straight out of the machine." },
    { title: "Dental + Medical", icon: ICON_3, description: "Biocompatible resins with micron-level precision. Built for clinical workflows that demand accuracy and repeatability." },
    { title: "Product Development", icon: ICON_2, description: "From concept to market-ready prototype in one machine. Multi-material, multi-finish, zero compromises." },
  ];

  const materials = [
    { name: "Conductive Resin", description: "Electrically conductive. Print functional circuits and embedded electronics.", color: "#ffff00" },
    { name: "Clear Resin", description: "High-clarity output for optical components, lenses, and transparent enclosures.", color: "#ff0000" },
    { name: "Color Resin", description: "Vibrant, accurate color reproduction across multi-material prints.", color: "#f928ee" },
    { name: "High Detail Resin", description: "Ultra-fine resolution for intricate geometries, threads, and surface finish.", color: "#00ff12" },
  ];

  const [activeMaterial, setActiveMaterial] = useState(0);

  // Scroll reveal refs
  const conductiveHeadingRef = useRef<HTMLDivElement>(null);
  const revealConductive = useReveal(0);

  useEffect(() => {
    const container = conductiveHeadingRef.current;
    if (!container) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const spans = container.querySelectorAll<HTMLSpanElement>('.letter');
          spans.forEach((s, i) => {
            setTimeout(() => { s.style.opacity = '1'; s.style.transform = 'translateY(0)'; }, i * 28);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(container);
    return () => obs.disconnect();
  }, []);
  const revealAppsHeader = useReveal(0);
  const revealCard0 = useReveal(0);
  const revealCard1 = useReveal(100);
  const revealCard2 = useReveal(200);
  const revealCard3 = useReveal(300);
  const revealMaterials = useReveal(0);
  const revealMat0 = useReveal(0);
  const revealMat1 = useReveal(100);
  const revealMat2 = useReveal(200);
  const revealMat3 = useReveal(300);
  const revealSoftware = useReveal(0);
  const revealFooter = useReveal(0);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">

      {/* Navbar — fixed, frosted glass, sits above video */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-zinc-950/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold tracking-[0.25em]">POLYSYNTH</div>
          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-4">
            <button className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-white/40">
              Contact Sales
            </button>
            <button className="rounded-full bg-[#f7f727] px-4 py-2 text-sm font-medium text-[#1a1a00] transition hover:bg-[#f5f545]">
              Pre Order Now
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero — full viewport height, video starts at very top behind navbar */}
        <section className="relative flex min-h-screen items-end overflow-hidden pb-20">
          {/* Background video — covers entire section including behind navbar */}
          <video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            src={VIDEO_URL}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Bottom fade into page */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />

          {/* Hero content — pushed down so it clears the navbar */}
          <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6">
            <div className="mb-4 text-sm uppercase text-[#f7f727]" style={{opacity:0,transform:"translateY(10px)",animation:"fadeUp 0.6s ease 0.1s forwards"}}>
              Polysynth P1 Printer
            </div>
            <h1 className="max-w-3xl text-6xl font-semibold leading-tight md:text-7xl" style={{opacity:0,transform:"translateY(16px)",animation:"fadeUp 0.7s ease 0.25s forwards"}}>
              The first{" "}
              <span className="text-[#f7f727]">multi-material</span> resin
              printer.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-300" style={{opacity:0,transform:"translateY(12px)",animation:"fadeUp 0.6s ease 0.45s forwards"}}>
              Polysynth 1 introduces a new category of 3D printing—combining
              multiple materials in a single print with a proprietary vat
              cleaning system that resets between layers for cleaner transitions
              and higher fidelity output.
            </p>

            <div className="mt-8 flex gap-4" style={{opacity:0,transform:"translateY(8px)",animation:"fadeUp 0.6s ease 0.6s forwards"}}>
              <button className="rounded-full bg-[#f7f727] px-6 py-3 font-medium text-[#1a1a00] transition hover:bg-[#f5f545]">
                Pre Order Now
              </button>
              <button className="rounded-full border border-white/30 px-6 py-3 transition hover:border-white/60 hover:bg-white/10">
                Talk to Sales
              </button>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-6" style={{opacity:0,transform:"translateY(8px)",animation:"fadeUp 0.6s ease 0.75s forwards"}}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-bold">{s.value}</div>
                  <div className="text-sm text-zinc-400">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-xs text-zinc-500">
              *Interchangeable build volume for high color spectrum
            </div>
          </div>
        </section>

        {/* Conductive Parts Banner */}
        <section className="mx-auto max-w-7xl px-6 pt-8 pb-0" {...revealConductive}>
          <div className="relative overflow-hidden rounded-2xl bg-zinc-950 px-16 py-20 text-center">
            <div ref={conductiveHeadingRef} className="mb-6 text-8xl font-bold leading-none tracking-tight">
              <div className="overflow-hidden">
                {"Functional".split("").map((ch, i) => (
                  <span
                    key={i}
                    className="letter inline-block text-white"
                    style={{opacity: 0, transform: "translateY(20px)", transition: "opacity 0.4s ease, transform 0.4s ease"}}
                  >{ch === " " ? " " : ch}</span>
                ))}
              </div>
              <div className="overflow-hidden">
                {"Conductive Parts".split("").map((ch, i) => (
                  <span
                    key={i + 10}
                    className="letter inline-block text-[#f7f727]"
                    style={{opacity: 0, transform: "translateY(20px)", transition: "opacity 0.4s ease, transform 0.4s ease"}}
                  >{ch === " " ? " " : ch}</span>
                ))}
              </div>
            </div>
            <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-zinc-400">
              Print with conductive resin to unlock embedded electronics,
              circuits, and entirely new product workflows.
            </p>
            <button className="rounded-full bg-[#f7f727] px-8 py-3 text-sm font-semibold text-[#1a1a00] transition hover:bg-[#f5f545]">
              Learn more
            </button>
          </div>
        </section>

        {/* Applications Section */}
        <section id="applications" className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-center gap-4 mb-8" {...revealAppsHeader}>
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs tracking-[0.25em] text-zinc-500">APPLICATIONS</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[revealCard0, revealCard1, revealCard2, revealCard3].map((reveal, i) => {
              const u = useCases[i];
              return (
              <div
                key={u.title}
                className="group relative overflow-hidden bg-zinc-950 border border-white/[0.06] p-7 min-h-[200px] flex flex-col justify-between cursor-pointer"
                {...reveal}
                onMouseEnter={(e) => { const v = e.currentTarget.querySelector('video'); if (v) v.play(); }}
                onMouseLeave={(e) => { const v = e.currentTarget.querySelector('video'); if (v) { v.pause(); v.currentTime = 0; } }}
                onClick={() => { if (i === 2) window.location.href = '/applications/dental-medical'; if (i === 3) window.location.href = '/applications/product-development'; }}
              >
                <video
                  muted loop playsInline
                  className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
                  src={APP_VIDEO_URL}
                />
                <div className="absolute inset-0 bg-zinc-950/50" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <img src={u.icon} alt="" className="w-8 h-8 object-contain mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                  <h3
                    className="text-2xl font-semibold leading-snug mb-3 transition-all duration-300"
                    style={i === 0 ? undefined : undefined}
                  >
                    {i === 0 ? (
                      <span className="relative inline-block">
                        <span className="absolute inset-0 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: "linear-gradient(90deg, #ff0000, #f928ee, #f7f727, #00ff12)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
                          {u.title}
                        </span>
                        <span className="group-hover:opacity-0 transition-opacity duration-300">{u.title}</span>
                      </span>
                    ) : u.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">{u.description}</p>
                </div>
              </div>
            )})}
          </div>
        </section>

        {/* Materials Section */}
        <section id="materials" className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-xs tracking-[0.25em] text-zinc-500 mb-8" {...revealMaterials}>MATERIALS</p>
          <div className="grid grid-cols-4 gap-px bg-white/[0.04]">
            {[revealMat0, revealMat1, revealMat2, revealMat3].map((reveal, i) => {
              const m = materials[i];
              return (
              <div
                key={m.name}
                className="group relative cursor-pointer bg-zinc-950 p-6 transition-colors duration-300 hover:bg-zinc-900/80"
                onClick={() => setActiveMaterial(i)}
                {...reveal}
              >
                {/* Top line — always faintly visible, brightens on hover */}
                <div
                  className="absolute top-0 left-0 right-0 transition-all duration-300"
                  style={{
                    height: "1px",
                    background: m.color,
                    opacity: activeMaterial === i ? 1 : 0.15,
                  }}
                />
                <div
                  className="absolute top-0 left-0 right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{height: "1px", background: m.color, boxShadow: `0 0 8px 1px ${m.color}88`}}
                />
                {/* Text */}
                <div className="mb-4">
                  <div className={`text-sm font-semibold mb-1 transition-colors duration-300 group-hover:text-white ${activeMaterial === i ? "text-white" : "text-zinc-400"}`}>{m.name}</div>
                  <div className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">{m.description}</div>
                </div>
                {/* Bottle illustration */}
                <div className="relative flex items-center justify-center bg-[#0f0f0f] h-64">
                  {i === 0 ? (
                    <img src={CONDUCTIVE_RESIN_IMG} alt="Conductive Resin" className="h-full w-full object-contain" />
                  ) : (
                    <div
                      className="relative flex flex-col items-center pt-3 gap-2"
                      style={{width: "48px", height: "104px", borderRadius: "4px", background: "#1a1a1a"}}
                    >
                      <div style={{width: "28px", height: "10px", background: `${m.color}55`, borderRadius: "2px"}} />
                      <div style={{width: "34px", height: "30px", background: `${m.color}12`, borderRadius: "2px", marginTop: "8px"}} />
                    </div>
                  )}
                </div>
              </div>
            )})}
          </div>
        </section>

        {/* Software Section */}
        <section id="software" className="mx-auto max-w-7xl px-6 py-16" {...revealSoftware}>
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl bg-zinc-950" style={{minHeight: "420px"}}>

            {/* Left — copy + features */}
            <div className="flex flex-col justify-center border-r border-white/[0.07] px-10 py-12">
              <div className="mb-4 text-xs tracking-[0.25em] text-zinc-500">SOFTWARE</div>
              <div className="flex items-center gap-4 mb-8">
                <img src={POLYSLICER_LOGO} alt="Polysynth" className="h-14 w-auto object-contain flex-shrink-0" />
                <h2 className="text-5xl font-bold leading-none text-white">PolySlicer</h2>
              </div>
              <div className="mb-10 flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-4 w-0.5 flex-shrink-0 bg-[#f7f727]" />
                  <div>
                    <div className="mb-1 text-sm font-semibold text-white">Material Switching</div>
                    <div className="text-xs leading-relaxed text-zinc-500">Automatic sequencing across up to 8 materials per print.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-4 w-0.5 flex-shrink-0 bg-white/15" />
                  <div>
                    <div className="mb-1 text-sm font-semibold text-white">Cleaning Cycles</div>
                    <div className="text-xs leading-relaxed text-zinc-500">Patent-pending vat cleaning between every layer change.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-4 w-0.5 flex-shrink-0 bg-white/15" />
                  <div>
                    <div className="mb-1 text-sm font-semibold text-white">Precision Workflows</div>
                    <div className="text-xs leading-relaxed text-zinc-500">Micron-level control across every parameter.</div>
                  </div>
                </div>
              </div>
              <div>
                <button className="rounded-full border border-[#f7f727]/40 px-6 py-2.5 text-sm text-[#f7f727] transition hover:bg-[#f7f727]/10">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right — video placeholder */}
            <div className="relative flex items-center justify-center overflow-hidden bg-zinc-900/50">
              <div className="absolute inset-0" style={{backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 32px, rgba(255,255,255,0.02) 32px, rgba(255,255,255,0.02) 33px), repeating-linear-gradient(90deg, transparent, transparent 32px, rgba(255,255,255,0.02) 32px, rgba(255,255,255,0.02) 33px)"}} />
              <div className="relative z-10 flex flex-col items-center gap-3 text-zinc-600">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700">
                  <div className="ml-0.5 h-0 w-0 border-b-[6px] border-t-[6px] border-l-[10px] border-b-transparent border-t-transparent border-l-zinc-600" />
                </div>
                <span className="text-xs tracking-widest">VIDEO COMING SOON</span>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-zinc-950" {...revealFooter}>
        {/* Top bar */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 border-b border-white/[0.06]">
          <img src={LOGO} alt="Polysynth" className="h-8 w-auto object-contain" />
          <nav className="hidden gap-8 md:flex">
            {[{ label: "Products", href: "/products" }, { label: "Applications", href: "#applications" }, { label: "Materials", href: "#materials" }, { label: "Software", href: "#software" }, { label: "Company", href: "#" }].map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-zinc-500 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <button className="rounded-full bg-[#f7f727] px-5 py-2 text-sm font-semibold text-[#1a1a00] transition hover:bg-[#f5f545]">
            Pre Order Now
          </button>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <span className="text-xs text-zinc-600">© 2025 Polysynth. All rights reserved.</span>
          <div className="flex items-center gap-5">
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="text-zinc-600 transition hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            {/* X / Twitter */}
            <a href="#" aria-label="X" className="text-zinc-600 transition hover:text-white">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.85L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-zinc-600 transition hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <div className="h-3 w-px bg-white/10" />
            <a href="#" className="text-xs text-zinc-600 transition hover:text-white">Privacy</a>
            <a href="#" className="text-xs text-zinc-600 transition hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
