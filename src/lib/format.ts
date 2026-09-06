export const formatGHS = (amount: number) =>
  `GH₵${amount.toLocaleString("en-GH", { minimumFractionDigits: 0 })}`;

export const discountPercent = (price: number, oldPrice?: number) => {
  if (!oldPrice || oldPrice <= price) return 0;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
};

export const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");
