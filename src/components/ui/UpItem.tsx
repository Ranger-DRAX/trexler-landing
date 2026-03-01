import React from "react";

type UpItemProps = { children: React.ReactNode };

export function UpItem({ children }: UpItemProps) {
  return (
    <li className="text-trexler-dark flex items-start gap-2 text-lg">
      <span className="-mt-1 text-xl text-green-600">↑</span>
      <span>{children}</span>
    </li>
  );
}
