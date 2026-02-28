"use client";

import Image from "next/image";

export default function IndustryCard({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) {
  return (
    <div
      className="
        group rounded-3xl border border-gray-200 bg-white overflow-hidden h-full
        transition-all duration-300 hover:-translate-y-2 hover:bg-accent hover:border-accent
      "
    >
      <div className="p-6 flex h-full flex-col">
  {/* Fixed image box (same size for all cards) */}
  <div className="relative w-full h-70 overflow-hidden rounded-2xl border border-white bg-white p-4">
    <Image
      src={img}
      alt={title}
      fill
      sizes="(max-width: 640px) 90vw, 288px"
      className="object-contain scale-110"
    />
  </div>

  {/* Fixed text area height (same card height) */}
  <div className="mt-4 flex-1">
    <h3 className="text-2xl font-bold text-gray-900 leading-tight min-h-8">
      {title}
    </h3>
    <p className="mt-2 text-gray-700 leading-relaxed min-h-12">
      {desc}
    </p>
  </div>
</div>
    </div>
  );
}
