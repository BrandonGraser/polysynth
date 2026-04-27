"use client";

const nav = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/#applications" },
  { label: "Software", href: "/#software" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Company", href: "#" },
];

const reservationSections = [
  {
    num: "1",
    title: "Overview",
    content: [
      "Polysynth is developing advanced multi-material hardware systems. This reservation program is designed to support development and help plan production.",
      "Product development involves uncertainty. Availability, specifications, pricing, and timelines are not guaranteed.",
      "This program is not an investment opportunity and does not grant equity, ownership, or profit participation.",
    ],
  },
  {
    num: "2",
    title: "Reservation Tiers",
    content: [
      "At the time of deposit, you may be offered one or more of the following tiers:",
    ],
    bullets: [
      "The Reserve — $100: Secure your place in line with a fully refundable deposit. Applied toward your final purchase if you proceed.",
      "Our Priority — $750: Move ahead in the queue and help accelerate early production. Intended for those seeking earlier access as units begin shipping.",
      "Founders — $2,500: Highest priority placement, including early production access, direct updates, and limited founder recognition tied to the first builds.",
    ],
    footer: "Polysynth may update tier structure, pricing, or benefits for future participants. Your selected tier is locked at the time of deposit.",
  },
  {
    num: "3",
    title: "What Your Deposit Provides",
    content: ["A reservation deposit provides:"],
    bullets: [
      "A position in line for a future purchase invitation",
      "Credit toward the Product purchase price if you complete a purchase",
    ],
    footer: "A deposit does not guarantee a purchase opportunity by a specific date, access to a specific configuration, or final specifications or pricing matching early expectations.",
  },
  {
    num: "4",
    title: "Priority Structure",
    content: [
      "Purchase invitations are generally expected to follow: Founders → Our Priority → The Reserve.",
      "Actual sequencing may vary based on region, configuration, compliance, logistics, and operational readiness. Priority is a goal, not a guarantee.",
    ],
  },
  {
    num: "5",
    title: "Eligibility & Availability",
    content: [
      "This program is initially offered in select regions, with a focus on the United States and North America.",
      "Polysynth may limit or decline participation based on legal, regulatory, export, certification, or logistical constraints.",
      "If we cannot offer you a purchase opportunity, refundable deposits will be returned. Non-refundable tiers may receive alternative remedies where appropriate or required by law.",
      "You are responsible for ensuring your participation is lawful in your jurisdiction.",
    ],
  },
  {
    num: "6",
    title: "Development Changes",
    content: [
      "You acknowledge that hardware development may involve design and feature changes, supplier or material adjustments, certification and safety iterations, and timeline and cost shifts.",
      "Polysynth may update product details at any time.",
    ],
  },
  {
    num: "7",
    title: "Purchase Invitations",
    content: [
      "If and when Products become available, you may receive an invitation to purchase. Completing a purchase may require agreeing to a separate purchase agreement covering final specs, pricing, taxes, shipping, payment terms, and warranty.",
      "Your deposit will be applied to the base purchase price unless otherwise stated. Failure to respond within a set timeframe may affect your priority status.",
    ],
  },
  {
    num: "8",
    title: "Refunds",
    content: ["The Reserve ($100): Fully refundable prior to accepting a purchase invitation. Our Priority ($750) & Founders ($2,500): Non-refundable, except where required by law or outlined below."],
  },
  {
    num: "9",
    title: "If a Product Is Not Delivered",
    content: [
      "If Polysynth determines it cannot offer the Product within a reasonable timeframe, or cannot fulfill your reservation, we may provide store credit for future products or services, a partial refund, or another reasonable resolution.",
      "All legally required refunds will be honored.",
    ],
  },
  {
    num: "10",
    title: "Payments & Disputes",
    content: [
      "Deposits are processed through third-party payment providers.",
      "Polysynth may provide transaction records and these terms in response to disputes or chargebacks, without limiting your legal rights.",
    ],
  },
  {
    num: "11",
    title: "Transfers",
    content: [
      "Reservation transfers may be allowed on a limited basis and may require verification.",
      "Polysynth may restrict transfers to prevent fraud or abuse.",
    ],
  },
  {
    num: "12",
    title: "Taxes & Fees",
    content: ["You are responsible for all applicable taxes, duties, shipping costs, and related fees unless explicitly stated otherwise."],
  },
  {
    num: "13",
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, Polysynth is not liable for indirect, incidental, or consequential damages.",
      "Total liability will not exceed the amount paid under this program, unless required by law.",
    ],
  },
  {
    num: "14",
    title: "Governing Law",
    content: [
      "These terms are governed by the laws of the State of Colorado.",
      "Venue for disputes will be in Colorado unless otherwise specified in a separate agreement.",
    ],
  },
  {
    num: "15",
    title: "Updates to Terms",
    content: [
      "Polysynth may update these terms periodically.",
      "The version in effect at the time of your deposit will apply unless you agree to updated terms.",
    ],
  },
];

