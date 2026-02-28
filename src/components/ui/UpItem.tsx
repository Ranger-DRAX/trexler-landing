import React from "react";

type UpItemProps = { children: React.ReactNode };

export function UpItem({ children }: UpItemProps) {
  return (
    <li className="flex items-start gap-2 text-lg text-trexler-dark">
      <span className="-mt-1 text-green-600 text-xl">↑</span>
      <span>{children}</span>
    </li>
  );
}