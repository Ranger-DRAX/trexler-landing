import React from "react";

type CheckItemProps = { children: React.ReactNode };

export function CheckItem({ children }: CheckItemProps) {
  return (
    <li className="text-primary flex items-start gap-2 text-lg">
      <span className="text-xl text-orange-600">✓</span>
      <span className="text-base">{children}</span>
    </li>
  );
}
