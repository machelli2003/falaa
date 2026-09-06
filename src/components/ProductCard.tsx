import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { Product } from "@/types";
import PriceDisplay from "./PriceDisplay";
import Badge from "./Badge";
import WishlistButton from "./WishlistButton";
import { useCart } from "@/hooks/useCart";
import { whatsappForProduct } from "@/lib/whatsapp";
import { getImageWithFallback, handleImageError } from "@/lib/media";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const soldOut = product.status === "Sold Out";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line/60 bg-white shadow-sm"
    >
      <Link to={`/product/${product.id}`} className="relative block aspect-[4/5] overflow-hidden bg-mist/10">
        <motion.img
          src={getImageWithFallback(product.images[0])}
          alt={product.name}
          loading="lazy"
          onError={handleImageError}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.isDeal && <Badge tone="accent">Deal</Badge>}
          <Badge tone="dark">{product.condition}</Badge>
        </div>
        <div className="absolute right-3 top-3">
          <WishlistButton productId={product.id} name={product.name} />
        </div>
        {product.status === "Low Stock" && (
          <div className="absolute bottom-3 left-3">
            <Badge tone="outline" className="bg-white/90">Low Stock</Badge>
          </div>
        )}
        {soldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-ink/60">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold">Sold Out</span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="line-clamp-1 font-display text-[15px] font-semibold">{product.name}</h3>
        </Link>
        <p className="line-clamp-1 text-xs text-mist">
          {[product.storage, product.color, product.batteryHealth && `${product.batteryHealth} battery`]
            .filter(Boolean)
            .join(" · ")}
        </p>
        <PriceDisplay price={product.price} oldPrice={product.oldPrice} size="sm" />

        <div className="mt-2 flex gap-2">
          <motion.button
            whileTap={{ scale: 0.98 }}
            type="button"
            disabled={soldOut}
            onClick={() => addItem(product.id)}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink px-3 py-2 text-xs font-semibold text-white transition hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ShoppingBag size={14} /> Add to Cart
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.96 }}
            type="button"
            onClick={() => whatsappForProduct(product)}
            aria-label={`Chat on WhatsApp about ${product.name}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-[#25D366] transition hover:bg-[#25D366]/10"
          >
            <MessageCircle size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
