import React, { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { formatGHS } from "@/lib/format";
import { whatsappForSwap } from "@/lib/whatsapp";

const DEVICES = [
  "iPhone 12", "iPhone 13", "iPhone 13 Pro", "iPhone 14", "iPhone 14 Pro",
  "iPhone 15", "iPhone 15 Pro", "Samsung Galaxy S22", "Samsung Galaxy S23",
];
const UPGRADES = [
  "iPhone 14 Pro", "iPhone 15", "iPhone 15 Pro", "iPhone 15 Pro Max",
  "Samsung Galaxy S24 Ultra", "MacBook Air M2",
];
const CONDITIONS = ["Excellent", "Good", "Fair"];

// Demo-only estimate logic, not a real valuation engine.
const estimateTopUp = (from: string, to: string, condition: string) => {
  const base = (DEVICES.indexOf(from) + 1) * 350 + (UPGRADES.indexOf(to) + 1) * 900;
  const conditionFactor = condition === "Excellent" ? 1 : condition === "Good" ? 1.15 : 1.3;
  return Math.round((base * conditionFactor) / 50) * 50;
};

export default function SwapCalculator() {
  const [from, setFrom] = useState(DEVICES[2]);
  const [to, setTo] = useState(UPGRADES[2]);
  const [condition, setCondition] = useState(CONDITIONS[0]);

  const topUp = useMemo(() => estimateTopUp(from, to, condition), [from, to, condition]);

  return (
    <div className="rounded-3xl bg-charcoal p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Step 1 — Current device">
          <Select value={from} onChange={setFrom} options={DEVICES} />
        </Field>
        <Field label="Step 2 — Device you want">
          <Select value={to} onChange={setTo} options={UPGRADES} />
        </Field>
        <Field label="Step 3 — Condition">
          <Select value={condition} onChange={setCondition} options={CONDITIONS} />
        </Field>
      </div>

      <div className="mt-7 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs uppercase tracking-wide text-white/50">Estimated top-up</p>
          <p className="mt-1 font-display text-3xl font-semibold text-falaa sm:text-4xl">
            {formatGHS(topUp)}
          </p>
          <p className="mt-1 text-xs text-white/40">Demo estimate. Final quote is confirmed in-store or on WhatsApp.</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <button
            onClick={() => whatsappForSwap(from, to, condition, topUp)}
            className="rounded-full bg-falaa px-6 py-3 text-sm font-semibold text-white transition hover:bg-falaa-dark"
          >
            Request Swap Quote
          </button>
          <button
            onClick={() => whatsappForSwap(from, to, condition, topUp)}
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#25D366] hover:text-[#25D366]"
          >
            <MessageCircle size={16} /> Chat on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium text-white/50">{label}</span>
      {children}
    </label>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-white/15 bg-ink px-3.5 py-3 text-sm text-white outline-none focus-visible:border-falaa"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );
}
