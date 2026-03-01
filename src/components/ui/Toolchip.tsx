import React from "react";

type ToolChipProps = { children: React.ReactNode };

export function ToolChip({ children }: ToolChipProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#c7c9cf] bg-white px-3 py-1 text-xs font-medium text-[#354c76] hover:bg-gray-50 sm:text-sm">
      {children}
    </span>
  );
}
