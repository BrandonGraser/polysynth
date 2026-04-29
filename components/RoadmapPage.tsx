"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const nav = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/#applications" },
  { label: "Materials", href: "/materials" },
  { label: "Software", href: "/#software" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Company", href: "#" },
];

const productPhases = [
  {
    phase: "01",
    title: "Build + Prove",
    status: "active",
    items: [
      "Unlock multi-color printing",
      "Validate core system performance",
      "Build initial production batch (~20 machines)",
    ],
  },
  {
    phase: "02",
    title: "Validate + Deploy",
    status: "planned",
    items: [
      "Deploy to early partners (labs, pilot users)",
      "Begin direct sales + controlled sampling",
    ],
  },
  {
    phase: "03",
    title: "Scale + Expand",
    status: "planned",
    items: [
      "Increase production capacity + distribution",
      "Prepare for full launch",
    ],
  },
  {
    phase: "04",
    title: "Enable New Categories",
    status: "planned",
    items: [
      "Launch conductive materials stack",
      "Product launch ready",
      "Begin shipping",
    ],
  },
];

const materialItems = [
  { label: "Full Conductive Resin Prints", pct: 20, status: "active" },
  { label: "Multi-Color Resin Prints", pct: 85, status: "active" },
  { label: "Full Color Spectrum Resin Prints", pct: 50, status: "active" },
];

const statusConfig: Record<string, { label: string; color: string; bg: string; bar: string }> = {
  complete: { label: "COMPLETE", color: "#ffffff", bg: "rgba(255,255,255,0.1)", bar: "#ffffff" },
  active:   { label: "ACTIVE",   color: "#f7f727", bg: "rgba(247,247,39,0.12)", bar: "#f7f727" },
  planned:  { label: "PLANNED",  color: "#a1a1aa", bg: "rgba(161,161,170,0.1)", bar: "#3f3f46" },
  launch:   { label: "LAUNCH",   color: "#00ff12", bg: "rgba(0,255,18,0.12)",   bar: "#00ff12" },
};

export default function RoadmapPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">

      <Nav active="" />

      <main className="mx-auto max-w-7xl px-6 pt-36 pb-24">

        {/* PRODUCT ROADMAP */}
        <section className="mb-24" style={{opacity:0, animation:"fadeUp 0.7s ease 0.1s forwards"}}>
          <div className="text-xs tracking-[0.25em] text-zinc-500 mb-4">PRODUCT ROADMAP</div>
          <h1 className="text-4xl font-bold leading-none mb-4 sm:text-6xl md:text-7xl">A Disciplined<br />Build Path.</h1>
          <p className="text-zinc-400 text-base max-w-xl leading-relaxed mb-12">
            Transparent milestones and measurable results are how we build trust and ship hardware that works.
          </p>

          <div className="grid grid-cols-1 gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {productPhases.map((p) => {
              const s = statusConfig[p.status];
              return (
                <div key={p.phase} className="bg-zinc-950 p-6 flex flex-col relative overflow-hidden">
                  {/* Bottom color bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{background: s.bar}} />
                  {/* Phase + status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs tracking-[0.15em] text-zinc-500">PHASE {p.phase}</span>
                    <span
                      className="text-[10px] font-semibold tracking-[0.1em] px-2 py-1 rounded-sm"
                      style={{color: s.color, background: s.bg}}
                    >
                      {s.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-5 leading-tight">{p.title}</h3>
                  <ul className="flex flex-col gap-2 mb-8">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-zinc-400 leading-relaxed">
                        <span className="text-zinc-600 mt-1 flex-shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* MATERIALS ROADMAP */}
        <section style={{opacity:0, animation:"fadeUp 0.7s ease 0.3s forwards"}}>
          <div className="text-xs tracking-[0.25em] text-zinc-500 mb-4">MATERIALS ROADMAP</div>
          <h2 className="text-4xl font-bold leading-none mb-4 sm:text-6xl md:text-7xl">Planned Material<br />Launches.</h2>
          <p className="text-zinc-400 text-base max-w-xl leading-relaxed mb-12">
            Expanding our resin platform from multi-color to full conductive printing. Each milestone unlocks a new category of what's buildable.
          </p>

          <div className="flex flex-col gap-px bg-white/[0.06]">
            {materialItems.map((m) => {
              const s = statusConfig[m.status];
              return (
                <div key={m.label} className="bg-zinc-950 px-6 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8 sm:px-8 sm:py-7">
                  {/* Status badge */}
                  <span
                    className="text-[10px] font-semibold tracking-[0.1em] px-2 py-1 rounded-sm flex-shrink-0 w-20 text-center"
                    style={{color: s.color, background: s.bg}}
                  >
                    {s.label}
                  </span>
                  {/* Label */}
                  <span className="text-base font-semibold sm:w-72 sm:flex-shrink-0">{m.label}</span>
                  {/* Progress bar */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex-1 h-px bg-white/[0.08] relative">
                      <div
                        className="absolute left-0 top-0 h-full transition-all duration-1000"
                        style={{width: `${m.pct}%`, background: "#f7f727"}}
                      />
                    </div>
                    <span className="text-sm font-bold text-[#f7f727] w-12 text-right flex-shrink-0">{m.pct}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 border border-white/[0.06] p-8 text-center sm:p-12" style={{opacity:0, animation:"fadeUp 0.7s ease 0.5s forwards"}}>
          <div className="text-xs tracking-[0.25em] text-zinc-500 mb-4">JOIN THE WAITLIST</div>
          <h2 className="text-2xl font-bold mb-4 sm:text-4xl">Ready to build with Polysynth?</h2>
          <p className="text-zinc-400 max-w-md mx-auto mb-8 text-sm leading-relaxed">
            Get updates, early access opportunities, and launch details as we bring the P1 to market.
          </p>
          <button className="rounded-full bg-[#f7f727] px-8 py-3 text-sm font-semibold text-[#1a1a00] transition hover:bg-[#f5f545]">
            Pre-Order Now
          </button>
        </section>

      </main>

      <Footer />

    </div>
  );
}
