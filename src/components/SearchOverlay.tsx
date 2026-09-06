import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Search as SearchIcon } from "lucide-react";
import { products } from "@/data/products";
import { formatGHS } from "@/lib/format";
import { getImageWithFallback, handleImageError } from "@/lib/media";

const POPULAR = ["iPhone 15", "MacBook", "PS5", "AirPods", "Samsung"];

export default function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products
      .filter((p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query]);

  const go = (id: string) => {
    navigate(`/product/${id}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/70 px-4 pt-20 backdrop-blur-sm sm:pt-28">
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-premium">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <SearchIcon size={18} className="text-mist" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search phones, laptops, gaming, gadgets..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-mist"
          />
          <button onClick={onClose} aria-label="Close search" className="rounded-full p-1 hover:bg-mist/10">
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3">
          {!query && (
            <div className="px-2 py-2">
              <p className="mb-2 text-xs font-medium text-mist">Popular searches</p>
              <div className="flex flex-wrap gap-2">
                {POPULAR.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="rounded-full border border-line px-3 py-1.5 text-xs hover:border-falaa hover:text-falaa"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && results.length === 0 && (
            <p className="px-2 py-6 text-center text-sm text-mist">
              No products found for &ldquo;{query}&rdquo;.
            </p>
          )}

          {results.map((p) => (
            <button
              key={p.id}
              onClick={() => go(p.id)}
              className="flex w-full items-center gap-3 rounded-xl p-2 text-left hover:bg-mist/10"
            >
              <img src={getImageWithFallback(p.images[0])} alt="" onError={handleImageError} className="h-12 w-12 rounded-lg object-cover" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{p.name}</p>
                <p className="text-xs text-mist">{p.category}</p>
              </div>
              <span className="text-sm font-semibold text-falaa">{formatGHS(p.price)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
