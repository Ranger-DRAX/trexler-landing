import React from "react";

type IconBoxProps = { variant: "challenge" | "solution" };

export function IconBox({ variant }: IconBoxProps) {
  const isChallenge = variant === "challenge";

  return (
    <div className="flex">
      {isChallenge ? (
        <div className="relative h-10 w-10">
          <span className="border-accent absolute inset-0 rounded-full border-4" />
          <span className="border-accent absolute inset-2 rounded-full border-4" />
          <span className="border-accent absolute inset-4 rounded-full border-4" />
        </div>
      ) : (
        <div className="bg-secondary grid h-10 w-10 place-items-center rounded-3xl border border-black/10">
          <span className="text-2xl text-white">✓</span>
        </div>
      )}
    </div>
  );
}
