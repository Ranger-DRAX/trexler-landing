"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-2 bg-white font-family-inter">
      <div className="container mx-auto max-w-screen-2xl">
        <div className=" mb-4">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            04.Work
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6">
          Projects & Solutions.
        </h2>

        <p className="text-2xl text-gray-500 mb-16 max-w-3xl">
          Comprehensive technology solutions tailored for modern enterprises.
        </p>

        {/* Project 1: Baker Baby App */}
        <section className="w-full font">
          <div className="rounded-3xl lg:rounded-[44px] bg-primary p-6 sm:p-8 lg:p-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start lg:items-center">
              {/* LEFT */}
              <div className="flex flex-col justify-between h-full">
                {/* Top */}
                <div>
                  {/* Icon + Pills */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Icon */}
                    <div className="shrink-0 mt-1 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl">
                      <Image
                        src="/assets/baker-baby-app.png"
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
                        <span className="rounded-full bg-[#424242] px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-white">
                          Mobile Application
                        </span>
                        <span className="rounded-full bg-transparent px-2 py-1 text-xs sm:text-sm font-medium text-white">
                          Health & Lifestyle
                        </span>
                      </div>

                      <h3 className="mt-3 text-2xl sm:text-3xl lg:text-[34px] leading-tight font-semibold text-white">
                        Baker Baby App
                      </h3>
                    </div>
                  </div>

                  {/* Client */}
                  <p className="mt-4 text-sm sm:text-base text-white">
                    Client: <span className="font-semibold">BakerBaby</span>
                  </p>

                  {/* Description */}
                  <p className="mt-6 sm:mt-8 max-w-xl text-sm sm:text-base leading-relaxed text-gray-200">
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
                    className="mt-6 sm:mt-8 inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-accent px-8 sm:px-10 text-sm sm:text-base font-semibold text-[#111] shadow-sm transition hover:brightness-95"
                  >
                    View Case Study
                  </Link>
                </div>

                {/* Bottom Chips */}
                <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-3">
                  {["Figma", "React Native", "Node.js", "Firebase"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#424242] px-4 sm:px-5 py-1.5 sm:py-2
                           text-xs sm:text-sm font-medium text-accent"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative flex items-center justify-end">
                <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/project-baker-screen.png"
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
        <section className="w-full font mt-8 sm:mt-12 lg:mt-16">
          <div className="rounded-3xl lg:rounded-[44px] bg-[#F2F2F2] p-6 sm:p-8 lg:p-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start lg:items-center">
              {/* LEFT */}
              <div className="flex flex-col justify-between h-full">
                {/* Top */}
                <div>
                  {/* Icon + Pills */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Icon */}
                    <div className="shrink-0 mt-1 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl">
                      <Image
                        src="/assets/Reliable Force-frame.png"
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
                        <span className="rounded-full bg-[#E6E6E6] px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-[#111]">
                          Website
                        </span>
                        <span className="rounded-full bg-transparent px-2 py-1 text-xs sm:text-sm font-medium text-[#111]">
                          Company Profile
                        </span>
                      </div>

                      <h3 className="mt-3 text-2xl sm:text-3xl lg:text-[34px] leading-tight font-semibold text-[#111]">
                        Reliable Force
                      </h3>
                    </div>
                  </div>

                  {/* Client */}
                  <p className="mt-4 text-sm sm:text-base text-black">
                    Client:{" "}
                    <span className="font-semibold">Reliable Force Co.</span>
                  </p>

                  {/* Description */}
                  <p className="mt-6 sm:mt-8 max-w-xl text-sm sm:text-base leading-relaxed text-gray-800">
                    Multifaceted company providing comprehensive solutions in
                    business consultation, trading, services, construction,
                    manpower supply, operation &amp; maintenance. We built a
                    robust digital ecosystem that centralizes these diverse
                    service lines into a single, high-performance platform.
                  </p>

                  {/* CTA */}
                  <Link
                    href="/projects/reliable-force"
                    className="mt-6 sm:mt-8 inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-accent px-8 sm:px-10 text-sm sm:text-base font-semibold text-[#111] shadow-sm transition hover:brightness-95"
                  >
                    View Case Study
                  </Link>
                </div>

                {/* Bottom Chips */}
                <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-3">
                  {["Figma", "Next.js", "Tailwind", "CMS"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#cec7c7] px-4 sm:px-5 py-1.5 sm:py-2
                           text-xs sm:text-sm font-medium text-blue-950"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative flex items-center justify-end">
                <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/project-reliable-screen.png"
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
