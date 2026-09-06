import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import { getProduct } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Wishlist() {
  const { ids } = useWishlist();
  const { addItem } = useCart();
  const products = ids.map(getProduct).filter(Boolean) as NonNullable<ReturnType<typeof getProduct>>[];

  if (products.length === 0) {
    return (
      <div className="container-page flex flex-col items-center justify-center py-24 text-center">
        <Heart size={40} className="mb-4 text-mist" />
        <h1 className="font-display text-xl font-bold">Your wishlist is empty</h1>
        <p className="mt-1.5 text-sm text-mist">Tap the heart on any product to save it here.</p>
        <Link to="/deals" className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-charcoal">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-12 sm:py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">Your Wishlist</h1>
        <button
          onClick={() => products.forEach((p) => addItem(p.id))}
          className="flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-semibold text-white hover:bg-charcoal"
        >
          <ShoppingBag size={14} /> Add All to Cart
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
