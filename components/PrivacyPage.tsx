"use client";

const nav = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/#applications" },
  { label: "Software", href: "/#software" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Company", href: "#" },
];

const sections = [
  {
    title: "Information We Collect",
    content: [
      "We collect information you provide directly, including your name, company, email address, and any message submitted through our forms.",
      "We may also collect limited technical data automatically, such as your IP address, browser type, device information, and general usage data to support analytics, performance, and security.",
    ],
  },
  {
    title: "How We Use Information",
    content: [
      "We use collected information to:",
    ],
    bullets: [
      "Respond to inquiries and provide requested information",
      "Share updates on product releases, pilots, and availability",
      "Improve site performance, security, and overall user experience",
      "Meet legal and regulatory obligations",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain your information only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.",
      "You may request deletion of your data at any time by contacting us.",
    ],
  },
  {
    title: "Sharing and Disclosure",
    content: [
      "We do not sell your personal data.",
      "We may share information with trusted third-party service providers who assist in operating our website and communications. These providers are required to handle your data securely and in accordance with this policy.",
      "We may also disclose information if required to comply with applicable laws or legal processes.",
    ],
  },
  {
    title: "Security",
    content: [
      "We take reasonable measures to protect your information from unauthorized access, loss, or misuse. However, no system is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your Choices",
    content: [
      "You can opt out of non-essential communications at any time.",
      "To request access, correction, or deletion of your personal data, contact us using the information below.",
    ],
  },
  {
    title: "Updates",
    content: [
      "We may update this Privacy Policy periodically. The most current version will always be available on this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">

      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-zinc-950/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-semibold tracking-[0.25em] text-white">POLYSYNTH</a>
          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-zinc-400 transition hover:text-white">{item.label}</a>
            ))}
          </nav>
          <div className="flex gap-4">
            <a href="/contact"><button className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-white/40">Contact Sales</button></a>
            <button className="rounded-full bg-[#f7f727] px-4 py-2 text-sm font-medium text-[#1a1a00] transition hover:bg-[#f5f545]">Pre Order Now</button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pt-40 pb-24">
        <div style={{opacity:0, animation:"fadeUp 0.7s ease 0.1s forwards"}}>
          <div className="text-xs tracking-[0.25em] text-zinc-500 mb-4">LEGAL</div>
          <h1 className="text-6xl font-bold leading-none mb-4">Privacy Policy</h1>
          <p className="text-zinc-400 text-base leading-relaxed mb-16 max-w-xl">
            This Privacy Policy explains how Polysynth ("we," "us," or "our") collects, uses, and protects your information when you visit our website or interact with us. By using our site, you agree to the practices outlined below.
          </p>
        </div>

        <div className="flex flex-col gap-0 divide-y divide-white/[0.06]" style={{opacity:0, animation:"fadeUp 0.7s ease 0.25s forwards"}}>
          {sections.map((s) => (
            <div key={s.title} className="py-10">
              <h2 className="text-xl font-bold text-[#f7f727] mb-5">{s.title}</h2>
              <div className="flex flex-col gap-4">
                {s.content.map((p, i) => (
                  <p key={i} className="text-zinc-400 text-sm leading-relaxed">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="flex flex-col gap-2 mt-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-zinc-400">
                        <span className="text-[#f7f727] mt-0.5 flex-shrink-0">—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          {/* Contact */}
          <div className="py-10">
            <h2 className="text-xl font-bold text-[#f7f727] mb-5">Contact</h2>
            <p className="text-sm text-zinc-400">
              Email:{" "}
              <a href="mailto:info@polysynth3d.com" className="text-white underline underline-offset-4 hover:text-[#f7f727] transition">
                info@polysynth3d.com
              </a>
            </p>
          </div>
        </div>
      </main>

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
            <a href="/privacy" className="text-xs text-zinc-600 transition hover:text-white">Privacy</a>
            <a href="#" className="text-xs text-zinc-600 transition hover:text-white">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
