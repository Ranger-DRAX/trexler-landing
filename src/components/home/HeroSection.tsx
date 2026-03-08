import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-4 py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/hero-background.png)",
        }}
      />
      <div className="relative z-10 container mx-auto max-w-6xl text-center">
        {/* Status Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-400 px-2 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="font-family-inter text-primary text-[11px] tracking-[0.16em] uppercase">
              Available for Enterprise Projects
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-family-inter mb-6 text-[3.25rem] leading-none font-bold sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-8xl">
          <span className="block">
            <span className="text-primary">BUILDIN</span>
            <span className="text-gray-700">G</span>
          </span>
          <span className="block">
            <span className="text-primary">TOMORR</span>
            <span className="text-gray-600">OW&apos;S</span>
          </span>
          <span className="block drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
            <span className="text-primary">SOLUTION</span>
            <span className="text-gray-600">S </span>
            <span className="text-gray-600">TODAY</span>
          </span>
        </h1>

        {/* Subtitle + CTA Row */}
        <div className="mx-auto mb-8 flex max-w-5xl flex-col gap-6 sm:mb-12 sm:justify-between lg:flex-row lg:items-end">
          {/* Subtitle */}
          <div className="flex w-full items-start gap-4 lg:w-auto lg:flex-1">
            {/* Accent line */}
            <span className="bg-accent mt-1 h-20 w-1 rounded-full sm:h-24" />
            {/* Text */}
            <p className="max-w-xl text-left text-base leading-relaxed text-gray-600 sm:text-lg">
              We specialize in Digital Transformation, Large
              <br />
              Software Systems, FinTech Solutions, and
              <br />
              Data Analytics.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="group mx-auto inline-flex shrink-0 items-center justify-center rounded-full bg-[#111] px-5 py-2 pr-1.5 text-white shadow-lg transition hover:bg-black hover:shadow-xl sm:px-6 sm:py-2.5 sm:pr-2 lg:mx-0"
          >
            <span className="text-lg">Get Started</span>
            <span className="bg-accent ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1">
              <svg
                className="h-5 w-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
