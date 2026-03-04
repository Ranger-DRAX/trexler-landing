"use client";
import React from "react";

type PillProps = { children: React.ReactNode };

export function Pill({ children }: PillProps) {
  return (
    <span className="rounded-full bg-[#E6E6E6] px-3 py-1 text-xs font-medium text-[#111] sm:px-4 sm:text-sm">
      {children}
    </span>
  );
}
