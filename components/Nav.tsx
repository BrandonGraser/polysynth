"use client";

import { useEffect, useState } from "react";

const nav = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/#applications" },
  { label: "Software", href: "/#software" },
  { label: "Roadmap", href: "/roadmap" },
];

export default function Nav({ active }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 border-b border-white/10 backdrop-blur-xl transition-colors duration-300 ${scrolled ? "bg-zinc-950/70" : "bg-zinc-950/45"}`}>
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <a href="/" className="text-xl font-semibold tracking-[0.25em] text-white">POLYSYNTH</a>

          {/* Desktop nav links */}
          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm transition hover:text-white ${active === item.label ? "text-white" : "text-zinc-400"}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA buttons */}
          <div className="hidden gap-4 md:flex">
            <a href="/contact">
              <button className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-white/40">
                Contact Sales
              </button>
            </a>
            <a href="/contact?tab=reserve">
              <button className="rounded-full bg-[#f7f727] px-4 py-2 text-sm font-medium text-[#1a1a00] transition hover:bg-[#f5f545]">
                Pre Order Now
              </button>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-[6px] rounded-md"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[1.5px] w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? "translate-y-[7.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
          </button>

        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-30 flex flex-col bg-zinc-950 transition-all duration-300 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Spacer for header height */}
        <div className="h-[65px] flex-shrink-0" />

        <div className="flex flex-1 flex-col px-6 py-8">

          {/* Nav links */}
          <nav className="flex flex-col gap-1 border-b border-white/10 pb-8">
            {nav.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-2xl font-medium tracking-wide transition hover:text-white ${active === item.label ? "text-white" : "text-zinc-400"}`}
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 pt-8">
            <a href="/contact" onClick={() => setMenuOpen(false)}>
              <button className="w-full rounded-full border border-white/20 px-4 py-3 text-sm transition hover:border-white/40">
                Contact Sales
              </button>
            </a>
            <a href="/contact?tab=reserve" onClick={() => setMenuOpen(false)}>
              <button className="w-full rounded-full bg-[#f7f727] px-4 py-3 text-sm font-medium text-[#1a1a00] transition hover:bg-[#f5f545]">
                Pre Order Now
              </button>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
