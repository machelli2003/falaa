import React from "react";

export type SortOption = "featured" | "price-asc" | "price-desc" | "newest" | "deals";

interface FilterBarProps {
  brands: string[];
  activeBrand: string;
  onBrand: (b: string) => void;
  condition: string;
  onCondition: (c: string) => void;
  sort: SortOption;
  onSort: (s: SortOption) => void;
  resultCount: number;
}

const CONDITIONS = ["All", "New", "Premium Used"];
const SORTS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "newest", label: "Newest" },
  { value: "deals", label: "Deals" },
];

export default function FilterBar({
  brands, activeBrand, onBrand, condition, onCondition, sort, onSort, resultCount,
}: FilterBarProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 border-b border-line/60 pb-5">
      <div className="flex flex-wrap gap-2">
        {brands.map((b) => (
          <button
            key={b}
            onClick={() => onBrand(b)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
              activeBrand === b
                ? "border-ink bg-ink text-white"
                : "border-line text-ink/70 hover:border-ink"
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs text-mist">{resultCount} products</span>
          <div className="flex gap-1.5">
            {CONDITIONS.map((c) => (
              <button
                key={c}
                onClick={() => onCondition(c)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                  condition === c ? "bg-falaa/10 text-falaa" : "text-mist hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <select
          value={sort}
          onChange={(e) => onSort(e.target.value as SortOption)}
          className="rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-medium outline-none focus-visible:border-falaa"
        >
          {SORTS.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