const generalSections = [
  {
    title: "Use of the Site",
    content: ["You agree to use the Site lawfully and not interfere with its operation or security."],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content on the Site—including branding, visuals, and software—is owned by or licensed to Polysynth and protected by law.",
      "You may not reproduce or distribute content without permission.",
    ],
  },
  {
    title: "Third-Party Links",
    content: ["Polysynth is not responsible for third-party websites linked from the Site."],
  },
  {
    title: "Disclaimer",
    content: ["The Site is provided \"as is\" without warranties of any kind."],
  },
  {
    title: "Limitation of Liability (Site Use)",
    content: ["Polysynth is not liable for damages resulting from use of the Site to the fullest extent permitted by law."],
  },
];

export default function TermsPage() {
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

        {/* Header */}
        <div style={{opacity:0, animation:"fadeUp 0.7s ease 0.1s forwards"}}>
          <div className="text-xs tracking-[0.25em] text-zinc-500 mb-4">LEGAL</div>
          <h1 className="text-6xl font-bold leading-none mb-4">Terms of Use</h1>
          <p className="text-zinc-400 text-base leading-relaxed mb-6">
            These Terms of Use govern your access to and use of the Polysynth website ("Site"). By using the Site, you agree to these terms. If you do not agree, do not use the Site.
          </p>
        </div>

        {/* Reservation Program */}
        <div style={{opacity:0, animation:"fadeUp 0.7s ease 0.2s forwards"}}>
          <div className="border border-[#f7f727]/20 bg-[#f7f727]/[0.03] px-8 py-6 mb-2">
            <div className="text-xs tracking-[0.2em] text-[#f7f727] mb-1">POLYSYNTH RESERVATION PROGRAM TERMS</div>
            <div className="text-xs text-zinc-500">Effective Date: January 22, 2026</div>
            <p className="text-sm text-zinc-400 leading-relaxed mt-3">
              These Reservation Terms ("Program Terms") apply to deposits made through the Polysynth website for future Polysynth hardware products (the "Product"). By placing a deposit, you agree to these Program Terms, along with our Terms of Use and Privacy Policy.
            </p>
          </div>

          <div className="flex flex-col gap-0 divide-y divide-white/[0.06] mb-16">
            {reservationSections.map((s) => (
              <div key={s.num} className="py-8 flex gap-8">
                <div className="text-xs text-zinc-600 font-mono pt-1 flex-shrink-0 w-6">{s.num}.</div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#f7f727] mb-4">{s.title}</h3>
                  <div className="flex flex-col gap-3">
                    {s.content.map((p, i) => (
                      <p key={i} className="text-sm text-zinc-400 leading-relaxed">{p}</p>
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
                    {s.footer && <p className="text-sm text-zinc-500 leading-relaxed mt-2 italic">{s.footer}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Site Terms */}
        <div style={{opacity:0, animation:"fadeUp 0.7s ease 0.3s forwards"}}>
          <div className="text-xs tracking-[0.25em] text-zinc-500 mb-6">GENERAL SITE TERMS</div>
          <div className="flex flex-col gap-0 divide-y divide-white/[0.06]">
            {generalSections.map((s) => (
              <div key={s.title} className="py-8">
                <h3 className="text-base font-bold text-[#f7f727] mb-3">{s.title}</h3>
                <div className="flex flex-col gap-3">
                  {s.content.map((p, i) => (
                    <p key={i} className="text-sm text-zinc-400 leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="py-8">
              <h3 className="text-base font-bold text-[#f7f727] mb-3">Contact</h3>
              <p className="text-sm text-zinc-400">
                Email:{" "}
                <a href="mailto:info@polysynth3d.com" className="text-white underline underline-offset-4 hover:text-[#f7f727] transition">
                  info@polysynth3d.com
                </a>
              </p>
            </div>
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
            <a href="/terms" className="text-xs text-zinc-600 transition hover:text-white">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
