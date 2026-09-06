import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Truck, MapPin, Instagram, Navigation } from "lucide-react";
import TrustBar from "@/components/TrustBar";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import SwapCalculator from "@/components/SwapCalculator";
import TestimonialCard from "@/components/TestimonialCard";
import { products, testimonials } from "@/data/products";
import { getImageWithFallback, handleImageError } from "@/lib/media";
import { whatsappGeneral } from "@/lib/whatsapp";

const deals = products.filter((p) => p.isDeal).slice(0, 4);
const phones = products.filter((p) => p.category === "Phones").slice(0, 4);

const socialGrid = [
  "photo-1695048133142-1a20484d2569",
  "photo-1517336714731-489689fd1ca8",
  "photo-1606813907291-d86efa9b94db",
  "photo-1610945415295-d9bbf067e59c",
  "photo-1606220838315-056192d5e927",
  "photo-1663499482523-1c0c1bae4ce1",
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(80,184,120,0.24),_transparent_35%)]" />
        <div className="container-page relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
              <span className="h-2 w-2 rounded-full bg-falaa" />
              Premium tech for everyday life
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              SMART DEVICES.
              <br />
              REAL DEALS.
            </h1>
            <p className="mt-5 max-w-lg text-base text-white/65 sm:text-lg">
              Premium phones, laptops, gaming gear and gadgets from a trusted Accra-based shop — backed by verified condition,
              honest pricing and WhatsApp support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/deals"
                className="inline-flex items-center justify-center rounded-full bg-falaa px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-falaa-dark"
              >
                Shop Hot Deals
              </Link>
              <Link
                to="/swap"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white"
              >
                Trade In Your Device
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-5 text-sm text-white/75">
              <span>✅ Verified & unlocked</span>
              <span>✅ 30-day warranty</span>
              <span>✅ Same-day support</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-charcoal sm:aspect-[5/4]">
              <img
                src={getImageWithFallback("https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80")}
                alt="Premium smartphone from the Falaa Deals catalogue"
                onError={handleImageError}
                className="h-full w-full object-cover"
              />
            </div>
            <FloatCard className="left-3 top-6 sm:-left-6" label="PREMIUM USED" />
            <FloatCard className="right-3 top-1/3 sm:-right-6" label="96% BATTERY" />
            <FloatCard className="bottom-6 left-6 sm:-bottom-4" label="VERIFIED · UNLOCKED" />
          </motion.div>
        </div>
      </section>

      <TrustBar />

      <section className="bg-white py-8 sm:py-10">
        <div className="container-page">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-falaa">Why people choose us</p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Built for trust. Designed to convert.</h2>
            </div>
            <div className="rounded-full border border-line bg-mist/10 px-3 py-1.5 text-xs font-medium text-ink/70">
              Free delivery on orders above GH₵ 5,000
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "500+", label: "Devices sold" },
              { value: "24 hrs", label: "Fast WhatsApp replies" },
              { value: "96%", label: "Average battery health" },
              { value: "4.9/5", label: "Customer satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-line/60 bg-mist/5 p-5">
                <p className="font-display text-3xl font-bold text-ink">{stat.value}</p>
                <p className="mt-1 text-sm text-mist">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <div className="rounded-[28px] border border-line/60 bg-mist/10 p-5 sm:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-falaa">How it works</p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Simple, fast, and confidence-building.</h2>
            </div>
            <Link to="/swap" className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-charcoal">
              Get a trade-in quote
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["1", "Browse trusted devices"],
              ["2", "Compare specs and pricing"],
              ["3", "Chat, buy, or trade in"],
            ].map(([step, label]) => (
              <div key={step} className="rounded-2xl border border-line bg-white p-4">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-falaa/10 font-display text-lg font-bold text-falaa">
                  {step}
                </div>
                <p className="text-sm font-medium text-ink">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOT DEALS */}
      <section className="container-page py-16 sm:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">The Deals Are Hot 🔥</h2>
            <p className="mt-1.5 text-sm text-mist">Limited deals. Serious savings. Fresh arrivals this week.</p>
          </div>
          <Link to="/deals" className="text-sm font-semibold text-falaa hover:text-falaa-dark">
            View all deals →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {deals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="container-page py-8 sm:py-12">
        <h2 className="mb-8 font-display text-2xl font-bold sm:text-3xl">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          <CategoryCard
            to="/phones"
            title="Phones"
            subtitle="Find your next phone"
            image="https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&w=700&q=80"
          />
          <CategoryCard
            to="/laptops"
            title="Laptops"
            subtitle="Work. Create. Play."
            image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80"
          />
          <CategoryCard
            to="/gaming"
            title="Gaming"
            subtitle="Level up."
            image="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=700&q=80"
          />
          <CategoryCard
            to="/gadgets"
            title="Gadgets"
            subtitle="Upgrade your setup."
            image="https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&w=700&q=80"
          />
        </div>
      </section>

      {/* PHONE COLLECTION PREVIEW */}
      <section className="container-page py-16 sm:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Find Your Next Phone</h2>
          <Link to="/phones" className="text-sm font-semibold text-falaa hover:text-falaa-dark">
            View all phones →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {phones.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* SWAP */}
      <section className="bg-ink py-16 sm:py-20">
        <div className="container-page">
          <div className="mb-9 max-w-xl">
            <h2 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              YOUR OLD PHONE COULD BE YOUR NEXT UPGRADE.
            </h2>
            <p className="mt-3 text-sm text-white/60 sm:text-base">
              Bring your current device. Tell us what you want. We&rsquo;ll help you figure out the difference.
            </p>
          </div>
          <SwapCalculator />
        </div>
      </section>

      {/* WHY FALAA */}
      <section className="container-page py-16 sm:py-20">
        <h2 className="mb-9 font-display text-2xl font-bold sm:text-3xl">Why Shop With Falaa?</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          <WhyCard
            icon={<BadgeCheck size={20} />}
            title="Real Deals"
            text="Competitive pricing on new and premium-used devices with honest market value."
          />
          <WhyCard
            icon={<ShieldCheck size={20} />}
            title="Device Transparency"
            text="Every device is inspected, battery-checked and clearly described before purchase."
          />
          <WhyCard
            icon={<MapPin size={20} />}
            title="Physical Store"
            text="Visit us in Accra, test your option in person and trade in with confidence."
          />
          <WhyCard
            icon={<Truck size={20} />}
            title="Fast Response"
            text="Need help fast? Chat directly with the Falaa team and get a quote in minutes."
          />
        </div>
      </section>

      {/* SOCIAL */}
      <section className="container-page py-8 sm:py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Follow the Deals.</h2>
            <p className="mt-1.5 text-sm text-mist">New stock. Fresh deals. Daily drops. @falaadeals_gh</p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-semibold hover:border-falaa hover:text-falaa"
          >
            <Instagram size={16} /> Follow on Instagram
          </a>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
          {socialGrid.map((seed, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl bg-mist/10">
              <img
                src={getImageWithFallback(`https://images.unsplash.com/${seed}?auto=format&fit=crop&w=400&q=70`)}
                alt="Website mockup placeholder"
                loading="lazy"
                onError={handleImageError}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-mist">Mockup placeholders — not live Instagram posts.</p>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="mb-9 flex items-center gap-2">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">What Customers Say</h2>
            <span className="rounded-full bg-mist/10 px-2.5 py-1 text-xs text-mist">Demo testimonials</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* STORE LOCATION */}
      <section className="container-page py-16 sm:py-20">
        <h2 className="mb-8 font-display text-2xl font-bold sm:text-3xl">Come See Us.</h2>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-line/60 bg-gradient-to-br from-brand-purple/10 via-white to-brand-pink/10">
            <div className="flex h-full min-h-[220px] flex-col justify-between bg-[radial-gradient(circle_at_center,_rgba(93,57,244,0.18),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.8),_rgba(255,255,255,0.95))] p-5">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                  <Navigation size={20} />
                </div>
                <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-purple">Accra, Ghana</span>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">Store Location</p>
                <p className="mt-2 font-display text-xl font-bold text-ink">Falaa Deals</p>
                <p className="mt-1 text-sm text-mist">North Legon, Accra</p>
                <div className="mt-4 h-20 rounded-xl bg-[radial-gradient(circle_at_top,_rgba(244,199,107,0.35),_transparent_25%),linear-gradient(135deg,_rgba(93,57,244,0.15),_rgba(236,79,125,0.18))]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-line/60 p-7">
            <h3 className="font-display text-xl font-semibold">Falaa Deals</h3>
            <p className="mt-1 text-sm text-mist">Accra, Ghana</p>
            <p className="mt-4 text-sm text-ink/70">
              <span className="font-medium">Mon – Sat</span> · Hours shown as a placeholder pending confirmation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-charcoal"
              >
                Get Directions
              </a>
              <button
                onClick={() => whatsappGeneral()}
                className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:brightness-95"
              >
                Chat on WhatsApp
              </button>
            </div>
            <p className="mt-4 text-xs text-mist">Accra-based service • trade-in support • delivery coordination</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function FloatCard({ label, className }: { label: string; className: string }) {
  return (
    <div
      className={`absolute z-10 rounded-xl border border-line/60 bg-white/95 px-3 py-2 text-[11px] font-semibold tracking-wide text-ink shadow-premium backdrop-blur ${className}`}
    >
      {label}
    </div>
  );
}

function WhyCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-line/60 p-6">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-falaa/10 text-falaa">
        {icon}
      </div>
      <h3 className="font-display text-base font-semibold">{title}</h3>
      <p className="mt-1.5 text-sm text-mist">{text}</p>
    </div>
  );
}
