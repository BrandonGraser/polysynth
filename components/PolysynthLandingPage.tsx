"use client";

import { FlaskConical, Lightbulb, Stethoscope, Cpu } from "lucide-react";

const VIDEO_URL =
  "https://www.dropbox.com/scl/fi/hnfqm7sjxeievrcsb0u6d/HEADER-VIDEO.mp4?rlkey=a4nu6vdjbjl81sh3m075o9m6v&raw=1";

const APP_VIDEO_URL =
  "https://www.dropbox.com/scl/fi/4u4ol468fv9aaefcybo1s/PCB-ICON.mp4?rlkey=rvguvv3iyhu6b7laamts27ksu&raw=1";

export default function PolysynthLandingPage() {
  const nav = ["Applications", "Materials", "Software", "Company"];

  const stats = [
    { label: "Materials Capability", value: "Up to 8 Materials*" },
    { label: "Starting Price", value: "$4,999+" },
    { label: "Core Innovation", value: "Layer Cleaning System (Patent Pending)" },
  ];

  const useCases = [
    {
      title: "Multi Material Prototyping",
      icon: <Lightbulb className="h-8 w-8 text-red-400 transition group-hover:text-white" />,
    },
    {
      title: "Functional Conductive Parts",
      icon: <Cpu className="h-8 w-8 text-red-400 transition group-hover:text-white" />,
    },
    {
      title: "Dental + Medical",
      icon: <Stethoscope className="h-8 w-8 text-red-400 transition group-hover:text-white" />,
    },
    {
      title: "Product Development",
      icon: <FlaskConical className="h-8 w-8 text-red-400 transition group-hover:text-white" />,
    },
  ];

  const materials = [
    { name: "Conductive Resin" },
    { name: "Clear Resin" },
    { name: "Color Resin" },
    { name: "High Detail Resin" },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">

      {/* Navbar — fixed, frosted glass, sits above video */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-zinc-950/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold tracking-[0.25em]">POLYSYNTH</div>
          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex gap-4">
            <button className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-white/40">
              Contact Sales
            </button>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200">
              Pre Order Now
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero — full viewport height, video starts at very top behind navbar */}
        <section className="relative flex min-h-screen items-end overflow-hidden pb-20">
          {/* Background video — covers entire section including behind navbar */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            src={VIDEO_URL}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Bottom fade into page */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />

          {/* Hero content — pushed down so it clears the navbar */}
          <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6">
            <div className="mb-4 text-sm uppercase text-red-400">
              First multi-color resin system
            </div>
            <h1 className="max-w-3xl text-6xl font-semibold leading-tight md:text-7xl">
              The first{" "}
              <span className="text-red-400">multi-material</span> resin
              printer.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-300">
              Polysynth 1 introduces a new category of 3D printing—combining
              multiple materials in a single print with a proprietary vat
              cleaning system that resets between layers for cleaner transitions
              and higher fidelity output.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200">
                Pre Order Now
              </button>
              <button className="rounded-full border border-white/30 px-6 py-3 transition hover:border-white/60 hover:bg-white/10">
                Talk to Sales
              </button>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-bold">{s.value}</div>
                  <div className="text-sm text-zinc-400">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-xs text-zinc-500">
              *Interchangeable build volume for high color spectrum
            </div>
          </div>
        </section>

        {/* Conductive Parts Banner */}
        <section className="mx-auto max-w-7xl px-6 pb-0 pt-8">
          <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-6 text-center md:p-7">
            <h2 className="mb-3 text-3xl font-semibold text-red-400">
              Functional Conductive Parts
            </h2>
            <p className="mx-auto mb-5 max-w-2xl text-zinc-300">
              Print with conductive resin to unlock embedded electronics,
              circuits, and entirely new product workflows.
            </p>
            <button className="rounded-full border border-red-400 px-6 py-3 text-red-400 transition hover:bg-red-400/10">
              Learn more about our groundbreaking technology
            </button>
          </div>
        </section>

        {/* Applications Section */}
        <section id="applications" className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="mb-8 text-4xl font-semibold">Applications</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="group relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 p-8 text-center transition hover:border-red-500/60"
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) { video.pause(); video.currentTime = 0; }
                }}
              >
                <video
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover opacity-35"
                  src={APP_VIDEO_URL}
                />
                <div className="absolute inset-0 bg-zinc-950/60" />
                <div className="relative z-10 mb-5">{u.icon}</div>
                <h3 className="relative z-10 max-w-[14rem] text-xl font-semibold">
                  {u.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Materials Section */}
        <section id="materials" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-4xl font-semibold">Materials</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {materials.map((m) => (
              <div
                key={m.name}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-red-500/60 hover:bg-red-500/10"
              >
                <div className="mb-6 text-center text-lg font-semibold">
                  {m.name}
                </div>
                <div className="mx-auto flex h-56 w-full max-w-sm items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/80">
                  <div className="relative flex h-40 w-24 items-end justify-center rounded-[1.25rem] border border-white/15 bg-gradient-to-b from-zinc-700 to-zinc-900">
                    <div className="absolute top-3 h-6 w-12 rounded-md bg-zinc-500" />
                    <div className="absolute bottom-5 h-12 w-16 rounded-xl bg-white/5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Software Section */}
        <section id="software" className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center md:p-10">
            <div className="mb-3 text-sm uppercase text-red-400">Software</div>
            <h2 className="mb-4 text-4xl font-semibold">PolySlicer</h2>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-zinc-400">
              PolySlicer is the software layer behind Polysynth 1, designed to
              handle material switching, cleaning cycles, and high-precision
              print workflows.
            </p>
            <button className="mt-6 rounded-full border border-white/15 px-6 py-3 transition hover:border-red-500/60 hover:bg-red-500/10">
              Learn More
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-4xl font-semibold">
            Ready to bring Polysynth into your workflow?
          </h2>
          <div className="mt-6 flex justify-center gap-4">
            <button className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200">
              Pre Order Now
            </button>
            <button className="rounded-full border border-white/15 px-6 py-3 transition hover:border-white/30">
              Contact Sales
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
