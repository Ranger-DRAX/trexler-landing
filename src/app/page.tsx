import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
        {/* Hero Section */}
        <section className="relative py-16 px-4 flex items-center justify-center  overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={
              { 
                backgroundImage: "url(/assets/hero-background.png)" 

              }}
          />

          
          
          <div className="container relative z-10 mx-auto max-w-6xl text-center">
            {/* Status Badge */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border  border-gray-400 px-2 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-[11px] font-family-inter uppercase tracking-[0.16em] text-primary">
                  Available for Enterprise Projects
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-8xl font-bold mb-6 font-family-sans">
              <span className="block">
                <span className=" text-primary">BUILDIN</span>
                  <span className="text-gray-700">G</span>
              </span>
                
              
              
              <span className="block">
                <span className="text-primary">TOMORR</span>
                <span className="text-gray-600">OW&apos;S</span>
              </span>

              <span className="block drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
                <span className="text-primary">SOLUTION</span>
                <span className="text-gray-500">S </span>
                <span className="text-gray-500">TODAY</span>
              </span>
            </h1>

              {/* Subtitle + CTA Row */}
            <div className="mx-auto mb-8 sm:mb-12 flex max-w-5xl flex-col gap-6 lg:flex-row lg:items-end sm:justify-between">
            {/* Subtitle */}
            <div className="flex w-full items-start gap-4 lg:w-auto lg:flex-1 ">
              {/* Yellow line */}
              <span className="mt-1 h-24 w-1 rounded-full bg-accent" />

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
            className="group inline-flex items-center justify-center rounded-full bg-[#111] px-5 sm:px-6 pr-1.5 sm:pr-2 py-2 sm:py-2.5 text-white shadow-lg transition hover:bg-black hover:shadow-xl mx-auto lg:mx-0 `shrink-0"

          >
            <span className="text-lg">Get Started</span>

            <span className="ml-4 inline-flex h-10 w-10
            items-center justify-center rounded-full bg-accent
              transition-transform duration-300 group-hover:translate-x-1">
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

         {/* Identity Section */}
        <section id="identity" className="bg-white px-6 pt-0 pb-12">
          <div className="mx-auto w-full">
            {/* Card */}
            <div className="relative rounded-3xl bg-gray-100 px-8 py-12 sm:px-12 lg:px-16 lg:py-16">
              {/* Top row */}
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Left */}
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                    01.IDENTITY
                  </span>

                  <h2 className="mt-6 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
                    Who We Are.
                  </h2>

                  {/* Map - Mobile: in flow, Desktop: absolute */}
                  <div className="mt-8 lg:hidden">
                    <div className="relative h-32 w-full max-w-md">
                      <Image
                        src="/assets/global-Map.png"
                        alt="Global presence map"
                        fill
                        className="object-contain object-left"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="lg:pl-0">
                  <h3 className="text-2xl font-bold font-family-sans leading-tight text-black md:text-3xl">
                    Trexler Technology Systems is{" "}
                    <span className="text-accent underline decoration-accent underline-offset-8 decoration-[3px]">
                      a premier technology consulting firm
                    </span>{" "}
                    dedicated to delivering high-quality software solutions.
                  </h3>

                  {/* two-paragraph row */}
                  <div className="mt-10 grid grid-cols-1 gap-8 text-gray-600 md:grid-cols-2">
                    <p className="leading-relaxed">
                      We bridge the gap between complex business requirements and cutting-edge technology.
                      Our team of experts works tirelessly to ensure that every solution is scalable and secure.
                    </p>

                    <p className="leading-relaxed">
                      Every solution we provide is customized to meet the unique needs of our clients,
                      ensuring operational excellence at every level of the system architecture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map - Desktop only (absolute positioned) */}
              <div className="pointer-events-none absolute left-12 bottom-12 translate-y-10 hidden lg:block">
                <div className="relative h-40 w-105">
                  <Image
                    src="/assets/global-Map.png"
                    alt="Global presence map"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


       





    </main>

  );
}
