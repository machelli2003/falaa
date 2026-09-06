export const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80";

export function getImageWithFallback(src?: string) {
  return src && src.trim() ? src : FALLBACK_IMAGE;
}

export function handleImageError(event: React.SyntheticEvent<HTMLImageElement>) {
  const target = event.currentTarget;
  if (target.dataset.fallbackApplied === "true") return;
  target.dataset.fallbackApplied = "true";
  target.src = FALLBACK_IMAGE;
}
