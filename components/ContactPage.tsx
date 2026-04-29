"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const nav = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/#applications" },
  { label: "Software", href: "/#software" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Company", href: "#" },
];

const tiers = [
  {
    name: "The Reserve",
    price: "$100",
    tag: "REFUNDABLE",
    description: "Secure your place in line with a fully refundable deposit. Applied toward your final purchase if you proceed.",
    color: "#a1a1aa",
  },
  {
    name: "Our Priority",
    price: "$750",
    tag: "PRIORITY ACCESS",
    description: "Move ahead in the queue and help accelerate early production. Intended for those seeking earlier access as units begin shipping.",
    color: "#f7f727",
  },
  {
    name: "Founders",
    price: "$2,500",
    tag: "HIGHEST PRIORITY",
    description: "Highest priority placement, early production access, direct updates, and limited founder recognition tied to the first builds.",
    color: "#f7f727",
  },
];

function CheckoutButton({ tier, price, name, email, country }: { tier: string; price: string; name: string; email: string; country: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier, name, email, country }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      setLoading(false);
    }
  };

  return (
    <div className="mb-2">
      <button
        onClick={handleClick}
        disabled={loading}
        className="w-full py-3 text-sm font-bold text-[#1a1a00] bg-[#f7f727] hover:bg-[#f5f545] transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        {loading ? "Redirecting to Stripe..." : `Continue to Secure Checkout — ${price}`}
      </button>
      {error && <p className="text-xs text-red-400 mt-2 text-center">{error}</p>}
    </div>
  );
}


