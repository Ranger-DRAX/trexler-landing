import React from "react";

type CheckItemProps = { children: React.ReactNode };

export function CheckItem({ children }: CheckItemProps) {
  return (
    <li className="flex items-start gap-2 text-lg text-trexler-dark">
      <span className="text-orange-600 text-xl">✓</span>
      <span className="text-base">{children}</span>
    </li>
  );
}