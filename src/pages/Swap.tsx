import React from "react";
import { MessageCircle } from "lucide-react";
import SwapCalculator from "@/components/SwapCalculator";
import { whatsappGeneral } from "@/lib/whatsapp";

export default function Swap() {
  return (
    <div className="bg-ink py-14 sm:py-20">
      <div className="container-page">
        <div className="max-w-xl">
          <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            YOUR OLD PHONE COULD BE YOUR NEXT UPGRADE.
          </h1>
          <p className="mt-3 text-sm text-white/60 sm:text-base">
            Bring your current device. Tell us what you want. We&rsquo;ll help you figure out the difference.
          </p>
        </div>

        <div className="mt-9">
          <SwapCalculator />
        </div>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
          <p className="text-sm text-white/50">Prefer to talk to someone?</p>
          <button
            onClick={() => whatsappGeneral("I'd like to talk to someone about a phone swap.")}
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:brightness-95"
          >
            <MessageCircle size={16} /> Chat on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
