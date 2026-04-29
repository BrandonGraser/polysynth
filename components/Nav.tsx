"use client";

import { useEffect, useState } from "react";

const nav = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/#applications" },
  { label: "Software", href: "/#software" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Company", href: "#" },
];

export default function Nav({ active }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 border-b border-white/10 backdrop-blur-xl transition-colors duration-300 ${scrolled ? "bg-zinc-950/70" : "bg-zinc-950/45"}`}>
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-semibold tracking-[0.25em] text-white">POLYSYNTH</a>
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
        <div className="flex gap-4">
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
      </div>
    </header>
  );
}
