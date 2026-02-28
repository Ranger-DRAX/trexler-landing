"use client";

import { Pill } from "@/components/ui/Pill";
import { ToolChip } from "@/components/ui/Toolchip";
import { CheckItem } from "@/components/ui/CheckItem";
import { IconBox } from "@/components/ui/IconBox";
import { Stars } from "@/components/ui/Stars";
import { UpItem } from "@/components/ui/UpItem";

export type DescribeData = {
  number: string;
  categories: string[];
  title: string;
  client: string;
  services: string;
  timeline: string;
  tools: string[];

  context: string[];
  context_2: string[];
  deliverables: string[];
  impact: string[];

  challengeIntro: string;
  challengeBullets: string[];

  solutionIntro: string;
  solutionBullets: string[];

  testimonial: {
    rating: number;
    quote: string;
    name: string;
    role: string;
    company: string;
  };
};

export default function ProjectDescribe({ data }: { data: DescribeData }) {
  return (
    <section className="mx-auto w-full max-w-375 font-family-inter">
      <div className="flex flex-row items-start gap-4 lg:gap-12.5 lg:min-h-298">
        {/* Left Number Block */}
        <div className="shrink-0">
          <div
            className="
            flex flex-col items-center justify-start
            w-14 h-20 p-3 gap-2 rounded-2xl
            lg:w-30 lg:h-55 lg:p-4 lg:rounded-3xl
            bg-[#F6C73A]
          "
          >
            <span className="text-3xl lg:text-6xl font-bold text-black leading-tight">
              {data.number}
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full">
          {/* Categories with pill */}
          <div className="flex flex-wrap items-center gap-3 text-trexler-dark">
            {data.categories?.[0] && <Pill>{data.categories[0]}</Pill>}
            {data.categories?.slice(1).map((cat, idx) => (
              <span
                key={`${cat}-${idx}`}
                className="text-xs sm:text-sm font-medium text-trexler-dark"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-trexler-dark">
            {data.title}
          </h2>

          {/* Meta row */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-trexler-dark">
                Client
              </p>
              <p className="mt-2 text-xl font-base text-gray-600">
                {data.client}
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-trexler-dark">
                Services
              </p>
              <p className="mt-2 text-xl font-base text-gray-600">
                {data.services}
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-trexler-dark">
                Timeline
              </p>
              <p className="mt-2 text-xl font-base text-gray-600">
                {data.timeline}
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-trexler-dark">
                Tools
              </p>
              <div className="mt-2 flex flex-wrap gap-2 ">
                {data.tools.map((t) => (
                  <ToolChip key={t}>{t}</ToolChip>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px w-full bg-gray-300" />

          {/* Context */}
          <h3 className="mt-10 text-2xl font-bold text-trexler-dark">
            The Context
          </h3>
          <div className="mt-4 space-y-4 text-xl leading-6 text-black/60">
            {data.context.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-4 space-y-4 text-xl leading-6 text-trexler-dark">
            {data.context_2.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Deliverables + Impact */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <p className="text-xl font-bold text-trexler-dark">
                Deliverables
              </p>
              <ul className="mt-4 space-y-2 ">
                {data.deliverables.map((d) => (
                  <CheckItem key={d}>{d}</CheckItem>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xl font-bold text-trexler-dark">Impact</p>
              <ul className="mt-4 space-y-2">
                {data.impact.map((m) => (
                  <UpItem key={m}>{m} </UpItem>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-10 h-px w-full bg-gray-300" />

          {/* Challenge */}
          <div className="mt-10 flex gap-6">
            <IconBox variant="challenge" />
            <div className="flex-1">
              <h4 className="text-xl font-bold text-black">Challenge</h4>
              <p className="mt-2 text-lg text-trexler-dark ">
                {data.challengeIntro}
              </p>
              <ul className="mt-2 list-disc px-7 space-y-1 text-base text-trexler-dark">
                {data.challengeBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="mt-10 flex gap-6">
            <IconBox variant="solution" />
            <div className="flex-1">
              <h4 className="text-xl font-bold text-black">Solution</h4>
              <p className="mt-2 text-lg text-trexler-dark">
                {data.solutionIntro}
              </p>
              <ul className="mt-2 list-disc px-7 space-y-1  text-base text-trexler-dark">
                {data.solutionBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div
        className="lg:-mt-29 mt-12 rounded-3xl bg-black/5 p-7 sm:p-9
         lg:ml-42.5
        "
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-black/70">
            {data.testimonial.rating.toFixed(1)}
          </span>
          <Stars rating={data.testimonial.rating} />
        </div>

        <p className="mt-5 text-lg sm:text-xl font-semibold italic text-black/80">
          “{data.testimonial.quote}”
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-lg font-bold text-black ">
            {data.testimonial.name}
          </span>
          <span className="text-black/30">|</span>
          <span className="text-sm font-medium text-black/50">
            {data.testimonial.role}, {data.testimonial.company}
          </span>
        </div>
      </div>
    </section>
  );
}
