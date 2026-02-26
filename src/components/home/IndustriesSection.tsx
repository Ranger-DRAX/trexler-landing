"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function IndustriesSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-primary rounded-t-[70px] sm:rounded-t-[100px] font-family-inter">
      <div className="container mx-auto max-w-screen-2xl">
        <div className="mb-4">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            3.INDUSTRIES
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Industries We Serve.
        </h2>

        <p className="text-xl text-gray-300 mb-10 sm:mb-16 max-w-3xl">
          Comprehensive technology solutions tailored <br /> for modern
          enterprises.
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
              <div
                className="group rounded-3xl overflow-hidden 
                    border border-gray-200 bg-white"
              >
                <div className="relative aspect-square p-2">
                  <div
                    className="relative h-full w-full overflow-hidden 
                        rounded-2xl border border-white bg-white"
                  >
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
                  <p className="text-gray-700">
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
                      className="object-contain p-4"
                    />
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
                    <Image
                      src="/assets/industry-enterprise.png"
                      alt="Enterprise & Tech"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Enterprise & Tech
                  </h3>
                  <p className="text-gray-700">
                    Scalable systems for large organizations.
                  </p>
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
                      className="object-contain p-4"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Non-Profit
                  </h3>
                  <p className="text-gray-700">
                    Technology to amplify social impact.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* DESKTOP/TABLET: Grid */}
        <div className="hidden sm:grid 
          sm:grid-cols-[repeat(2,288px)]
          lg:grid-cols-[repeat(4,288px)]
          gap-x-9 gap-y-4"
        >
          {/* Healthcare */}
          <div className="group w-[288px] h-[328.68px] rounded-3xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:bg-accent hover:border-accent flex flex-col">
            {/* Image: 256 x 194.68 */}
            <div className="px-4 pt-4">
              <div className="relative w-full h-[194.68px] overflow-hidden rounded-2xl border border-white bg-white">
                <Image
                  src="/assets/industry-healthcare.png"
                  alt="Healthcare"
                  fill
                  sizes="256px"
                  className="object-contain p-4"
                />
              </div>
            </div>

            <div className="p-4 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Healthcare
              </h3>
              <p className="text-gray-700">
                Streamlining operations and improving patient outcomes.
              </p>
            </div>
          </div>

          {/* Financial Services */}
          <div className="group w-[288px] h-[328.68px] rounded-3xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:bg-accent hover:border-accent flex flex-col">
            <div className="px-4 pt-4">
              <div className="relative w-full h-[194.68px] overflow-hidden rounded-2xl border border-white bg-white">
                <Image
                  src="/assets/industry-financial.png"
                  alt="Financial Services"
                  fill
                  sizes="256px"
                  className="object-contain p-4"
                />
              </div>
            </div>

            <div className="p-4 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Financial Services
              </h3>
              <p className="text-gray-700">
                Enhancing security and transaction speed.
              </p>
            </div>
          </div>

          {/* Enterprise & Tech */}
          <div className="group w-[288px] h-[328.68px] rounded-3xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:bg-accent hover:border-accent flex flex-col">
            <div className="px-4 pt-4">
              <div className="relative w-full h-[194.68px] overflow-hidden rounded-2xl border border-white bg-white">
                <Image
                  src="/assets/industry-enterprise.png"
                  alt="Enterprise & Tech"
                  fill
                  sizes="256px"
                  className="object-contain p-4"
                />
              </div>
            </div>

            <div className="p-4 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Enterprise & Tech
              </h3>
              <p className="text-gray-700">
                Scalable systems for large organizations.
              </p>
            </div>
          </div>

          {/* Non-Profit */}
          <div className="group w-[288px] h-[328.68px] rounded-3xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:bg-accent hover:border-accent flex flex-col">
            <div className="px-4 pt-4">
              <div className="relative w-full h-[194.68px] overflow-hidden rounded-2xl border border-white bg-white">
                <Image
                  src="/assets/industry-nonprofit.png"
                  alt="Non-Profit"
                  fill
                  sizes="256px"
                  className="object-contain p-4"
                />
              </div>
            </div>

            <div className="p-4 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Non-Profit
              </h3>
              <p className="text-gray-700">
                Technology to amplify social impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
