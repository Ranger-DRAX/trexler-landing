"use client";

import Link from "next/link";
import Image from "next/image";
import BakerBabyAppIcon from "@/assets/project-section-icon/baker-baby-app.svg";
import ReliableForceIcon from "@/assets/project-section-icon/Reliable Force-frame.svg";
import BakerBabyImage from "@/assets/project-section-image/project-baker-screen.png";
import ReliableForceImage from "@/assets/project-section-image/project-reliable-screen.png";

export default function ProjectsSection() {
  return (
    <section id="projects" className="font-family-inter bg-white px-2 py-20">
      <div className="container mx-auto max-w-screen-2xl">
        <div className="mb-4">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            04.Work
          </span>
        </div>

        <h2 className="mb-6 text-4xl font-bold text-black sm:text-5xl md:text-6xl">
          Projects & Solutions.
        </h2>

        <p className="mb-16 max-w-3xl text-2xl text-gray-500">
          Comprehensive technology solutions tailored for modern enterprises.
        </p>

        {/* Project 1: Baker Baby App */}
        <section className="font w-full">
          <div className="bg-primary overflow-hidden rounded-3xl p-6 sm:p-8 lg:rounded-[44px] lg:p-10">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
              {/* LEFT */}
              <div className="flex h-full flex-col justify-between">
                {/* Top */}
                <div>
                  {/* Icon + Pills */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Icon */}
                    <div className="mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl sm:h-20 sm:w-20">
                      <Image
                        src={BakerBabyAppIcon}
                        alt="Baker Baby App icon"
                        width={80}
                        height={80}
                        className="h-full w-full object-contain"
                        priority
                      />
                    </div>

                    {/* Pills + Title */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#424242] px-3 py-1 text-xs font-medium text-white sm:px-4 sm:text-sm">
                          Mobile Application
                        </span>
                        <span className="rounded-full bg-transparent px-2 py-1 text-xs font-medium text-white sm:text-sm">
                          Health & Lifestyle
                        </span>
                      </div>

                      <h3 className="mt-3 text-2xl leading-tight font-semibold text-white sm:text-3xl lg:text-[34px]">
                        Baker Baby App
                      </h3>
                    </div>
                  </div>

                  {/* Client */}
                  <p className="mt-4 text-sm text-white sm:text-base">
                    Client: <span className="font-semibold">BakerBaby</span>
                  </p>

                  {/* Description */}
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-200 sm:mt-8 sm:text-base">
                    We partnered with BakerBaby to revolutionize their mobile
                    pregnant experience. Our team developed a comprehensive
                    suite of tools that assists mothers-to-be with health
                    tracking and personalized milestones. This digital companion
                    ensures that users feel supported and informed throughout
                    every trimester of their journey.
                  </p>

                  {/* CTA */}
                  <Link
                    href="/projects/baker-baby-app"
                    className="bg-accent mt-6 inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-[#111] shadow-sm transition hover:brightness-95 sm:mt-8 sm:h-14 sm:px-10 sm:text-base"
                  >
                    View Case Study
                  </Link>
                </div>

                {/* Bottom Chips */}
                <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
                  {["Figma", "React Native", "Node.js", "Firebase"].map(
                    (item) => (
                      <span
                        key={item}
                        className="text-accent rounded-full bg-[#424242] px-4 py-1.5 text-xs font-medium sm:px-5 sm:py-2 sm:text-sm"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative flex items-center justify-end">
                <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl">
                  <Image
                    src={BakerBabyImage}
                    alt="Baker Baby "
                    fill
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project 2: Reliable Force */}
        <section className="font mt-8 w-full sm:mt-12 lg:mt-16">
          <div className="overflow-hidden rounded-3xl bg-[#F2F2F2] p-6 sm:p-8 lg:rounded-[44px] lg:p-10">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
              {/* LEFT */}
              <div className="flex h-full flex-col justify-between">
                {/* Top */}
                <div>
                  {/* Icon + Pills */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Icon */}
                    <div className="mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl sm:h-20 sm:w-20">
                      <Image
                        src={ReliableForceIcon}
                        alt="Reliable Force icon"
                        width={80}
                        height={80}
                        className="h-full w-full object-contain"
                        priority
                      />
                    </div>

                    {/* Pills + Title */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#E6E6E6] px-3 py-1 text-xs font-medium text-[#111] sm:px-4 sm:text-sm">
                          Website
                        </span>
                        <span className="rounded-full bg-transparent px-2 py-1 text-xs font-medium text-[#111] sm:text-sm">
                          Company Profile
                        </span>
                      </div>

                      <h3 className="mt-3 text-2xl leading-tight font-semibold text-[#111] sm:text-3xl lg:text-[34px]">
                        Reliable Force
                      </h3>
                    </div>
                  </div>

                  {/* Client */}
                  <p className="mt-4 text-sm text-black sm:text-base">
                    Client:{" "}
                    <span className="font-semibold">Reliable Force Co.</span>
                  </p>

                  {/* Description */}
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-800 sm:mt-8 sm:text-base">
                    Multifaceted company providing comprehensive solutions in
                    business consultation, trading, services, construction,
                    manpower supply, operation &amp; maintenance. We built a
                    robust digital ecosystem that centralizes these diverse
                    service lines into a single, high-performance platform.
                  </p>

                  {/* CTA */}
                  <Link
                    href="/projects/reliable-force"
                    className="bg-accent mt-6 inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-[#111] shadow-sm transition hover:brightness-95 sm:mt-8 sm:h-14 sm:px-10 sm:text-base"
                  >
                    View Case Study
                  </Link>
                </div>

                {/* Bottom Chips */}
                <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
                  {["Figma", "Next.js", "Tailwind", "CMS"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#cec7c7] px-4 py-1.5 text-xs font-medium text-blue-950 sm:px-5 sm:py-2 sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative flex items-center justify-end">
                <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl">
                  <Image
                    src={ReliableForceImage}
                    alt="Reliable Force preview"
                    fill
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
