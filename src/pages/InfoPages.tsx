import React, { useState } from "react";
import { MessageCircle, ChevronDown } from "lucide-react";
import { whatsappGeneral } from "@/lib/whatsapp";

function InfoShell({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <div className="container-page py-14 sm:py-20">
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-mist sm:text-base">{intro}</p>
      </div>
      <div className="mt-9 max-w-2xl space-y-6 text-sm leading-relaxed text-ink/80">{children}</div>
    </div>
  );
}

export function About() {
  return (
    <InfoShell
      title="About Falaa Deals"
      intro="A Ghana-based electronics and mobile-gadget business with a physical presence in Accra."
    >
      <p>
        Falaa Deals sells phones, laptops, gaming consoles and gadgets — new and premium-used — and helps customers
        swap their current device toward an upgrade. We work primarily through WhatsApp and our Accra store, so you
        can inspect a device before you commit.
      </p>
      <p className="text-xs text-mist">
        Prototype note: this page is placeholder copy for demonstration and should be reviewed and approved by
        Falaa Deals before launch.
      </p>
    </InfoShell>
  );
}

export function Contact() {
  return (
    <InfoShell title="Contact Us" intro="The fastest way to reach us is WhatsApp — we usually reply quickly.">
      <div id="store" className="rounded-2xl border border-line/60 p-6">
        <h2 className="font-display text-base font-semibold">Store</h2>
        <p className="mt-1 text-mist">Falaa Deals, Accra, Ghana</p>
        <p className="mt-1 text-mist">Mon – Sat (hours shown as a placeholder pending confirmation)</p>
      </div>
      <button
        onClick={() => whatsappGeneral()}
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:brightness-95"
      >
        <MessageCircle size={16} /> Chat on WhatsApp
      </button>
    </InfoShell>
  );
}

const FAQ_ITEMS = [
  { q: "Are premium-used devices tested?", a: "Yes — every premium-used device is inspected, battery-tested and functionally verified before it's listed." },
  { q: "Can I swap my phone toward a new one?", a: "Yes, use the Swap page to get an estimated top-up, then confirm the final quote in-store or on WhatsApp." },
  { q: "Do you deliver outside Accra?", a: "We offer nationwide delivery in addition to Accra same-day delivery and store pickup." },
  { q: "How do I pay?", a: "You can pay online once Paystack integration is live, or pay on confirmation after we verify your order on WhatsApp." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <InfoShell title="Frequently Asked Questions" intro="Answers to what customers ask us most often.">
      <div className="divide-y divide-line/60 rounded-2xl border border-line/60">
        {FAQ_ITEMS.map((item, i) => (
          <div key={item.q}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
              aria-expanded={open === i}
            >
              <span className="font-medium">{item.q}</span>
              <ChevronDown size={16} className={`shrink-0 transition ${open === i ? "rotate-180 text-falaa" : "text-mist"}`} />
            </button>
            {open === i && <p className="px-5 pb-5 text-mist">{item.a}</p>}
          </div>
        ))}
      </div>
    </InfoShell>
  );
}

export function Delivery() {
  return (
    <InfoShell title="Delivery" intro="How your order gets to you.">
      <ul className="list-inside list-disc space-y-2">
        <li>Same-day delivery within Accra on most orders placed before 3pm.</li>
        <li>Nationwide delivery available — timing depends on your location.</li>
        <li>Free store pickup at our Accra location.</li>
        <li>A flat delivery fee applies at checkout for home delivery.</li>
      </ul>
    </InfoShell>
  );
}

export function Returns() {
  return (
    <InfoShell title="Returns / Exchange" intro="What to do if something isn't right.">
      <ul className="list-inside list-disc space-y-2">
        <li>Contact us on WhatsApp within the return window shown on your product page.</li>
        <li>Devices must be returned in the condition they were received, with all included items.</li>
        <li>Premium-used devices are inspected again on return to confirm condition.</li>
        <li>Refunds or exchanges are processed once the returned item is verified.</li>
      </ul>
    </InfoShell>
  );
}

export function Warranty() {
  return (
    <InfoShell title="Warranty" intro="Coverage on devices sold through Falaa Deals.">
      <ul className="list-inside list-disc space-y-2">
        <li>Premium-used devices include a 30-day Falaa warranty against functional faults.</li>
        <li>New, sealed devices carry the manufacturer's standard warranty.</li>
        <li>Warranty does not cover accidental damage, liquid damage or unauthorized repairs.</li>
        <li>To make a warranty claim, message us on WhatsApp with your order details.</li>
      </ul>
    </InfoShell>
  );
}
