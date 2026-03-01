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
    <div className="group hover:bg-accent hover:border-accent h-full overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2">
      <div className="flex h-full flex-col p-6">
        {/* Fixed image box (same size for all cards) */}
        <div className="relative h-70 w-full overflow-hidden rounded-2xl border border-white bg-white p-4">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 640px) 90vw, 288px"
            className="scale-110 object-contain"
          />
        </div>

        {/* Fixed text area height (same card height) */}
        <div className="mt-4 flex-1">
          <h3 className="min-h-8 text-2xl leading-tight font-bold text-gray-900">
            {title}
          </h3>
          <p className="mt-2 min-h-12 leading-relaxed text-gray-700">{desc}</p>
        </div>
      </div>
    </div>
  );
}
