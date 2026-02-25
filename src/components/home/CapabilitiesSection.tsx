import Image from "next/image";

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-white px-6 py-16">
      <div className="mx-auto w-full  max-w-screen-2xl">
        {/* Header */}
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            02. CAPABILITIES
          </span>

          <h2 className="mt-4 text-5xl font-bold font-family-jakarta text-black md:text-6xl">
            Expertise.
          </h2>

          <p className="mt-6 max-w-xl text-xl font-semibold leading-relaxed text-secondary">
            Comprehensive technology solutions tailored{" "}
            <br className="hidden sm:block" />
            for modern enterprises.
          </p>
        </div>

        {/* Top row cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            tabIndex={0}
            className="
                      rounded-2xl border border-gray-100 bg-white p-8 shadow-sm
                      transition-colors duration-200 ease-out
                      hover:border-accent
                      active:border-accent
                      focus:border-accent
                      focus:outline-none
                    "
          >
            <Image
              src="/assets/free-icon/Digital-Transformation.png"
              alt="Digital Transformation"
              width={56}
              height={56}
            />
            <h3 className="mt-6 text-xl font-bold font-family-inter text-gray-900">
              Digital Transformation
            </h3>
          </div>

          <div
            tabIndex={0}
            className="
                      rounded-2xl border border-gray-100 bg-white p-8 shadow-sm
                      transition-colors duration-200 ease-out
                      hover:border-accent
                      active:border-accent
                      focus:border-accent
                      focus:outline-none
                    "
          >
            <Image
              src="/assets/free-icon/Large-Software-Systems.png"
              alt="Large Software Systems"
              width={56}
              height={56}
            />
            <h3 className="mt-6 text-xl font-bold font-family-inter text-gray-900">
              Large Software Systems
            </h3>
          </div>

          <div
            tabIndex={0}
            className="
                      rounded-2xl border border-gray-100 bg-white p-8 shadow-sm
                      transition-colors duration-200 ease-out
                      hover:border-accent
                      active:border-accent
                      focus:border-accent
                      focus:outline-none
                    "
          >
            <Image
              src="/assets/free-icon/fintech-solutions.png"
              alt="FinTech Solutions"
              width={56}
              height={56}
            />
            <h3 className="mt-6 text-xl font-bold font-family-inter text-gray-900">
              FinTech Solutions
            </h3>
          </div>
        </div>

        {/* Description panel */}
        <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <p className="text-base leading-relaxed text-gray-900 font-family-inter">
            Trexler Technology Systems has extensive experience in
            revolutionizing businesses through seamless digital transformation.
            With a proven track record in modernizing existing infrastructure,
            we specialize in meticulously orchestrating the migration of legacy
            systems, and seamlessly integrating them with cutting-edge
            technologies. Our approach is rooted in understanding the unique
            needs and challenges of each client, allowing us to build customized
            solutions that maximize efficiency and drive innovation.
          </p>

          <p className="mt-5 text-base leading-relaxed text-gray-900 font-family-inter">
            At Trexler, we recognize that digital transformation is not a
            one-size-fits-all endeavor. Therefore, our team of experts
            collaborates closely with clients to conduct thorough assessments,
            identifying key areas for improvement and optimization. Whether
            it&apos;s migrating on-premises systems to the cloud, updating
            outdated software architectures, or implementing advanced data
            analytics solutions, we leverage industry-leading practices and
            technologies to deliver transformative results.
          </p>

          <p className="mt-5 text-base leading-relaxed text-gray-900 font-family-inter">
            Our commitment to excellence extends beyond the initial
            implementation phase. We provide comprehensive support and
            maintenance services to ensure that our solutions continue to
            deliver value over the long term. Furthermore, our agile
            methodologies enable us to adapt quickly to evolving business needs,
            ensuring that our clients remain ahead of the curve in today&apos;s
            rapidly changing technology landscape.
          </p>
        </div>

        {/* Bottom row cards */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            tabIndex={0}
            className="
                      rounded-2xl border border-gray-100 bg-white p-8 shadow-sm
                      transition-colors duration-200 ease-out
                      hover:border-accent
                      active:border-accent
                      focus:border-accent
                      focus:outline-none
                    "
          >
            <Image
              src="/assets/free-icon/Healthcare-Systems.png"
              alt="Healthcare Systems"
              width={56}
              height={56}
            />
            <h3 className="mt-6 text-xl font-bold font-family-inter text-gray-900">
              Healthcare Systems
            </h3>
          </div>

          <div
            tabIndex={0}
            className="
                      rounded-2xl border border-gray-100 bg-white p-8 shadow-sm
                      transition-colors duration-200 ease-out
                      hover:border-accent
                      active:border-accent
                      focus:border-accent
                      focus:outline-none
                    "
          >
            <Image
              src="/assets/free-icon/Data-Analytics.png"
              alt="Data Analytics & Reporting"
              width={56}
              height={56}
            />
            <h3 className="mt-6 text-xl font-bold font-family-inter text-gray-900">
              Data Analytics &amp; Reporting
            </h3>
          </div>

          <div
            tabIndex={0}
            className="
                      rounded-2xl border border-gray-100 bg-white p-8 shadow-sm
                      transition-colors duration-200 ease-out
                      hover:border-accent
                      active:border-accent
                      focus:border-accent
                      focus:outline-none
                    "
          >
            <Image
              src="/assets/free-icon/Non-profit.png"
              alt="Non-Profit Support"
              width={56}
              height={56}
            />
            <h3 className="mt-6 text-xl font-bold font-family-inter text-gray-900">
              Non-Profit Support
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
