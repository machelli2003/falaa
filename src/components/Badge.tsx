import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  tone?: "default" | "accent" | "dark" | "outline";
  className?: string;
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  default: "bg-mist/20 text-ink",
  accent: "bg-falaa text-white",
  dark: "bg-ink text-white",
  outline: "border border-line text-ink",
};

export default function Badge({ children, tone = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
