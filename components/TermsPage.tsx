"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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

      <Nav active="" />

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

      <Footer />

    </div>
  );
}
