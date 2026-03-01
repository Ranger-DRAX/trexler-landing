import Image from "next/image";

export default function IdentitySection() {
  return (
    <section id="identity" className="bg-white px-6 pt-0 pb-12">
      <div className="mx-auto w-full">
        {/* Card */}
        <div className="relative rounded-3xl bg-gray-100 px-8 py-12 sm:px-12 lg:px-16 lg:py-16">
          {/* Top row */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
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
              <h3 className="font-family-sans text-2xl leading-tight font-bold text-black md:text-3xl">
                Trexler Technology Systems is{" "}
                <span className="text-accent decoration-accent underline decoration-[3px] underline-offset-8">
                  a premier technology consulting firm
                </span>{" "}
                dedicated to delivering high-quality software solutions.
              </h3>

              {/* two-paragraph row */}
              <div className="mt-10 grid grid-cols-1 gap-8 text-gray-600 md:grid-cols-2">
                <p className="leading-relaxed">
                  We bridge the gap between complex business requirements and
                  cutting-edge technology. Our team of experts works tirelessly
                  to ensure that every solution is scalable and secure.
                </p>

                <p className="leading-relaxed">
                  Every solution we provide is customized to meet the unique
                  needs of our clients, ensuring operational excellence at every
                  level of the system architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Map - Desktop only (absolute positioned) */}
          <div className="pointer-events-none absolute bottom-12 left-12 hidden translate-y-10 lg:block">
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
  );
}
