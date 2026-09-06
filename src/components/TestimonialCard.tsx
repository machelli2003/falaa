import React from "react";
import { Star } from "lucide-react";
import { Testimonial } from "@/types";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-line/60 bg-white p-6">
      <div>
        <div className="mb-3 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < testimonial.rating ? "fill-falaa text-falaa" : "text-line"}
            />
          ))}
        </div>
        <p className="text-[15px] leading-relaxed text-ink/80">&ldquo;{testimonial.quote}&rdquo;</p>
      </div>
      <div className="mt-5 flex items-center justify-between text-xs text-mist">
        <span>— {testimonial.author}</span>
        <span className="rounded-full bg-mist/10 px-2 py-0.5">Demo review</span>
      </div>
    </div>
  );
}
