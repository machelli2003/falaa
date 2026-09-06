import React from "react";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Verified Devices",
  "Same-Day WhatsApp Support",
  "Warranty Backed",
  "Accra Store Pickup",
];

export default function TrustBar() {
  return (
    <div className="border-y border-line/60 bg-white">
      <div className="container-page grid grid-cols-2 gap-4 py-5 sm:grid-cols-4 sm:gap-6">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm font-medium text-ink/80">
            <CheckCircle2 size={16} className="shrink-0 text-falaa" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
