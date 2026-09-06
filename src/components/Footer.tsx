import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, AtSign } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Phones", to: "/phones" },
      { label: "Laptops", to: "/laptops" },
      { label: "Gaming", to: "/gaming" },
      { label: "Gadgets", to: "/gadgets" },
      { label: "Hot Deals", to: "/deals" },
      { label: "Swap", to: "/swap" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Store", to: "/contact#store" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Delivery", to: "/delivery" },
      { label: "Returns", to: "/returns" },
      { label: "Warranty", to: "/warranty" },
      { label: "WhatsApp", to: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line/60 bg-ink text-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple via-brand-purple to-brand-pink shadow-[0_8px_20px_rgba(93,57,244,0.35)]">
              <span className="text-lg font-black text-white">F</span>
            </div>
            <span className="font-display text-2xl font-black tracking-[-0.05em] text-white">
              Falaa<span className="text-falaa">.</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-white/60">
            Your next device. At a Falaa deal.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-falaa hover:text-falaa">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-falaa hover:text-falaa">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Threads" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-falaa hover:text-falaa">
              <AtSign size={16} />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-sm font-semibold text-white">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/60 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-5">
        <p className="container-page text-xs text-white/40">© 2026 Falaa Deals</p>
      </div>
    </footer>
  );
}
