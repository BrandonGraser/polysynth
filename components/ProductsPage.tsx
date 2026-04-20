"use client";

import { LOGO } from "@/components/imageAssets";


const nav = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/#applications" },
  { label: "Materials", href: "/#materials" },
  { label: "Software", href: "/#software" },
  { label: "Company", href: "#" },
];

const products = [
  {
    tag: "POLYSYNTH",
    name: "P1",
    nameAccent: null,
    tagline: "The first multi-material resin printer. Up to 8 materials, one print, zero compromise.",
    specs: [
      { value: "8", label: "MATERIALS" },
      { value: "25μm", label: "RESOLUTION" },
      { value: "$4,999", label: "STARTING AT" },
    ],
    cta: "Explore P1",
    href: "#",
    imageRight: true,
  },
  {
    tag: "POLYSYNTH",
    name: "P1",
    nameAccent: "Dental",
    tagline: "Built for clinical precision. Biocompatible materials, micron-level accuracy, and seamless dental workflows.",
    specs: [
      { value: "FDA", label: "COMPLIANT" },
      { value: "10μm", label: "RESOLUTION" },
      { value: "$6,999", label: "STARTING AT" },
    ],
    cta: "Explore P1 Dental",
    href: "#",
    imageRight: false,
  },
];

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-zinc-950/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-semibold tracking-[0.25em] text-white">POLYSYNTH</a>
          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm transition hover:text-white ${item.label === "Products" ? "text-white" : "text-zinc-400"}`}
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

      {/* Page header */}
      <div className="pt-32 pb-12 px-6 mx-auto max-w-7xl">
        <div className="text-xs tracking-[0.25em] text-zinc-500 mb-4">PRODUCTS</div>
        <h1
          className="text-6xl font-bold leading-none mb-4"
          style={{opacity:0, transform:"translateY(16px)", animation:"fadeUp 0.7s ease 0.1s forwards"}}
        >
          Our Printers
        </h1>
        <p
          className="text-base text-zinc-400 max-w-lg leading-relaxed"
          style={{opacity:0, transform:"translateY(10px)", animation:"fadeUp 0.6s ease 0.25s forwards"}}
        >
          Two machines. One platform. Engineered for professionals who demand more from their workflow.
        </p>
      </div>

      {/* Product cards */}
      <div className="mx-auto max-w-7xl px-6 pb-24 grid grid-cols-2 gap-3">
        {products.map((p, idx) => (
          <div
            key={p.name + (p.nameAccent || "")}
            className="flex flex-col bg-zinc-950 overflow-hidden"
            style={{opacity:0, transform:"translateY(20px)", animation:`fadeUp 0.65s ease ${0.1 + idx * 0.15}s forwards`}}
          >
            {/* Text panel */}
            <div className="flex flex-col justify-center p-10">
              <div className="text-xs tracking-[0.2em] text-zinc-500 mb-5">{p.tag}</div>
              <h2 className="text-7xl font-bold leading-none mb-5 tracking-tight">
                {p.name}{p.nameAccent && <> <span className="text-[#f7f727]">{p.nameAccent}</span></>}
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-sm">{p.tagline}</p>
              <div className="flex gap-3 mb-10">
                {p.specs.map((s) => (
                  <div key={s.label} className="bg-zinc-900 px-5 py-4 text-center">
                    <div className="text-xl font-bold text-[#f7f727]">{s.value}</div>
                    <div className="text-[9px] text-zinc-500 tracking-widest mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div>
                <a href={p.href}>
                  <button className="rounded-full bg-[#f7f727] px-7 py-3 text-sm font-semibold text-[#1a1a00] transition hover:bg-[#f5f545]">
                    {p.cta}
                  </button>
                </a>
              </div>
            </div>

            {/* Image panel */}
            <div
              className="relative flex items-center justify-center bg-zinc-900/50 border-t border-white/[0.06]"
              style={{
                minHeight: "340px",
                backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 32px,rgba(255,255,255,0.02) 32px,rgba(255,255,255,0.02) 33px),repeating-linear-gradient(90deg,transparent,transparent 32px,rgba(255,255,255,0.02) 32px,rgba(255,255,255,0.02) 33px)"
              }}
            >
              <div className="flex flex-col items-center gap-3 text-zinc-700">
                <div className="w-36 h-52 bg-zinc-800/80 flex items-center justify-center">
                  <span className="text-xs tracking-widest text-zinc-600">IMAGE</span>
                </div>
                <span className="text-xs tracking-widest text-zinc-600">PLACEHOLDER</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-zinc-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 border-b border-white/[0.06]">
          <a href="/" className="text-base font-semibold tracking-[0.2em] text-white">POLYSYNTH</a>
          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-zinc-500 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <button className="rounded-full bg-[#f7f727] px-5 py-2 text-sm font-semibold text-[#1a1a00] transition hover:bg-[#f5f545]">
            Pre Order Now
          </button>
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