export default function ContactPage() {
  const [tab, setTab] = useState<"loop" | "reserve">("loop");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("tab") === "reserve") setTab("reserve");
  }, []);
  const [reserveStep, setReserveStep] = useState<1 | 2>(1);
  const [selectedTier, setSelectedTier] = useState<number>(0);
  const [loopSubmitted, setLoopSubmitted] = useState(false);
  const [reserveForm, setReserveForm] = useState({ name: "", email: "", country: "United States" });

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">

      <Nav active="" />

      <main className="mx-auto max-w-7xl px-6 pt-36 pb-24">

        {/* Header */}
        <div className="mb-16" style={{opacity:0, animation:"fadeUp 0.7s ease 0.1s forwards"}}>
          <div className="text-xs tracking-[0.25em] text-zinc-500 mb-4">CONTACT</div>
          <h1 className="text-4xl font-bold leading-none mb-6 sm:text-6xl md:text-7xl">Start the<br /><span className="text-[#f7f727]">Conversation.</span></h1>
          <p className="text-zinc-400 text-base leading-relaxed max-w-xl">
            We welcome collaborators, pilot partners, and builders ready to shape the future of multi-material printing.
          </p>
        </div>

        {/* Form — full width */}
        <div className="bg-zinc-900/40 border border-white/[0.06] p-8 mb-4" style={{opacity:0, animation:"fadeUp 0.7s ease 0.25s forwards"}}>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setTab("loop")}
                className={`px-5 py-2 text-sm font-medium transition border ${tab === "loop" ? "border-[#f7f727] text-[#f7f727] bg-[#f7f727]/[0.08]" : "border-white/10 text-zinc-400 hover:text-white hover:border-white/20"}`}
                style={{borderRadius: "999px"}}
              >
                Stay in the Loop
              </button>
              <button
                onClick={() => setTab("reserve")}
                className={`px-5 py-2 text-sm font-medium transition border ${tab === "reserve" ? "border-[#f7f727] text-[#f7f727] bg-[#f7f727]/[0.08]" : "border-white/10 text-zinc-400 hover:text-white hover:border-white/20"}`}
                style={{borderRadius: "999px"}}
              >
                Reserve with Deposit
              </button>
            </div>

            {/* Stay in the Loop */}
            {tab === "loop" && (
              loopSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="text-3xl font-bold text-[#f7f727] mb-3">You&apos;re in.</div>
                  <p className="text-zinc-400 text-sm mb-6">Thanks for reaching out. We&apos;ll be in touch shortly.</p>
                  <button onClick={() => setLoopSubmitted(false)} className="rounded-full border border-white/20 px-6 py-2 text-sm text-zinc-300 transition hover:border-white/40">Send another</button>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-zinc-400 mb-6">Get updates and hear about all of the latest developments.</p>
                  <form onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget as HTMLFormElement;
                    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
                    const social = (form.elements.namedItem("social") as HTMLInputElement).value;
                    await supabase.from("subscribers").insert({ name, email, phone, social_handle: social || null });
                    setLoopSubmitted(true);
                  }} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs tracking-[0.15em] text-zinc-500 mb-2">NAME <span className="text-[#f7f727]">*</span></label>
                        <input required type="text" name="name" placeholder="First Last" className="w-full bg-zinc-950/80 border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#f7f727]/40 transition" />
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.15em] text-zinc-500 mb-2">EMAIL <span className="text-[#f7f727]">*</span></label>
                        <input required type="email" name="email" placeholder="you@example.com" className="w-full bg-zinc-950/80 border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#f7f727]/40 transition" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.15em] text-zinc-500 mb-2">PHONE <span className="text-[#f7f727]">*</span></label>
                      <input required type="tel" name="phone" placeholder="+1 (555) 000-0000" className="w-full bg-zinc-950/80 border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#f7f727]/40 transition" />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.15em] text-zinc-500 mb-2">SOCIAL HANDLE <span className="text-zinc-600 font-normal normal-case tracking-normal">optional</span></label>
                      <input type="text" name="social" placeholder="@yourhandle" className="w-full bg-zinc-950/80 border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#f7f727]/40 transition" />
                    </div>
                    <div className="flex justify-center">
                      <button type="submit" className="bg-[#f7f727] px-10 py-3 text-sm font-bold text-[#1a1a00] transition hover:bg-[#f5f545]">
                        Subscribe
                      </button>
                    </div>
                    <p className="text-xs text-zinc-600 text-center">By continuing, you agree to our <a href="/terms" className="text-zinc-400 hover:text-[#f7f727] transition">Terms</a> and <a href="/privacy" className="text-zinc-400 hover:text-[#f7f727] transition">Privacy Policy</a>.</p>
                  </form>
                </div>
              )
            )}

            {/* Reserve with Deposit */}
            {tab === "reserve" && (
              <div>
                {/* Step 1 — Contact info */}
                {reserveStep === 1 && (
                  <div>
                    <p className="text-sm text-zinc-400 mb-6">Reserve your spot on the waitlist now with a fully refundable deposit. Spots are filling up fast.</p>
                    <form onSubmit={(e) => { e.preventDefault(); setReserveStep(2); }} className="flex flex-col gap-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs tracking-[0.15em] text-zinc-500 mb-2">NAME <span className="text-[#f7f727]">*</span></label>
                          <input
                            required
                            type="text"
                            placeholder="Full name"
                            value={reserveForm.name}
                            onChange={(e) => setReserveForm({...reserveForm, name: e.target.value})}
                            className="w-full bg-zinc-950/80 border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#f7f727]/40 transition"
                          />
                        </div>
                        <div>
                          <label className="block text-xs tracking-[0.15em] text-zinc-500 mb-2">EMAIL <span className="text-[#f7f727]">*</span></label>
                          <input
                            required
                            type="email"
                            placeholder="you@example.com"
                            value={reserveForm.email}
                            onChange={(e) => setReserveForm({...reserveForm, email: e.target.value})}
                            className="w-full bg-zinc-950/80 border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#f7f727]/40 transition"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.15em] text-zinc-500 mb-2">COUNTRY <span className="text-[#f7f727]">*</span></label>
                        <select
                          value={reserveForm.country}
                          onChange={(e) => setReserveForm({...reserveForm, country: e.target.value})}
                          className="w-full bg-zinc-950/80 border border-white/[0.08] px-4 py-3 text-sm text-zinc-300 focus:outline-none focus:border-[#f7f727]/40 transition appearance-none"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>United Kingdom</option>
                          <option>Australia</option>
                          <option>Germany</option>
                          <option>France</option>
                          <option>Japan</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="flex justify-center">
                        <button type="submit" className="bg-[#f7f727] px-10 py-3 text-sm font-bold text-[#1a1a00] transition hover:bg-[#f5f545]">
                          Continue with Reservation
                        </button>
                      </div>
                      <p className="text-xs text-zinc-600 text-center">By continuing, you agree to our <a href="/terms" className="text-zinc-400 hover:text-[#f7f727] transition">Terms</a> and <a href="/privacy" className="text-zinc-400 hover:text-[#f7f727] transition">Privacy Policy</a>.</p>
                    </form>
                  </div>
                )}

                {/* Step 2 — Tier selection */}
                {reserveStep === 2 && (
                  <div>
                    <div className="text-xs tracking-[0.15em] text-[#f7f727] mb-1">STEP 2 / 3</div>
                    <h3 className="text-lg font-bold mb-1">Choose your reservation tier.</h3>
                    <p className="text-xs text-zinc-500 mb-5">You have not been charged yet.</p>

                    {/* Info banner */}
                    <div className="border border-[#f7f727]/20 bg-[#f7f727]/[0.04] p-4 mb-5">
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Priority tiers determine how early we sequence your reservation when production slots open. The $100 tier is the refundable place-in-line option. Non-refundable tiers receive stronger early access priority because they help fund long lead items, development, and pilot readiness.
                      </p>
                    </div>

                    {/* Tier cards */}
                    <div className="grid grid-cols-1 gap-2 mb-5 sm:grid-cols-3">
                      {tiers.map((tier, i) => (
                        <div
                          key={tier.name}
                          onClick={() => setSelectedTier(i)}
                          className="cursor-pointer border p-4 transition relative"
                          style={{
                            borderColor: selectedTier === i ? tier.color : "rgba(255,255,255,0.08)",
                            background: selectedTier === i ? `${tier.color}08` : "#0a0a0a",
                          }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 rounded-full border flex-shrink-0 flex items-center justify-center"
                              style={{borderColor: selectedTier === i ? tier.color : "rgba(255,255,255,0.2)"}}>
                              {selectedTier === i && <div className="w-1.5 h-1.5 rounded-full" style={{background: tier.color}} />}
                            </div>
                          </div>
                          <div className="text-sm font-bold text-white mb-1">{tier.name}</div>
                          <div className="text-base font-bold mb-1" style={{color: tier.color}}>{tier.price}</div>
                          <div className="text-[9px] tracking-[0.1em] mb-3" style={{color: tier.color, opacity: 0.7}}>{tier.tag}</div>
                          <p className="text-[11px] text-zinc-500 leading-relaxed">{tier.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Info notes */}
                    <div className="border border-white/[0.06] bg-zinc-900/30 p-4 mb-4 text-xs text-zinc-500 leading-relaxed flex flex-col gap-1">
                      <div>You have not been charged yet.</div>
                      <div>Deposits are credited toward the final purchase.</div>
                      <div>$100 is refundable until your slot is confirmed.</div>
                      <div>Non-refundable deposits fund long lead items and development.</div>
                      <div>Not a purchase contract.</div>
                    </div>

                    {/* Summary */}
                    <div className="border border-white/[0.06] p-4 mb-4 text-xs text-zinc-400">
                      <div>Name: <span className="text-white">{reserveForm.name}</span></div>
                      <div>Email: <span className="text-white">{reserveForm.email}</span></div>
                      <div>Country: <span className="text-white">{reserveForm.country}</span></div>
                      <button onClick={() => setReserveStep(1)} className="text-[#f7f727] hover:underline mt-2 block">Edit info</button>
                    </div>

                    {/* CTA */}
                    <CheckoutButton
                      tier={["reserve", "priority", "founders"][selectedTier]}
                      price={tiers[selectedTier].price}
                      name={reserveForm.name}
                      email={reserveForm.email}
                      country={reserveForm.country}
                    />
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-600"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      <span className="text-xs text-zinc-600">Secure checkout powered by Stripe</span>
                    </div>
                    <p className="text-xs text-zinc-600 text-center">By continuing, you agree to our <a href="/terms" className="text-zinc-400 hover:text-[#f7f727] transition">Reservation Terms</a> and <a href="/privacy" className="text-zinc-400 hover:text-[#f7f727] transition">Privacy Policy</a>.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Direct + Follow Us — below form */}
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2" style={{opacity:0, animation:"fadeUp 0.7s ease 0.4s forwards"}}>

          {/* Direct */}
          <div className="bg-zinc-900/40 border border-white/[0.06] p-8">
            <h3 className="text-lg font-bold mb-5">Direct</h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <div>
                Email:{" "}
                <a href="mailto:info@polysynth3d.com" className="text-white hover:text-[#f7f727] transition underline underline-offset-4">
                  info@polysynth3d.com
                </a>
              </div>
              <div>Location: San Francisco, CA</div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="bg-zinc-900/40 border border-white/[0.06] p-8">
            <h3 className="text-lg font-bold mb-6">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Instagram", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>, href: "https://www.instagram.com/polysynth3d/" },
                { label: "YouTube", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>, href: "https://www.youtube.com/channel/UCZiYvSaKiIzsTeoufnZqMdw" },
                { label: "TikTok", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>, href: "https://www.tiktok.com/@polysynth3d" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-white/[0.08] px-4 py-2 text-sm text-zinc-400 transition hover:border-white/20 hover:text-white">
                  {s.icon}{s.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
