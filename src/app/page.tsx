"use client";

import Image from "next/image";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


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
            {/* Status Badge */}      {/* Industries Section */}

            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border  border-gray-400 px-2 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-[11px] font-family-inter uppercase tracking-[0.16em] text-trexler-black">
                  Available for Enterprise Projects
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:[10rem] xl:text-8xl font-bold mb-6  font-family-jakarta">
              <span className="block">
                <span className=" text-trexler-dark">BUILDIN</span>
                <span className="text-gray-700">G</span>
              </span>
                
              
              
              <span className="block">
                <span className="text-trexler-dark">TOMORR</span>
                <span className="text-gray-500">OW&apos;S</span>
              </span>

              <span className="block drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
                <span className="text-trexler-dark">SOLUTION</span>
                <span className="text-gray-500">S </span>
                <span className="text-gray-500">TODAY</span>
              </span>
            </h1>

              {/* Subtitle + CTA Row */}
            <div className="mx-auto mb-8 sm:mb-12 flex max-w-5xl flex-col gap-6 lg:flex-row lg:items-end sm:justify-between">
            {/* Subtitle */}
            <div className="flex w-full items-start gap-4 lg:w-auto lg:flex-1 ">
              {/* Yellow line */}
              <span className="mt-1 h-24 w-1 rounded-full bg-trexler-yellow" />

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
            items-center justify-center rounded-full bg-trexler-yellow 
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
                  <span className="text-sm font-semibold uppercase tracking-wider text-trexler-yellow">
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
                  <h3 className="text-2xl font-bold font-family-jakarta leading-tight text-black md:text-3xl">
                    Trexler Technology Systems is{" "}
                    <span className="text-trexler-yellow underline decoration-trexler-yellow underline-offset-8 decoration-[3px]">
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

        {/* Capabilities Section */}
            <section id="capabilities" className="bg-white px-6 py-16">
              <div className="mx-auto w-full  max-w-screen-2xl">
                {/* Header */}
                <div className="mb-10">
                  <span className="text-sm font-semibold uppercase tracking-wider text-trexler-yellow">
                    02. CAPABILITIES
                  </span>

                  <h2 className="mt-4 text-5xl font-bold font-family-jakarta text-black md:text-6xl">
                    Expertise.
                  </h2>

                  <p className="mt-6 max-w-xl text-xl font-semibold leading-relaxed text-trexler-blue">
                    Comprehensive technology solutions tailored <br className="hidden sm:block" />
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
                      hover:border-trexler-yellow
                      active:border-trexler-yellow
                      focus:border-trexler-yellow
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
                      hover:border-trexler-yellow
                      active:border-trexler-yellow
                      focus:border-trexler-yellow
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
                      hover:border-trexler-yellow
                      active:border-trexler-yellow
                      focus:border-trexler-yellow
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
                    Trexler Technology Systems has extensive experience in revolutionizing businesses through seamless
                    digital transformation. With a proven track record in modernizing existing infrastructure, we specialize
                    in meticulously orchestrating the migration of legacy systems, and seamlessly integrating them with
                    cutting-edge technologies. Our approach is rooted in understanding the unique needs and challenges of
                    each client, allowing us to build customized solutions that maximize efficiency and drive innovation.
                  </p>

                  <p className="mt-5 text-base leading-relaxed text-gray-900 font-family-inter">
                    At Trexler, we recognize that digital transformation is not a one-size-fits-all endeavor. Therefore, our
                    team of experts collaborates closely with clients to conduct thorough assessments, identifying key areas
                    for improvement and optimization. Whether it&apos;s migrating on-premises systems to the cloud, updating
                    outdated software architectures, or implementing advanced data analytics solutions, we leverage
                    industry-leading practices and technologies to deliver transformative results.
                  </p>

                  <p className="mt-5 text-base leading-relaxed text-gray-900 font-family-inter">
                    Our commitment to excellence extends beyond the initial implementation phase. We provide comprehensive
                    support and maintenance services to ensure that our solutions continue to deliver value over the long
                    term. Furthermore, our agile methodologies enable us to adapt quickly to evolving business needs,
                    ensuring that our clients remain ahead of the curve in today&apos;s rapidly changing technology landscape.
                  </p>
                </div>

                {/* Bottom row cards */}
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div
                    tabIndex={0}
                    className="
                      rounded-2xl border border-gray-100 bg-white p-8 shadow-sm
                      transition-colors duration-200 ease-out
                      hover:border-trexler-yellow
                      active:border-trexler-yellow
                      focus:border-trexler-yellow
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
                      hover:border-trexler-yellow
                      active:border-trexler-yellow
                      focus:border-trexler-yellow
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
                      hover:border-trexler-yellow
                      active:border-trexler-yellow
                      focus:border-trexler-yellow
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

          {/* Industries Section */}
          <section className="py-16 md:py-24 px-6 md:px-12 bg-trexler-dark rounded-t-[70px] font-family-inter">
              <div className="container mx-auto max-w-7xl">
              <div className="mb-4">
                <span className="text-trexler-yellow text-sm font-semibold tracking-wider uppercase">
                  3.INDUSTRIES
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Industries We Serve.
              </h2>

              <p className="text-xl text-gray-300 mb-10 sm:mb-16 max-w-3xl">
                Comprehensive technology solutions tailored <br /> for modern enterprises.
              </p>

              {/* MOBILE: Swiper */}
              <div className="sm:hidden">
                <Swiper
                  modules={[Pagination]}
                  slidesPerView={1}
                  spaceBetween={16}
                  pagination={{ clickable: true }}
                  className="industries-swiper"
                >
                  {/* Healthcare */}
                  <SwiperSlide>
                    <div className="group rounded-3xl overflow-hidden 
                    border border-gray-200 bg-white">
                      <div className="relative aspect-square p-2">
                        <div className="relative h-full w-full overflow-hidden 
                        rounded-2xl border border-white bg-white">
                          <Image
                          src="/assets/industry-healthcare.png" 
                          alt="Healthcare" 
                          fill 
                          className="object-contain p-2" 
                          />
                        </div>
                      </div>
                      <div className="p-2">
                        <h3 className="text-2xl font-bold text-gray-900 ">
                          Healthcare  
                        </h3>
                        <p  className="text-gray-700">
                          Streamlining operations and improving patient outcomes.
                          </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Financial Services */}
                  <SwiperSlide>
                    <div className="group rounded-3xl overflow-hidden border border-gray-200 bg-white ">
                      <div className="relative aspect-square p-6">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white bg-white">
                          <Image 
                          src="/assets/industry-financial.png"
                          alt="Financial Services" 
                          fill
                          className="object-contain p-4" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Financial Services
                        </h3>
                        <p className="text-gray-700">
                          Enhancing security and transaction speed.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Enterprise & Tech */}
                  <SwiperSlide>
                    <div className="group rounded-3xl overflow-hidden border border-gray-200 bg-white ">
                      <div className="relative aspect-square p-6">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white bg-white">
                          <Image src="/assets/industry-enterprise.png" 
                          alt="Enterprise & Tech" 
                          fill 
                          className="object-contain p-4" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise & Tech</h3>
                        <p className="text-gray-700">Scalable systems for large organizations.</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Non-Profit */}
                  <SwiperSlide>
                    <div className="group rounded-3xl overflow-hidden border border-gray-200 bg-white ">
                      <div className="relative aspect-square p-6">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white bg-white">
                          <Image 
                          src="/assets/industry-nonprofit.png" 
                          alt="Non-Profit" 
                          fill 
                          className="object-contain p-4" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Non-Profit</h3>
                        <p className="text-gray-700">Technology to amplify social impact.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* DESKTOP/TABLET: Grid */}
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Healthcare */}
                <div className="group rounded-3xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:bg-trexler-yellow hover:border-trexler-yellow">
                  <div className="relative aspect-square p-6">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white bg-white">
                      <Image src="/assets/industry-healthcare.png" alt="Healthcare" fill className="object-contain p-8" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Healthcare</h3>
                    <p className="text-gray-700">Streamlining operations and improving patient outcomes.</p>
                  </div>
                </div>

                {/* Financial Services */}
                <div className="group rounded-3xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:bg-trexler-yellow hover:border-trexler-yellow">
                  <div className="relative aspect-square p-6">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white bg-white">
                      <Image src="/assets/industry-financial.png" alt="Financial Services" fill className="object-contain p-8" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Financial Services</h3>
                    <p className="text-gray-700">Enhancing security and transaction speed.</p>
                  </div>
                </div>

                {/* Enterprise & Tech */}
                <div className="group rounded-3xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:bg-trexler-yellow hover:border-trexler-yellow">
                  <div className="relative aspect-square p-6">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white bg-white">
                      <Image src="/assets/industry-enterprise.png" alt="Enterprise & Tech" fill className="object-contain p-8" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise & Tech</h3>
                    <p className="text-gray-700">Scalable systems for large organizations.</p>
                  </div>
                </div>

                {/* Non-Profit */}
                <div className="group rounded-3xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:bg-trexler-yellow hover:border-trexler-yellow">
                  <div className="relative aspect-square p-6">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white bg-white">
                      <Image src="/assets/industry-nonprofit.png" alt="Non-Profit" fill className="object-contain p-4" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Non-Profit</h3>
                    <p className="text-gray-700">Technology to amplify social impact.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        {/* Projects Section */}
        <section id="projects"
          className="py-20 px-2 bg-white font-family-inter">
          <div className="container mx-auto max-w-screen-2xl">
            <div className=" mb-4">
              <span className="text-trexler-yellow text-sm font-semibold tracking-wider uppercase">
                04.Work</span> 
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6">
              Projects & Solutions.
            </h2>

            <p className="text-2xl text-gray-500 mb-16 max-w-3xl">
              Comprehensive technology solutions tailored for modern enterprises.
            </p>

            {/* Project 1: Baker Baby App */}
            <section className="w-full font">
              <div className="rounded-3xl lg:rounded-[44px] bg-trexler-dark p-6 sm:p-8 lg:p-10 overflow-hidden">
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
                        We partnered with BakerBaby to revolutionize their mobile pregnant experience. Our team developed
                         a comprehensive suite of tools that assists mothers-to-be with health tracking and personalized
                        milestones. This digital companion ensures that users feel supported and informed throughout every trimester of their journey.
                      </p>

                      {/* CTA */}
                      <Link
                        href="/projects/baker-baby-app"
                        className="mt-6 sm:mt-8 inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-trexler-yellow px-8 sm:px-10 text-sm sm:text-base font-semibold text-[#111] shadow-sm transition hover:brightness-95"
                      >
                        View Case Study
                      </Link>
                    </div>

                    {/* Bottom Chips */}
                    <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-3">
                      {
                      ["Figma", "React Native", "Node.js", "Firebase"].map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-[#424242] px-4 sm:px-5 py-1.5 sm:py-2
                           text-xs sm:text-sm font-medium text-trexler-yellow"
                        >
                          {item}
                        </span>
                      ))
                      }
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
                        Client: <span className="font-semibold">Reliable Force Co.</span>
                      </p>

                      {/* Description */}
                      <p className="mt-6 sm:mt-8 max-w-xl text-sm sm:text-base leading-relaxed text-gray-800">
                        Multifaceted company providing comprehensive solutions in business
                        consultation, trading, services, construction, manpower supply,
                        operation &amp; maintenance. We built a robust digital ecosystem
                        that centralizes these diverse service lines into a single,
                        high-performance platform.
                      </p>

                      {/* CTA */}
                      <Link
                        href="/projects/reliable-force"
                        className="mt-6 sm:mt-8 inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-trexler-yellow px-8 sm:px-10 text-sm sm:text-base font-semibold text-[#111] shadow-sm transition hover:brightness-95"
                      >
                        View Case Study
                      </Link>
                    </div>

                    {/* Bottom Chips */}
                    <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-3">
                      {
                      ["Figma", "Next.js", "Tailwind", "CMS"].map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-[#cec7c7] px-4 sm:px-5 py-1.5 sm:py-2
                           text-xs sm:text-sm font-medium text-blue-950"
                        >
                          {item}
                        </span>
                      ))
                      }
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

          {/* CTA Section */}
          <section className="py-20 px-4 bg-trexler-yellow">
            <div className="container mx-auto max-w-5xl text-center font-family-inter">
              <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold text-black mb-6">
                Ready to transform your business?
              </h2>
              <p className="text-xl text-black mb-8 font-semibold">
              Partner with Trexler Technology Systems to build the future today.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-black
                hover:bg-gray-900 text-white font-semibold px-10 py-5 rounded-full
                  transition-all duration-300 transform hover:scale-105  "
              >
                Get in touch
              
              </Link>
            </div>
          </section>
      
    </main>


  );
}
