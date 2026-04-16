"use client";

import { FlaskConical, Lightbulb, Stethoscope, Cpu } from "lucide-react";

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
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-[-10rem] left-1/2 h-[45rem] w-[70rem] -translate-x-1/2 rounded-full bg-red-500/20 blur-[180px]" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_top,rgba(239,68,68,0.08),transparent_45%,transparent)]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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
            <button className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-white/30">
              Contact Sales
            </button>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200">
              Pre Order Now
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <div className="mb-4 text-sm uppercase text-red-400">
              First multi-color resin system
            </div>
            <h1 className="text-6xl font-semibold leading-tight md:text-7xl">
              The first{" "}
              <span className="text-red-400">multi-material</span> resin
              printer.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-400">
              Polysynth 1 introduces a new category of 3D printing—combining
              multiple materials in a single print with a proprietary vat
              cleaning system that resets between layers for cleaner transitions
              and higher fidelity output.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200">
                Pre Order Now
              </button>
              <button className="rounded-full border border-white/15 px-6 py-3 transition hover:border-white/30">
                Talk to Sales
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
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

          {/* Printer illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[28rem] w-72 rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl">
              <div className="absolute inset-x-8 top-8 h-44 rounded-[1.5rem] border border-red-400/20 bg-gradient-to-b from-red-400/10 to-transparent" />
              <div className="absolute bottom-8 left-1/2 h-5 w-40 -translate-x-1/2 bg-red-500 blur-xl" />
              <div className="absolute inset-x-0 bottom-0 h-32 rounded-b-[2rem] bg-gradient-to-t from-red-500/10 to-transparent" />
            </div>
          </div>
        </section>

        {/* Conductive Parts Banner */}
        <section className="mx-auto max-w-7xl px-6 pb-0">
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
                className="group flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition hover:border-red-500/60 hover:bg-red-500/10"
              >
                <div className="mb-5">{u.icon}</div>
                <h3 className="max-w-[14rem] text-xl font-semibold">
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
