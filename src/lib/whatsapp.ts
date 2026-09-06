import { Product } from "@/types";
import { formatGHS } from "./format";

// DEMO number — replace with the real Falaa Deals WhatsApp business number.
const FALAA_WHATSAPP_NUMBER = "233200000000";

const openWhatsApp = (message: string) => {
  const url = `https://wa.me/${FALAA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export const whatsappForProduct = (product: Product) => {
  const message = `Hi Falaa Deals, I'm interested in the ${product.name}${
    product.storage ? ` ${product.storage}` : ""
  } listed at ${formatGHS(product.price)}.`;
  openWhatsApp(message);
};

export const whatsappForSwap = (from: string, to: string, condition: string, topUp: number) => {
  const message = `Hi Falaa Deals, I'd like a swap quote. My current device: ${from}. Device I want: ${to}. Condition: ${condition}. Estimated top-up shown: ${formatGHS(
    topUp
  )}.`;
  openWhatsApp(message);
};

export const whatsappGeneral = (context?: string) => {
  openWhatsApp(context ? `Hi Falaa Deals, ${context}` : "Hi Falaa Deals, I have a question.");
};
