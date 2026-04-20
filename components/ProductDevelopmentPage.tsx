"use client";

import { PRODDEV_ICON as ICON } from "@/components/imageAssets";

import { useEffect, useRef } from "react";

const VIDEO_URL = "https://www.dropbox.com/scl/fi/hnfqm7sjxeievrcsb0u6d/HEADER-VIDEO.mp4?rlkey=a4nu6vdjbjl81sh3m075o9m6v&raw=1";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, style: { opacity: 0, transform: "translateY(20px)", transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms` } as React.CSSProperties };
}

const nav = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/#applications" },
  { label: "Materials", href: "/#materials" },
  { label: "Software", href: "/#software" },
  { label: "Company", href: "#" },
];

export default function ProductDevelopmentPage() {
  const r1 = useReveal(0); const r2 = useReveal(100); const r3 = useReveal(200);
  const r4 = useReveal(0); const r5 = useReveal(0); const r6 = useReveal(0);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-zinc-950/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-semibold tracking-[0.25em] text-white">POLYSYNTH</a>
          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-zinc-300 transition hover:text-white">{item.label}</a>
            ))}
          </nav>
          <div className="flex gap-4">
            <button className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-white/40">Contact Sales</button>
            <button className="rounded-full bg-[#f7f727] px-4 py-2 text-sm font-medium text-[#1a1a00] transition hover:bg-[#f5f545]">Pre Order Now</button>
          </div>
        </div>
      </header>

      {/* SECTION 1 — Hero */}
      <section className="relative flex items-center overflow-hidden pt-40 pb-24 bg-zinc-950">
        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6" style={{opacity:0, animation:"fadeUp 0.6s ease 0.1s forwards"}}>
            <img src={ICON} alt="" className="w-8 h-8 object-contain" />
            <span className="text-sm uppercase tracking-[0.2em] text-[#f7f727]">Product Development</span>
          </div>
          <h1 className="max-w-5xl text-7xl font-bold leading-none tracking-tight md:text-9xl" style={{opacity:0, transform:"translateY(16px)", animation:"fadeUp 0.7s ease 0.25s forwards"}}>
            Development,<br /><span className="text-[#f7f727]">Reimagined</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-zinc-400" style={{opacity:0, transform:"translateY(12px)", animation:"fadeUp 0.6s ease 0.45s forwards"}}>
            Traditional 3D printing helps you prototype. Polysynth lets you build the product.
          </p>
          <div style={{opacity:0, transform:"translateY(8px)", animation:"fadeUp 0.6s ease 0.6s forwards"}}>
            <button className="mt-8 rounded-full bg-[#f7f727] px-8 py-3 font-semibold text-[#1a1a00] transition hover:bg-[#f5f545]">
              Pre-Order Now
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Comparison */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-t border-white/[0.06]">
        <div {...r1}>
          <div className="text-xs tracking-[0.25em] text-zinc-500 mb-4 text-center">COMPARISON</div>
          <h2 className="text-5xl font-bold text-center mb-16">From Idea to Product</h2>
          <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
            {/* Left — muted */}
            <div className="bg-zinc-950 p-14">
              <div className="text-xs tracking-[0.2em] text-zinc-600 mb-10">MOST PRINTERS</div>
              <div className="flex flex-col gap-0 divide-y divide-white/[0.05]">
                {["Prototypes only", "Multiple prints per design", "Assembly required"].map((item) => (
                  <div key={item} className="flex items-center gap-6 py-6">
                    <div className="text-zinc-700 text-2xl font-bold select-none">—</div>
                    <span className="text-zinc-500 text-2xl font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — highlighted */}
            <div className="bg-zinc-900/30 p-14 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-[#f7f727]" />
              <div className="text-xs tracking-[0.2em] text-[#f7f727] mb-10">POLYSYNTH</div>
              <div className="flex flex-col gap-0 divide-y divide-white/[0.05]">
                {["Functional systems", "Multi-material, one print", "No assembly required"].map((item) => (
                  <div key={item} className="flex items-center gap-6 py-6">
                    <div className="text-[#f7f727] text-2xl font-bold select-none">+</div>
                    <span className="text-white text-2xl font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Design Without Constraints */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-t border-white/[0.06]">
        <div {...r2} className="grid grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs tracking-[0.25em] text-zinc-500 mb-4">DESIGN</div>
            <h2 className="text-5xl font-bold leading-tight mb-6">Design Without<br /><span className="text-[#f7f727]">Constraints</span></h2>
            <p className="text-zinc-400 text-base leading-relaxed max-w-md">
              No more splitting parts, routing PCBs, or planning assembly. Design the final object from day one.
            </p>
          </div>
          <div className="relative bg-zinc-900/40 flex items-center justify-center h-64" style={{backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 32px,rgba(255,255,255,0.02) 32px,rgba(255,255,255,0.02) 33px),repeating-linear-gradient(90deg,transparent,transparent 32px,rgba(255,255,255,0.02) 32px,rgba(255,255,255,0.02) 33px)"}}>
            <span className="text-xs tracking-widest text-zinc-600">VISUAL PENDING</span>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Workflow */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-t border-white/[0.06]">
        <div {...r3}>
          <div className="text-xs tracking-[0.25em] text-zinc-500 mb-4">WORKFLOW</div>
          <h2 className="text-5xl font-bold mb-16">Collapse the Workflow</h2>

          {/* Traditional */}
          <div className="mb-12">
            <div className="text-xs tracking-[0.15em] text-zinc-600 mb-5">TRADITIONAL</div>
            <div className="flex items-stretch gap-0">
              {["CAD", "Prototype", "Manufacture", "Assemble"].map((step, i, arr) => (
                <div key={step} className="flex items-center">
                  <div className="px-8 py-5 bg-zinc-900/50 text-zinc-500 text-xl font-semibold border border-white/[0.05]">{step}</div>
                  {i < arr.length - 1 && (
                    <div className="flex items-center px-1">
                      <div className="h-px w-10 bg-zinc-700" />
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[9px] border-l-zinc-700" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Polysynth */}
          <div>
            <div className="text-xs tracking-[0.15em] text-[#f7f727]/60 mb-5">POLYSYNTH</div>
            <div className="flex items-stretch gap-0">
              {["CAD", "Print", "Done"].map((step, i, arr) => (
                <div key={step} className="flex items-center">
                  <div className="px-10 py-5 bg-[#f7f727]/10 border border-[#f7f727]/30 text-[#f7f727] text-xl font-bold">{step}</div>
                  {i < arr.length - 1 && (
                    <div className="flex items-center px-1">
                      <div className="h-px w-10 bg-[#f7f727]/50" />
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[9px] border-l-[#f7f727]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Multi-Material */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-t border-white/[0.06]">
        <div {...r4}>
          <div className="text-xs tracking-[0.25em] text-zinc-500 mb-4">CAPABILITY</div>
          <h2 className="text-5xl font-bold mb-16">Multi-Material =<br /><span className="text-[#f7f727]">Multi-Function</span></h2>
          <div className="grid grid-cols-3 gap-px bg-white/[0.06]">
            {[
              { title: "Structural", desc: "Print circuitry directly into the part. Electronics and structure as one.", color: "#ffff00", icon: "⬡" },
              { title: "Rigid + Flexible", desc: "Hard and soft materials printed together. One object, multiple properties.", color: "#f928ee", icon: "◈" },
              { title: "Conductive", desc: "Function built directly in. No wiring, no soldering.", color: "#00ff12", icon: "⬢" },
            ].map((card) => (
              <div key={card.title} className="group bg-zinc-950 p-8 relative overflow-hidden cursor-default">
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: card.color}} />
                <div className="text-3xl mb-6" style={{color: card.color}}>{card.icon}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Statement */}
      <section className="relative py-40 flex items-center justify-center overflow-hidden border-t border-white/[0.06]">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="relative z-10 text-center px-6" {...r5}>
          <h2
            className="text-6xl md:text-8xl font-bold leading-tight mb-6 text-zinc-400"
            style={{transition: "color 1s ease"}}
          >
            3D printing was<br />faster prototyping.
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-white">
            Polysynth is <span className="text-[#f7f727]">direct manufacturing.</span>
          </p>
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section className="border-t border-white/[0.06] py-32 text-center" {...r6}>
        <h2 className="text-5xl md:text-6xl font-bold mb-10">
          Build what other<br />printers can&apos;t.
        </h2>
        <button className="rounded-full bg-[#f7f727] px-10 py-4 text-base font-semibold text-[#1a1a00] transition hover:bg-[#f5f545]">
          Pre-Order Now
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-zinc-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 border-b border-white/[0.06]">
          <a href="/" className="text-base font-semibold tracking-[0.2em] text-white">POLYSYNTH</a>
          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-zinc-500 transition hover:text-white">{item.label}</a>
            ))}
          </nav>
          <button className="rounded-full bg-[#f7f727] px-5 py-2 text-sm font-semibold text-[#1a1a00] transition hover:bg-[#f5f545]">Pre Order Now</button>
        </div>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <span className="text-xs text-zinc-600">© 2025 Polysynth. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="YouTube" className="text-zinc-600 transition hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#" aria-label="X" className="text-zinc-600 transition hover:text-white">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.85L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
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
