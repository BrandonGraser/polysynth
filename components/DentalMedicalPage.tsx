"use client";

import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ToothDiagram from "@/components/ToothDiagram";

import { DENTAL_ICON as ICON, ICON_1, ICON_2, ICON_3, ICON_4 } from "@/components/imageAssets";

const VIDEO_URL = "https://www.dropbox.com/scl/fi/5ewqsiyd2mcxgj1alzymg/202604-10-1.mp4?rlkey=a4qqqu67szdv4c1tjetdkwqv9&raw=1";

const nav = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/#applications" },
  { label: "Materials", href: "/materials" },
  { label: "Software", href: "/#software" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Company", href: "#" },
];

export default function DentalMedicalPage() {
  const [hoveredLayer, setHoveredLayer] = React.useState<number | null>(null);

  // Icon configs for dental list: [src, filter, rotation]
  const dentalIcons: [string, string, number][] = [
    [ICON_3, "brightness(0) saturate(100%) invert(16%) sepia(98%) saturate(7404%) hue-rotate(0deg)", 0],          // #ff0000 red
    [ICON_1, "brightness(0) saturate(100%) invert(91%) sepia(96%) saturate(1100%) hue-rotate(1deg)", 0],           // #ffea00 yellow (X solid)
    [ICON_2, "brightness(0) saturate(100%) invert(44%) sepia(99%) saturate(5000%) hue-rotate(108deg)", 90],        // #00ff0c green
    [ICON_4, "brightness(0) saturate(100%) invert(11%) sepia(99%) saturate(7448%) hue-rotate(231deg)", 0],         // #0018ff blue
    [ICON_1, "brightness(0) saturate(100%) invert(13%) sepia(99%) saturate(7000%) hue-rotate(295deg)", 90],        // #ff00f6 magenta (X solid)
    [ICON_3, "brightness(0) saturate(100%) invert(11%) sepia(99%) saturate(7448%) hue-rotate(231deg)", 180],       // #0018ff blue rotated
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">

      <Nav active="" />

      <section className="relative flex min-h-screen items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          src={VIDEO_URL}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-zinc-950 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 flex flex-col items-center text-center">
          <div
            className="flex items-center gap-4 mb-6"
            style={{opacity: 0, animation: "fadeUp 0.6s ease 0.1s forwards"}}
          >
            <img src={ICON} alt="" className="w-8 h-8 object-contain" />
            <span className="text-sm uppercase tracking-[0.2em] text-[#f7f727]">Dental + Medical</span>
          </div>
          <h1
            className="max-w-4xl text-6xl font-bold leading-tight md:text-8xl"
            style={{opacity: 0, transform: "translateY(16px)", animation: "fadeUp 0.7s ease 0.25s forwards"}}
          >
            Accuracy Where It<br />
            <span className="text-[#f7f727]">Matters Most</span>
          </h1>
          <p
            className="mt-4 max-w-xl text-2xl font-semibold text-white"
            style={{opacity: 0, transform: "translateY(10px)", animation: "fadeUp 0.6s ease 0.4s forwards"}}
          >
            Stop assembling dental models.
          </p>
          <p
            className="mt-4 max-w-xl text-lg text-zinc-300 leading-relaxed"
            style={{opacity: 0, transform: "translateY(12px)", animation: "fadeUp 0.6s ease 0.55s forwards"}}
          >
            Print gums, teeth, and shade variation in one seamless process.<br />
            Accurate, functional, and ready out of the printer.
          </p>
        </div>
      </section>

      {/* Dental Workflow Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-16 text-center" style={{opacity:0, animation:"fadeUp 0.7s ease 0.1s forwards"}}>
          <div className="text-xs tracking-[0.25em] text-zinc-500 mb-4">CLINICAL WORKFLOW</div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">Every Layer.<br /><span className="text-[#f7f727]">Every Detail.</span></h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-base leading-relaxed">
            Polysynth P1 Dental handles the full complexity of clinical printing — from shade matching to material transitions — in a single uninterrupted build.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: interactive tooth diagram */}
          <div className="lg:sticky lg:top-24 w-full flex flex-col items-center gap-4" style={{opacity:0, animation:"fadeUp 0.7s ease 0.1s forwards"}}>
            <ToothDiagram onHover={setHoveredLayer} />
            <div className="h-5 text-xs tracking-[0.15em] font-mono transition-colors duration-150"
              style={{ color: hoveredLayer !== null ? ["#ff0000","#0018ff","#ffea00","#00ff0c","#ff00f6"][hoveredLayer] : "transparent" }}>
              {hoveredLayer !== null ? ["Preparation Color","Framework Construction","Dentin Layer","Internal Effects","Skin Enamel"][hoveredLayer] : "·"}
            </div>
          </div>

          {/* Right: feature list */}
          <div className="grid grid-cols-1 divide-y divide-white/[0.06] border border-white/[0.06]">
          {[
            {
              icon: "⬡",
              title: "Preparation Color",
              description: "The preparation color directly influences the final restoration result. P1 Dental sequences materials to reproduce accurate preparation shading using biocompatible resin blends — no manual color correction required.",
            },
            {
              icon: "◈",
              title: "Framework Construction",
              description: "Multi-material sequencing allows the framework and its staining layers to be printed in a single build. Precise material transitions at every layer change eliminate the need for separate firing or assembly steps.",
            },
            {
              icon: "◉",
              title: "Dentin Layer",
              description: "Accurate dentin representation requires material transitions that match the optical properties of natural tooth structure. P1 Dental prints dentin layers with micron-level precision, matched to your case specifications.",
            },
            {
              icon: "✦",
              title: "Internal Effects",
              description: "Mamelons, light absorption gradients, enamel canvas, and cervical translucency are handled automatically through material sequencing — producing internal characterization that mirrors natural dentition.",
            },
            {
              icon: "◌",
              title: "Skin Enamel",
              description: "Surface enamel layers are printed with tunable translucency profiles — milky, translucent, or transparent — giving clinicians control over the final optical result without post-processing.",
            },
            {
              icon: "◎",
              title: "Final Surface & Polish",
              description: "The final material layer seals the restoration with a surface finish optimized for clinical use. Parts exit the printer ready for post-cure and delivery — no staining studio required.",
            },
          ].map((feature, i) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 px-6 py-7 sm:flex-row sm:gap-8 sm:py-8 transition-colors"
              style={{
                opacity: 0,
                animation: `fadeUp 0.6s ease ${0.1 + i * 0.07}s forwards`,
                background: hoveredLayer === i ? "rgba(255,255,255,0.04)" : undefined,
              }}
              onMouseEnter={() => setHoveredLayer(i)}
              onMouseLeave={() => setHoveredLayer(null)}
            >
              {/* Icon + number */}
              <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-2 flex-shrink-0 sm:w-14">
                <img
                  src={dentalIcons[i][0]}
                  alt=""
                  className="w-8 h-8 object-contain"
                  style={{
                    filter: dentalIcons[i][1],
                    transform: `rotate(${dentalIcons[i][2]}deg)`,
                  }}
                />
                <span className="text-xs font-mono text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
              </div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              </div>
            </div>
          ))}
          </div>{/* end feature list */}
        </div>{/* end 2-col grid */}

        {/* CTA */}
        <div className="mt-12 text-center" style={{opacity:0, animation:"fadeUp 0.7s ease 0.6s forwards"}}>
          <a href="/contact?tab=reserve">
            <button className="rounded-full bg-[#f7f727] px-8 py-3 text-sm font-bold text-[#1a1a00] transition hover:bg-[#f5f545]">
              Pre Order P1 Dental
            </button>
          </a>
          <p className="mt-4 text-xs text-zinc-600">Fully refundable deposit. Limited early access slots.</p>
        </div>

      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
