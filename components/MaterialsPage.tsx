"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const VIDEO_URL = "https://www.dropbox.com/scl/fi/hlr4d6gkcyi4ta3zdj5mk/MATERIALS-BACK.mp4?rlkey=ptk6c00jgjsf1p5z7mhrpko0u&raw=1";

const nav = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/#applications" },
  { label: "Materials", href: "/materials" },
  { label: "Software", href: "/#software" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Company", href: "#" },
];

export default function MaterialsPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">

      <Nav active="" />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          src={VIDEO_URL}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-zinc-950 to-transparent" />

        <div
          className="relative z-10 text-center"
          style={{opacity: 0, animation: "fadeUp 0.8s ease 0.2s forwards"}}
        >
          <div className="text-xs tracking-[0.35em] text-zinc-400 mb-6">POLYSYNTH</div>
          <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight">
            Resin Materials
          </h1>
          <div className="mt-4 text-3xl md:text-4xl font-semibold text-[#f7f727] tracking-[0.15em]">
            Coming Soon
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
