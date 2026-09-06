import React from "react";
import { Package, Boxes, ClipboardList, MessageCircle, Flame, Plus } from "lucide-react";
import { products } from "@/data/products";
import { formatGHS } from "@/lib/format";

const metrics = [
  { label: "Total Products", value: products.length, icon: <Package size={18} /> },
  { label: "Available Stock", value: products.filter((p) => p.status !== "Sold Out").length, icon: <Boxes size={18} /> },
  { label: "Orders", value: 18, icon: <ClipboardList size={18} /> },
  { label: "WhatsApp Inquiries", value: 42, icon: <MessageCircle size={18} /> },
  { label: "Hot Deals", value: products.filter((p) => p.isDeal).length, icon: <Flame size={18} /> },
];

const recentOrders = [
  { id: "#FD-1042", customer: "Ama O.", item: "iPhone 15 Pro", total: 9800, status: "Confirmed" },
  { id: "#FD-1041", customer: "Kwesi A.", item: "PS5 Slim", total: 7200, status: "Pending" },
  { id: "#FD-1040", customer: "Nana Y.", item: "MacBook Air M2", total: 10500, status: "Delivered" },
  { id: "#FD-1039", customer: "Efua B.", item: "AirPods Pro (2nd Gen)", total: 2100, status: "Delivered" },
];

const stockAlerts = [
  { item: "iPhone 13", level: "Low stock - 3 left" },
  { item: "PS5 Slim", level: "Restock due Friday" },
  { item: "Samsung A54", level: "Popular bundle" },
];

const leads = [
  { brand: "Trade-in lead", value: "12 new requests" },
  { brand: "Delivery inquiry", value: "7 pending" },
  { brand: "Hot deal clicks", value: "41 today" },
];

const statusTone: Record<string, string> = {
  Confirmed: "bg-falaa/10 text-falaa",
  Pending: "bg-amber-100 text-amber-700",
  Delivered: "bg-green-100 text-green-700",
};

export default function Admin() {
  return (
    <div className="container-page py-12 sm:py-16">
      <div className="mb-1 flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">Admin</h1>
        <span className="rounded-full bg-mist/10 px-3 py-1 text-xs text-mist">Visual concept — not a live backend</span>
      </div>
      <p className="mb-9 text-sm text-mist">A production-ready admin experience for managing catalogue, orders and deals.</p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-2xl border border-line/60 p-5">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-falaa/10 text-falaa">{m.icon}</div>
            <p className="font-display text-2xl font-bold">{m.value}</p>
            <p className="mt-0.5 text-xs text-mist">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-line/60 p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-base font-semibold">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-line/60 text-xs text-mist">
                  <th className="pb-2 font-medium">Order</th>
                  <th className="pb-2 font-medium">Customer</th>
                  <th className="pb-2 font-medium">Item</th>
                  <th className="pb-2 font-medium">Total</th>
                  <th className="pb-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/50">
                {recentOrders.map((o) => (
                  <tr key={o.id}>
                    <td className="py-3 font-medium">{o.id}</td>
                    <td className="py-3 text-ink/70">{o.customer}</td>
                    <td className="py-3 text-ink/70">{o.item}</td>
                    <td className="py-3 font-medium">{formatGHS(o.total)}</td>
                    <td className="py-3">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusTone[o.status]}`}>{o.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-line/60 p-5">
            <h2 className="mb-4 font-display text-base font-semibold">Sales Snapshot</h2>
            <div className="space-y-3">
              {leads.map((lead) => (
                <div key={lead.brand} className="flex items-center justify-between rounded-xl border border-line bg-mist/5 px-3 py-2.5 text-sm">
                  <span className="text-ink/70">{lead.brand}</span>
                  <span className="font-semibold text-falaa">{lead.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-line/60 p-5">
            <h2 className="mb-4 font-display text-base font-semibold">Product Management</h2>
            <div className="grid grid-cols-2 gap-2">
              {["Add Product", "Edit Product", "Delete Product", "Mark Sold", "Update Price", "Update Stock"].map((a) => (
                <button key={a} className="rounded-lg border border-line px-3 py-2.5 text-left text-xs font-medium hover:border-ink">
                  {a}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-line/60 p-5">
            <h2 className="mb-4 font-display text-base font-semibold">Deal Management</h2>
            <div className="space-y-2">
              {["Create Deal", "Set Discount", "Set Expiry"].map((a) => (
                <button key={a} className="flex w-full items-center gap-2 rounded-lg border border-line px-3 py-2.5 text-left text-xs font-medium hover:border-ink">
                  <Plus size={13} /> {a}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-line/60 p-5">
            <h2 className="mb-4 font-display text-base font-semibold">Stock Alerts</h2>
            <div className="space-y-2">
              {stockAlerts.map((alert) => (
                <div key={alert.item} className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                  <span className="font-semibold">{alert.item}</span> · {alert.level}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
