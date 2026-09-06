import React from "react";
import { formatGHS, discountPercent } from "@/lib/format";

export default function PriceDisplay({
  price,
  oldPrice,
  size = "md",
}: {
  price: number;
  oldPrice?: number;
  size?: "sm" | "md" | "lg";
}) {
  const discount = discountPercent(price, oldPrice);
  const priceClass = size === "lg" ? "text-3xl" : size === "sm" ? "text-base" : "text-xl";
  return (
    <div className="flex flex-wrap items-baseline gap-2">
      <span className={`font-display font-semibold text-falaa ${priceClass}`}>
        {formatGHS(price)}
      </span>
      {!!oldPrice && oldPrice > price && (
        <>
          <span className="text-sm text-mist line-through">{formatGHS(oldPrice)}</span>
          <span className="text-xs font-medium text-falaa-dark">-{discount}%</span>
        </>
      )}
    </div>
  );
}
