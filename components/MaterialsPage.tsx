"use client";

const VIDEO_URL = "https://www.dropbox.com/scl/fi/hlr4d6gkcyi4ta3zdj5mk/MATERIALS-BACK.mp4?rlkey=ptk6c00jgjsf1p5z7mhrpko0u&raw=1";

const nav = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/#applications" },
  { label: "Materials", href: "/materials" },
  { label: "Software", href: "/#software" },
  { label: "Company", href: "#" },
];

export default function MaterialsPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">

      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-zinc-950/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-semibold tracking-[0.25em] text-white">POLYSYNTH</a>
          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm transition hover:text-white ${item.label === "Materials" ? "text-white" : "text-zinc-400"}`}
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

      <footer className="border-t border-white/[0.06] bg-zinc-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 border-b border-white/[0.06]">
          <a href="/" className="text-base font-semibold tracking-[0.2em] text-white">POLYSYNTH</a>
          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-zinc-500 transition hover:text-white">{item.label}</a>
            ))}
          </nav>
          <button className="rounded-full bg-[#f7f727] px-5 py-2 text-sm font-semibold text-[#1a1a00] transition hover:bg-[#f5f545]">Pre Order Now</button>
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
