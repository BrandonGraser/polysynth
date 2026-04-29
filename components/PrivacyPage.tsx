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

      <Nav active="" />

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

      <Footer />

    </div>
  );
}
