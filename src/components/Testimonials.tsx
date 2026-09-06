"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/content";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 390;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white py-10 md:py-14 border-b border-black/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 flex flex-col gap-8 md:gap-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-[40px] font-bold text-[#151515] leading-[130%] font-heading tracking-tight">
            Testimonials
          </h2>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth pb-4 px-1"
        >
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="relative w-[320px] sm:w-[360px] lg:w-[380px] shrink-0 bg-white rounded-[16px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-start gap-5 transition-transform hover:-translate-y-0.5"
            >
              <div className="absolute left-0 top-3 bottom-3 w-[3px] bg-[#EF4353] rounded-r-full" />

              <div className="flex items-center gap-4">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#151515] leading-tight">
                    {t.name}
                  </h3>
                  <p className="text-[13px] text-[#696969] leading-tight mt-1">
                    {t.role}
                  </p>
                </div>
              </div>

              <p className="text-[15px] sm:text-[16px] text-[#151515] leading-[160%] font-normal">
                {t.quote}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 pt-1">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous testimonials"
            className="w-8 h-8 rounded-[8px] bg-[#EF4353]/10 hover:bg-[#EF4353]/20 flex items-center justify-center text-[#EF4353] transition-all active:scale-90 cursor-pointer"
          >
            <ArrowLeftIcon className="w-4 h-4 text-[#EF4353]" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next testimonials"
            className="w-8 h-8 rounded-[8px] bg-[#EF4353]/10 hover:bg-[#EF4353]/20 flex items-center justify-center text-[#EF4353] transition-all active:scale-90 cursor-pointer"
          >
            <ArrowRightIcon className="w-4 h-4 text-[#EF4353]" />
          </button>
        </div>
      </div>
    </section>
  );
}
