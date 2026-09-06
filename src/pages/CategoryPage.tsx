import React, { useMemo, useState } from "react";
import { products } from "@/data/products";
import { Category } from "@/types";
import ProductCard from "@/components/ProductCard";
import FilterBar, { SortOption } from "@/components/FilterBar";

const HEADLINES: Record<Category, { title: string; subtitle: string }> = {
  Phones: { title: "Find Your Next Phone", subtitle: "iPhone, Samsung, Google and more." },
  Laptops: { title: "Work. Create. Play.", subtitle: "MacBook, Dell, HP, Lenovo and gaming laptops." },
  Gaming: { title: "Game Different.", subtitle: "Consoles, controllers and accessories." },
  Gadgets: { title: "Upgrade Your Setup.", subtitle: "Audio, wearables and everyday essentials." },
  Accessories: { title: "Accessories", subtitle: "Chargers, cables and more." },
};

export default function CategoryPage({ category }: { category: Category }) {
  const all = useMemo(() => products.filter((p) => p.category === category), [category]);
  const brands = useMemo(() => ["All", ...Array.from(new Set(all.map((p) => p.brand)))], [all]);

  const [brand, setBrand] = useState("All");
  const [condition, setCondition] = useState("All");
  const [sort, setSort] = useState<SortOption>("featured");

  const filtered = useMemo(() => {
    let list = all;
    if (brand !== "All") list = list.filter((p) => p.brand === brand);
    if (condition !== "All") list = list.filter((p) => p.condition === condition);

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "newest":
        list = [...list].sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
        break;
      case "deals":
        list = list.filter((p) => p.isDeal);
        break;
    }
    return list;
  }, [all, brand, condition, sort]);

  const { title, subtitle } = HEADLINES[category];

  return (
    <div className="container-page py-12 sm:py-16">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-mist">{subtitle}</p>

      <div className="mt-8">
        <FilterBar
          brands={brands}
          activeBrand={brand}
          onBrand={setBrand}
          condition={condition}
          onCondition={setCondition}
          sort={sort}
          onSort={setSort}
          resultCount={filtered.length}
        />
      </div>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-line py-20 text-center">
      <p className="font-display text-lg font-semibold">No products match these filters</p>
      <p className="mt-1 text-sm text-mist">Try a different brand, condition or sort option.</p>
    </div>
  );
}
