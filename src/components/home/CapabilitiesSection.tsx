import Image from "next/image";

import DigitalTransformation from "@/assets/free-icon/Digital-Transformation.svg";
import LargeSoftwareSystems from "@/assets/free-icon/Large-Software-Systems.svg";
import FintechSolutions from "@/assets/free-icon/fintech-solutions.svg";
import HealthcareSystems from "@/assets/free-icon/Healthcare-Systems.svg";
import DataAnalytics from "@/assets/free-icon/Data-Analytics.svg";
import NonProfit from "@/assets/free-icon/Non-profit.svg";

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-white px-6 py-16">
      <div className="mx-auto w-full max-w-screen-2xl">
        {/* Header */}
        <div className="mb-10">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            02. CAPABILITIES
          </span>

          <h2 className="font-family-jakarta mt-4 text-5xl font-bold text-black md:text-6xl">
            Expertise.
          </h2>

          <p className="text-secondary mt-6 max-w-xl text-xl leading-relaxed font-semibold">
            Comprehensive technology solutions tailored{" "}
            <br className="hidden sm:block" />
            for modern enterprises.
          </p>
        </div>

        {/* Top row cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            tabIndex={0}
            className="hover:border-accent active:border-accent focus:border-accent rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-colors duration-200 ease-out focus:outline-none"
          >
            <Image
              src={DigitalTransformation}
              alt="Digital Transformation"
              width={56}
              height={56}
            />
            <h3 className="font-family-inter mt-6 text-xl font-bold text-gray-900">
              Digital Transformation
            </h3>
          </div>

          <div
            tabIndex={0}
            className="hover:border-accent active:border-accent focus:border-accent rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-colors duration-200 ease-out focus:outline-none"
          >
            <Image
              src={LargeSoftwareSystems}
              alt="Large Software Systems"
              width={56}
              height={56}
            />
            <h3 className="font-family-inter mt-6 text-xl font-bold text-gray-900">
              Large Software Systems
            </h3>
          </div>

          <div
            tabIndex={0}
            className="hover:border-accent active:border-accent focus:border-accent rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-colors duration-200 ease-out focus:outline-none"
          >
            <Image
              src={FintechSolutions}
              alt="FinTech Solutions"
              width={56}
              height={56}
            />
            <h3 className="font-family-inter mt-6 text-xl font-bold text-gray-900">
              FinTech Solutions
            </h3>
          </div>
        </div>

        {/* Description panel */}
        <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <p className="font-family-inter text-base leading-relaxed text-gray-900">
            Trexler Technology Systems has extensive experience in
            revolutionizing businesses through seamless digital transformation.
            With a proven track record in modernizing existing infrastructure,
            we specialize in meticulously orchestrating the migration of legacy
            systems, and seamlessly integrating them with cutting-edge
            technologies. Our approach is rooted in understanding the unique
            needs and challenges of each client, allowing us to build customized
            solutions that maximize efficiency and drive innovation.
          </p>

          <p className="font-family-inter mt-5 text-base leading-relaxed text-gray-900">
            At Trexler, we recognize that digital transformation is not a
            one-size-fits-all endeavor. Therefore, our team of experts
            collaborates closely with clients to conduct thorough assessments,
            identifying key areas for improvement and optimization. Whether
            it&apos;s migrating on-premises systems to the cloud, updating
            outdated software architectures, or implementing advanced data
            analytics solutions, we leverage industry-leading practices and
            technologies to deliver transformative results.
          </p>

          <p className="font-family-inter mt-5 text-base leading-relaxed text-gray-900">
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
            className="hover:border-accent active:border-accent focus:border-accent rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-colors duration-200 ease-out focus:outline-none"
          >
            <Image
              src={HealthcareSystems}
              alt="Healthcare Systems"
              width={56}
              height={56}
            />
            <h3 className="font-family-inter mt-6 text-xl font-bold text-gray-900">
              Healthcare Systems
            </h3>
          </div>

          <div
            tabIndex={0}
            className="hover:border-accent active:border-accent focus:border-accent rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-colors duration-200 ease-out focus:outline-none"
          >
            <Image
              src={DataAnalytics}
              alt="Data Analytics & Reporting"
              width={56}
              height={56}
            />
            <h3 className="font-family-inter mt-6 text-xl font-bold text-gray-900">
              Data Analytics &amp; Reporting
            </h3>
          </div>

          <div
            tabIndex={0}
            className="hover:border-accent active:border-accent focus:border-accent rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-colors duration-200 ease-out focus:outline-none"
          >
            <Image
              src={NonProfit}
              alt="Non-Profit Support"
              width={56}
              height={56}
            />
            <h3 className="font-family-inter mt-6 text-xl font-bold text-gray-900">
              Non-Profit Support
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
