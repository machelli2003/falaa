export default function BrandWordmark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#5d39f4] via-[#7d3ee7] to-[#ec4f7d] shadow-[0_8px_18px_rgba(93,57,244,0.35)]">
        <span className="relative z-10 text-base font-black tracking-[-0.08em] text-white">F</span>
        <span className="absolute -bottom-2 left-1/2 h-3.5 w-10 -translate-x-1/2 rounded-full bg-[#f9d16e]/90 blur-[2px]" />
      </div>

      <div className="flex items-baseline gap-0.5">
        <span className="font-display text-xl font-black tracking-[-0.05em] text-ink sm:text-2xl">Falaa</span>
        <span className="text-xl font-black text-falaa sm:text-2xl">.</span>
      </div>
    </div>
  );
}
