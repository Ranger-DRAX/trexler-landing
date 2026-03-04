"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import IndustryCard from "@/components/home/IndustryCard";

const industries = [
  {
    title: "Healthcare",
    desc: "Streamlining operations and improving patient outcomes.",
    img: "/assets/industry-healthcare.png",
  },
  {
    title: "Financial Services",
    desc: "Enhancing security and transaction speed.",
    img: "/assets/industry-financial.png",
  },
  {
    title: "Enterprise & Tech",
    desc: "Scalable systems for large organizations.",
    img: "/assets/industry-enterprise.png",
  },
  {
    title: "Non-Profit",
    desc: "Technology to amplify social impact.",
    img: "/assets/industry-nonprofit.png",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-primary font-family-inter rounded-t-[70px] px-6 py-16 sm:rounded-t-[100px] md:px-12 md:py-24">
      <div className="container mx-auto max-w-screen-2xl">
        <div className="mb-4">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            3.INDUSTRIES
          </span>
        </div>

        <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Industries We Serve.
        </h2>

        <p className="mb-10 max-w-3xl text-xl text-gray-300 sm:mb-16">
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
            {industries.map((item) => (
              <SwiperSlide key={item.title}>
                <IndustryCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP/TABLET: Grid */}
        <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <IndustryCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
