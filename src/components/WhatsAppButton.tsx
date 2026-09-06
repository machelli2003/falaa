import React from "react";
import { MessageCircle } from "lucide-react";
import { whatsappGeneral } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <button
      type="button"
      onClick={() => whatsappGeneral()}
      aria-label="Chat with Falaa Deals on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-premium transition hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={20} className="fill-white/15" />
      <span className="hidden text-sm font-semibold sm:inline">Chat on WhatsApp</span>
    </button>
  );
}
