import React, { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { MessageCircle, ShoppingBag, Truck, RotateCcw } from "lucide-react";
import { getProduct, getRelated } from "@/data/products";
import PriceDisplay from "@/components/PriceDisplay";
import Badge from "@/components/Badge";
import WishlistButton from "@/components/WishlistButton";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/hooks/useCart";
import { getImageWithFallback, handleImageError } from "@/lib/media";
import { whatsappForProduct } from "@/lib/whatsapp";

export default function ProductDetail() {
  const { id } = useParams();
  const product = id ? getProduct(id) : undefined;
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) return <Navigate to="/404" replace />;

  const related = getRelated(product);
  const soldOut = product.status === "Sold Out";

  return (
    <div className="container-page py-10 sm:py-14">
      <nav className="mb-6 text-xs text-mist">
        <Link to="/" className="hover:text-ink">Home</Link> /{" "}
        <Link to={`/${product.category.toLowerCase()}`} className="hover:text-ink">{product.category}</Link> /{" "}
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Gallery */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-mist/10">
            <img src={getImageWithFallback(product.images[activeImage])} alt={product.name} onError={handleImageError} className="h-full w-full object-cover" />
          </div>
          {product.images.length > 1 && (
            <div className="mt-3 flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`h-16 w-16 overflow-hidden rounded-lg border-2 ${
                    activeImage === i ? "border-falaa" : "border-transparent"
                  }`}
                >
                  <img src={getImageWithFallback(img)} alt="" onError={handleImageError} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {product.isDeal && <Badge tone="accent">Deal</Badge>}
            <Badge tone="dark">{product.condition}</Badge>
            {product.status !== "In Stock" && <Badge tone="outline">{product.status}</Badge>}
          </div>

          <h1 className="font-display text-2xl font-bold sm:text-3xl">{product.name}</h1>
          <p className="mt-2 text-sm text-mist">
            {[product.storage, product.ram, product.color].filter(Boolean).join(" · ")}
          </p>

          <div className="mt-5">
            <PriceDisplay price={product.price} oldPrice={product.oldPrice} size="lg" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 rounded-xl border border-line/60 p-4 text-sm sm:grid-cols-2">
            {product.batteryHealth && <SpecRow label="Battery Health" value={product.batteryHealth} />}
            {product.network && <SpecRow label="Network" value={product.network} />}
            <SpecRow label="Warranty" value={product.warranty ?? "Not specified — ask on WhatsApp"} />
            <SpecRow label="Availability" value={product.status} />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              disabled={soldOut}
              onClick={() => {
                addItem(product.id);
                setAdded(true);
                setTimeout(() => setAdded(false), 1600);
              }}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ShoppingBag size={17} /> {added ? "Added!" : "Add to Cart"}
            </button>
            <Link
              to="/checkout"
              onClick={() => addItem(product.id)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full bg-falaa px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-falaa-dark ${
                soldOut ? "pointer-events-none opacity-40" : ""
              }`}
            >
              Buy Now
            </Link>
            <div className="flex gap-3">
              <button
                onClick={() => whatsappForProduct(product)}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-[#25D366] transition hover:bg-[#25D366]/10"
                aria-label="WhatsApp about this product"
              >
                <MessageCircle size={18} />
              </button>
              <WishlistButton productId={product.id} name={product.name} />
            </div>
          </div>

          <div className="mt-8 space-y-6 border-t border-line/60 pt-6">
            <div>
              <h2 className="mb-2 font-display text-base font-semibold">Description</h2>
              <p className="text-sm leading-relaxed text-ink/75">{product.description}</p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-base font-semibold">Specifications</h2>
              <ul className="space-y-1.5 text-sm">
                {product.specs.map((s) => (
                  <li key={s.label} className="flex justify-between border-b border-dashed border-line/60 py-1.5">
                    <span className="text-mist">{s.label}</span>
                    <span className="font-medium">{s.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-2 font-display text-base font-semibold">What&rsquo;s Included</h2>
              <ul className="list-inside list-disc space-y-1 text-sm text-ink/75">
                {product.whatsInBox.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <InfoNote icon={<Truck size={16} />} title="Delivery" text="Same-day delivery within Accra, nationwide shipping available." />
              <InfoNote icon={<RotateCcw size={16} />} title="Returns / Exchange" text="See our returns policy for eligible items and timelines." />
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 font-display text-xl font-bold sm:text-2xl">You May Also Like</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-mist">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

function InfoNote({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-3 rounded-xl border border-line/60 p-4">
      <span className="mt-0.5 text-falaa">{icon}</span>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-0.5 text-xs text-mist">{text}</p>
      </div>
    </div>
  );
}
