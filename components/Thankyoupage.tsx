"use client";

import { useEffect, useState } from "react";

const tierNames: Record<string, { name: string; next: string }> = {
  reserve:  { name: "The Reserve",   next: "We'll be in touch when your slot opens." },
  priority: { name: "Our Priority",  next: "You've moved to the front of the queue. We'll reach out as production ramps." },
  founders: { name: "Founders",      next: "Welcome to the founding group. You'll receive direct updates as we build." },
};

const nav = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/#applications" },
  { label: "Software", href: "/#software" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Company", href: "#" },
];

export default function ThankYouPage() {
  const [tier, setTier] = useState<string>("reserve");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("tier");
    if (t && tierNames[t]) setTier(t);
  }, []);

  const info = tierNames[tier];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white flex flex-col">

      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-zinc-950/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-semibold tracking-[0.25em] text-white">POLYSYNTH</a>
          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-zinc-400 transition hover:text-white">{item.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6">
        <div
          className="max-w-xl w-full text-center"
          style={{opacity:0, animation:"fadeUp 0.8s ease 0.1s forwards"}}
        >
          <div className="text-xs tracking-[0.35em] text-zinc-500 mb-6">RESERVATION CONFIRMED</div>
          <h1 className="text-6xl md:text-7xl font-bold leading-none mb-6">
            You&apos;re in.<br />
            <span className="text-[#f7f727]">Welcome.</span>
          </h1>
          <div className="inline-block border border-[#f7f727]/20 bg-[#f7f727]/[0.04] px-5 py-2 text-sm text-[#f7f727] tracking-wide mb-6">
            {info.name}
          </div>
          <p className="text-zinc-400 text-base leading-relaxed mb-10">
            {info.next} Keep an eye on your inbox for confirmation and updates from the Polysynth team.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/roadmap">
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-white/40">
                View Roadmap
              </button>
            </a>
            <a href="/">
              <button className="rounded-full bg-[#f7f727] px-6 py-3 text-sm font-semibold text-[#1a1a00] transition hover:bg-[#f5f545]">
                Back to Home
              </button>
            </a>
          </div>
        </div>
      </main>

    </div>
  );
}
