import React from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Deals() {
  const deals = products.filter((p) => p.isDeal);

  return (
    <div className="container-page py-12 sm:py-16">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">The Deals Are Hot 🔥</h1>
      <p className="mt-2 text-sm text-mist">Limited deals. Serious savings. Demo prices for prototype purposes.</p>

      <div className="mt-9 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {deals.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
