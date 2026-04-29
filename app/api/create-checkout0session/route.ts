import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

const TIERS = {
  reserve: {
    name: "The Reserve",
    amount: 10000, // $100.00 in cents
    description: "Fully refundable deposit. Secures your place in line for the Polysynth P1.",
  },
  priority: {
    name: "Our Priority",
    amount: 75000, // $750.00 in cents
    description: "Priority queue placement. Non-refundable. Credited toward final purchase.",
  },
  founders: {
    name: "Founders",
    amount: 250000, // $2,500.00 in cents
    description: "Highest priority placement with founder recognition. Non-refundable. Credited toward final purchase.",
  },
};

export async function POST(req: NextRequest) {
  try {
    const { tier, name, email, country } = await req.json();

    const tierData = TIERS[tier as keyof typeof TIERS];
    if (!tierData) {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || "https://polysynth.vercel.app";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Polysynth P1 — ${tierData.name}`,
              description: tierData.description,
            },
            unit_amount: tierData.amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email,
      metadata: {
        name,
        email,
        country,
        tier: tierData.name,
      },
      success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}&tier=${tier}`,
      cancel_url: `${origin}/contact?tab=reserve`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
