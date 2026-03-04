"use client";
type StarsProps = { rating: number };

export function Stars({ rating }: StarsProps) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className={i < full ? "text-orange-500" : "text-black/15"}
          fill="currentColor"
        >
          <path d="M12 17.27l5.18 3.04-1.64-5.81L20 9.24l-5.9-.5L12 3.25 9.9 8.74 4 9.24l4.46 5.26-1.64 5.81L12 17.27z" />
        </svg>
      ))}
    </div>
  );
}
