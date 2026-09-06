import React from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { getProduct } from "@/data/products";
import { formatGHS } from "@/lib/format";
import { getImageWithFallback, handleImageError } from "@/lib/media";
import { whatsappGeneral } from "@/lib/whatsapp";

const DELIVERY_FEE = 30;

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-page flex flex-col items-center justify-center py-24 text-center">
        <ShoppingBag size={40} className="mb-4 text-mist" />
        <h1 className="font-display text-xl font-bold">Your cart is empty</h1>
        <p className="mt-1.5 text-sm text-mist">Browse our catalogue and add a device to get started.</p>
        <Link to="/deals" className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-charcoal">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const total = subtotal + DELIVERY_FEE;

  return (
    <div className="container-page py-12 sm:py-16">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">Your Cart</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="divide-y divide-line/60 rounded-2xl border border-line/60">
          {items.map((item) => {
            const product = getProduct(item.productId);
            if (!product) return null;
            return (
              <div key={item.productId} className="flex gap-4 p-4 sm:p-5">
                <img src={getImageWithFallback(product.images[0])} alt={product.name} onError={handleImageError} className="h-20 w-20 shrink-0 rounded-lg object-cover" />
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between gap-2">
                    <Link to={`/product/${product.id}`} className="font-display text-sm font-semibold hover:text-falaa sm:text-base">
                      {product.name}
                    </Link>
                    <button
                      onClick={() => removeItem(product.id)}
                      aria-label={`Remove ${product.name}`}
                      className="text-mist hover:text-falaa"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="text-xs text-mist">{product.storage ?? product.category}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full border border-line px-2 py-1">
                      <button
                        onClick={() => updateQuantity(product.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-mist/10"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="w-5 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-mist/10"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                    <span className="font-display text-sm font-semibold text-falaa">
                      {formatGHS(product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <div className="rounded-2xl border border-line/60 p-6">
            <h2 className="font-display text-lg font-semibold">Order Summary</h2>
            <div className="mt-4 space-y-2.5 text-sm">
              <div className="flex justify-between"><span className="text-mist">Subtotal</span><span>{formatGHS(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-mist">Delivery</span><span>{formatGHS(DELIVERY_FEE)}</span></div>
              <div className="flex justify-between border-t border-line/60 pt-2.5 font-display font-semibold">
                <span>Total</span><span className="text-falaa">{formatGHS(total)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="mt-6 block rounded-full bg-falaa py-3.5 text-center text-sm font-semibold text-white hover:bg-falaa-dark"
            >
              Checkout
            </Link>
            <Link
              to="/deals"
              className="mt-3 block rounded-full border border-line py-3.5 text-center text-sm font-semibold hover:border-ink"
            >
              Continue Shopping
            </Link>
          </div>

          <div className="mt-5 flex items-center justify-between rounded-2xl border border-line/60 p-5">
            <div>
              <p className="text-sm font-medium">Need help?</p>
              <p className="text-xs text-mist">We reply fast on WhatsApp.</p>
            </div>
            <button
              onClick={() => whatsappGeneral("I have a question about my cart.")}
              className="flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white hover:brightness-95"
            >
              <MessageCircle size={14} /> WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
