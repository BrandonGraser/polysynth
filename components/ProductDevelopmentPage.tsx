"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
  { label: "Materials", href: "/materials" },
  { label: "Software", href: "/#software" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Company", href: "#" },
];

function PolyPanel() {
  return (
    <div className="relative p-14 overflow-hidden" style={{background: "#09090b"}}>
      <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 50%, transparent 100%)"}} />
      <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)"}} />
      <div className="absolute inset-y-0 left-0 w-px pointer-events-none" style={{background: "linear-gradient(180deg, rgba(255,255,255,0.08), transparent)"}} />
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[#f7f727]" />
      <div className="relative z-10 text-xs tracking-[0.2em] text-[#f7f727] mb-10">POLYSYNTH</div>
      <div className="relative z-10 flex flex-col gap-0 divide-y divide-white/[0.05]">
        {["Functional systems", "Multi-material, one print", "No assembly required"].map((item) => (
          <div key={item} className="flex items-center gap-6 py-6">
            <div className="text-[#f7f727] text-2xl font-bold select-none">+</div>
            <span className="text-white text-2xl font-bold">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function ProductDevelopmentPage() {
  const r1 = useReveal(0); const r2 = useReveal(100); const r3 = useReveal(200);
  const r4 = useReveal(0); const r5 = useReveal(0); const r6 = useReveal(0);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">

      {/* Navbar */}
      <Nav active="" />

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
            <PolyPanel />
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
          <div className="text-xs tracking-[0.25em] text-zinc-500 mb-4 text-center">WORKFLOW</div>
          <h2 className="text-5xl font-bold mb-20 text-center">Collapse the Workflow</h2>

          {/* Traditional */}
          <div className="mb-16">
            <div className="text-xs tracking-[0.2em] text-zinc-600 mb-8 text-center">TRADITIONAL</div>
            <div className="flex items-center justify-center gap-0">
              {["CAD", "Prototype", "Manufacture", "Assemble"].map((step, i, arr) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mb-4 text-sm text-zinc-600 font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="text-zinc-500 text-base font-medium">{step}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex items-center mx-6 mb-6">
                      <div className="h-px w-16 bg-zinc-700/60" />
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-zinc-700/60" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Polysynth */}
          <div>
            <div className="text-xs tracking-[0.2em] text-[#f7f727]/50 mb-8 text-center">POLYSYNTH</div>
            <div className="flex items-center justify-center gap-0">
              {["CAD", "Print", "Done"].map((step, i, arr) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-2 border-[#f7f727] flex items-center justify-center mb-4 text-base text-[#f7f727] font-bold bg-[#f7f727]/06">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="text-[#f7f727] text-lg font-bold">{step}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex items-center mx-7 mb-6">
                      <div className="h-px w-20 bg-[#f7f727]/40" />
                      <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[10px] border-l-[#f7f727]" />
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
      <Footer />

    </div>
  );
}
