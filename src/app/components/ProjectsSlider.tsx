"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

export type Shot = { src: string; alt?: string };

export type ProjectSlide = {
  id: string | number;
  shots: [Shot, Shot, Shot];
};

export default function ProjectsSlider({
  projects,
  onProjectChange,
}: {
  projects: ProjectSlide[];
  onProjectChange?: (index: number) => void;
}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = projects.length;
  const current = useMemo(() => Math.min(activeIndex + 1, total), [activeIndex, total]);

  // Scrollbar thumb movement
  const THUMB_W = "clamp(64px, 12vw, 120px)";
  const denom = Math.max(total - 1, 1);
  const thumbLeft = total <= 1 ? "0px" : `calc(${activeIndex} * (100% - ${THUMB_W}) / ${denom})`;

  return (
    <section className="mx-auto w-full max-w-[1200px] flex flex-col items-center gap-8">
      {/* Slider Frame */}
      <div className="w-full h-[420px] sm:h-[460px] lg:h-[505px]">
        <Swiper
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(s) => {
            setActiveIndex(s.realIndex);
            onProjectChange?.(s.realIndex);
          }}
          slidesPerView={1}
          spaceBetween={32}
          grabCursor
          className="h-full w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="h-full">
              <div className="h-full w-full flex items-center justify-center">
                {/* MOBILE: 1 big image */}
                <div className="w-full flex items-center justify-center lg:hidden">
                  <div className="relative overflow-hidden rounded-[24px] bg-white w-full max-w-[384px] h-[393.49px]">
                    <Image
                      src={project.shots[0].src}
                      alt={project.shots[0].alt ?? `Project ${project.id} screenshot 1`}
                      fill
                      className="object-cover"
                      priority={activeIndex === 0}
                    />
                  </div>
                </div>

                {/* DESKTOP: 3 images (unchanged) */}
                <div className="hidden w-full items-center justify-center gap-6 lg:flex lg:gap-8">
                  {project.shots.map((shot, idx) => (
                    <div
                      key={`${project.id}-${idx}`}
                      className="
                        relative overflow-hidden rounded-[24px] bg-white
                        w-full max-w-[384px]
                        h-[393.49px] lg:w-[384px]
                        flex-1
                      "
                    >
                      <Image
                        src={shot.src}
                        alt={shot.alt ?? `Project ${project.id} screenshot ${idx + 1}`}
                        fill
                        className="object-cover"
                        priority={activeIndex === 0 && idx < 3}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom controls */}
      <div className="w-full flex items-center gap-5">
        <div className="min-w-[60px] text-lg font-semibold text-black/60">
          {current}/{total}
        </div>

        {/* Scrollbar track + thumb */}
        <div className="relative h-[3px] flex-1 rounded-full bg-black/10 overflow-hidden">
          <div
            className="absolute top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-trexler-yellow transition-[left] duration-300"
            style={{ width: THUMB_W, left: thumbLeft }}
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous"
            className="grid h-10 w-10 place-items-center rounded-full bg-white border border-black/10 hover:bg-gray-50 disabled:opacity-40"
            disabled={current === 1}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next"
            className="grid h-10 w-10 place-items-center rounded-full bg-trexler-yellow hover:brightness-95 disabled:opacity-40"
            disabled={current === total}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}