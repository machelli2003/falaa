import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CheckCircle2, Store, Truck, CreditCard, MessageCircleMore } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { getProduct } from "@/data/products";
import { formatGHS } from "@/lib/format";

const DELIVERY_FEE = 30;

export default function Checkout() {
  const { items, subtotal, clear } = useCart();
  const [delivery, setDelivery] = useState<"pickup" | "delivery">("delivery");
  const [payment, setPayment] = useState<"online" | "confirmation">("confirmation");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [placed, setPlaced] = useState(false);

  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", city: "", notes: "" });

  const fee = delivery === "delivery" ? DELIVERY_FEE : 0;
  const total = subtotal + fee;

  if (items.length === 0 && !placed) return <Navigate to="/cart" replace />;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!/^[0-9+ ]{9,}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
    if (delivery === "delivery" && !form.location.trim()) e.location = "Delivery location is required.";
    if (delivery === "delivery" && !form.city.trim()) e.city = "City is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setPlaced(true);
    clear();
  };

  if (placed) {
    return (
      <div className="container-page flex flex-col items-center justify-center py-24 text-center">
        <CheckCircle2 size={44} className="mb-4 text-falaa" />
        <h1 className="font-display text-2xl font-bold">Order details captured</h1>
        <p className="mt-2 max-w-sm text-sm text-mist">
          This is a prototype checkout — no real order was placed or charged. In the live platform, this step
          confirms your order and payment via Paystack.
        </p>
        <Link to="/" className="mt-7 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-charcoal">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-12 sm:py-16">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">Checkout</h1>
      <p className="mt-2 max-w-lg text-sm text-mist">
        Prototype checkout — no real payment is processed. Structured to support Paystack integration later.
      </p>

      <form onSubmit={submit} className="mt-9 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 font-display text-base font-semibold">Customer Information</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" error={errors.name}>
                <TextInput value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="e.g. Ama Owusu" />
              </Field>
              <Field label="Phone Number" error={errors.phone}>
                <TextInput value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="0XX XXX XXXX" />
              </Field>
              <Field label="Email (optional)">
                <TextInput value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@email.com" type="email" />
              </Field>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-display text-base font-semibold">Delivery</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <OptionCard
                active={delivery === "pickup"}
                onClick={() => setDelivery("pickup")}
                icon={<Store size={17} />}
                title="Store Pickup"
                text="Pick up at our Accra store — free."
              />
              <OptionCard
                active={delivery === "delivery"}
                onClick={() => setDelivery("delivery")}
                icon={<Truck size={17} />}
                title="Home Delivery"
                text={`Delivered to your address — ${formatGHS(DELIVERY_FEE)}.`}
              />
            </div>
            {delivery === "delivery" && (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Delivery Location" error={errors.location}>
                  <TextInput value={form.location} onChange={(v) => setForm({ ...form, location: v })} placeholder="e.g. East Legon" />
                </Field>
                <Field label="City" error={errors.city}>
                  <TextInput value={form.city} onChange={(v) => setForm({ ...form, city: v })} placeholder="e.g. Accra" />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Additional Delivery Instructions">
                    <TextInput value={form.notes} onChange={(v) => setForm({ ...form, notes: v })} placeholder="Landmark, gate colour, etc." />
                  </Field>
                </div>
              </div>
            )}
          </section>

          <section>
            <h2 className="mb-4 font-display text-base font-semibold">Payment</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <OptionCard
                active={payment === "online"}
                onClick={() => setPayment("online")}
                icon={<CreditCard size={17} />}
                title="Pay Online"
                text="Card / mobile money via Paystack (coming soon)."
              />
              <OptionCard
                active={payment === "confirmation"}
                onClick={() => setPayment("confirmation")}
                icon={<MessageCircleMore size={17} />}
                title="Pay on Confirmation"
                text="We confirm your order on WhatsApp first."
              />
            </div>
          </section>
        </div>

        <div>
          <div className="sticky top-24 rounded-2xl border border-line/60 p-6">
            <h2 className="font-display text-lg font-semibold">Order Summary</h2>
            <div className="mt-4 space-y-3 text-sm">
              {items.map((item) => {
                const product = getProduct(item.productId);
                if (!product) return null;
                return (
                  <div key={item.productId} className="flex justify-between gap-2">
                    <span className="text-ink/70">{product.name} × {item.quantity}</span>
                    <span className="font-medium">{formatGHS(product.price * item.quantity)}</span>
                  </div>
                );
              })}
              <div className="flex justify-between border-t border-line/60 pt-3">
                <span className="text-mist">Subtotal</span><span>{formatGHS(subtotal)}</span>
              </div>
              <div className="flex justify-between"><span className="text-mist">Delivery</span><span>{formatGHS(fee)}</span></div>
              <div className="flex justify-between border-t border-line/60 pt-2.5 font-display font-semibold">
                <span>Total</span><span className="text-falaa">{formatGHS(total)}</span>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-falaa py-3.5 text-sm font-semibold text-white hover:bg-falaa-dark"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

interface TextInputProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}

// Marker component: props are read by Field, never rendered directly.
function TextInput(_props: TextInputProps) {
  return null;
}

function Field({
  label, error, children,
}: { label: string; error?: string; children: React.ReactElement<TextInputProps> }) {
  const { value, onChange, placeholder, type } = children.props;
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink/70">{label}</span>
      <input
        type={type ?? "text"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border px-3.5 py-3 text-sm outline-none focus-visible:border-falaa ${
          error ? "border-falaa" : "border-line"
        }`}
      />
      {error && <span className="mt-1 block text-xs text-falaa">{error}</span>}
    </label>
  );
}

function OptionCard({
  active, onClick, icon, title, text,
}: { active: boolean; onClick: () => void; icon: React.ReactNode; title: string; text: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-start gap-3 rounded-xl border p-4 text-left transition ${
        active ? "border-falaa bg-falaa/5" : "border-line hover:border-ink/40"
      }`}
    >
      <span className={active ? "text-falaa" : "text-mist"}>{icon}</span>
      <span>
        <span className="block text-sm font-semibold">{title}</span>
        <span className="block text-xs text-mist">{text}</span>
      </span>
    </button>
  );
}
