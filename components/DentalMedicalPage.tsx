"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import { DENTAL_ICON as ICON } from "@/components/imageAssets";

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

      {/* Footer */}
      <Footer />
    </div>
  );
}
