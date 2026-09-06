# Falaa Deals — Prototype

Premium electronics e-commerce prototype for a Ghana-based retailer, built with React + TypeScript + Vite + Tailwind CSS.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## What's implemented

- Routes: `/`, `/phones`, `/laptops`, `/gaming`, `/gadgets`, `/deals`, `/swap`,
  `/product/:id`, `/wishlist`, `/cart`, `/checkout`, `/about`, `/contact`,
  `/faq`, `/delivery`, `/returns`, `/warranty`, `/admin`, 404 fallback.
- 22 demo products across Phones, Laptops, Gaming, Gadgets, Accessories (GH₵ pricing).
- Cart & wishlist with localStorage persistence.
- Command-style search overlay, category filters, sorting.
- Phone-swap estimate calculator (demo logic — not a real valuation engine).
- WhatsApp deep-links throughout (product inquiries, swap quotes, general chat,
  floating button). **Update the placeholder number in `src/lib/whatsapp.ts`
  before launch.**
- Prototype checkout: store pickup / home delivery, pay online (Paystack-ready
  placeholder) / pay on confirmation. No real payment processing.
- Admin dashboard: visual concept only, mock data, not a live backend.

## Before going live

- Replace the WhatsApp number in `src/lib/whatsapp.ts`.
- Replace Unsplash placeholder imagery in `src/data/products.ts` with real
  product photography.
- Confirm and replace placeholder store hours/address (Home & Contact pages).
- Wire up a real backend for products, orders and the admin dashboard.
- Integrate Paystack for online payment at checkout.
