"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/content";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-16 bg-[#F9F9F9] border-b border-black/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 flex flex-col gap-10">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-[40px] font-bold text-[#151515] leading-[130%] font-heading">
            Testimonials
          </h2>
        </div>

        {/* Desktop 3-Card Row */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] p-6 border-l-2 border-l-[#EF4353] shadow-xs flex flex-col justify-between gap-6"
            >
              <div className="flex items-center gap-5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-gray-100">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#151515] leading-[150%]">
                    {t.name}
                  </h3>
                  <p className="text-[14px] text-[#696969] leading-[150%] font-normal">
                    {t.role}
                  </p>
                </div>
              </div>

              <p className="text-[18px] text-[#151515] leading-[150%] font-normal">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet View */}
        <div className="lg:hidden">
          <div className="bg-white rounded-[16px] p-6 border-l-2 border-l-[#EF4353] shadow-xs flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-gray-100">
                <Image
                  src={TESTIMONIALS[currentIndex].avatar}
                  alt={TESTIMONIALS[currentIndex].name}
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-[#151515]">
                  {TESTIMONIALS[currentIndex].name}
                </h3>
                <p className="text-[14px] text-[#696969]">
                  {TESTIMONIALS[currentIndex].role}
                </p>
              </div>
            </div>

            <p className="text-base sm:text-[18px] text-[#151515] leading-[150%]">
              &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
            </p>
          </div>
        </div>

        {/* Bottom Carousel Arrow Controls (#EF4353 on rgba(240, 67, 84, 0.1)) */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-8 h-8 rounded-[8px] bg-[#EF4353]/10 hover:bg-[#EF4353]/20 flex items-center justify-center text-[#EF4353] transition-all active:scale-90"
          >
            <ArrowLeftIcon className="w-4 h-4 text-[#EF4353]" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-8 h-8 rounded-[8px] bg-[#EF4353]/10 hover:bg-[#EF4353]/20 flex items-center justify-center text-[#EF4353] transition-all active:scale-90"
          >
            <ArrowRightIcon className="w-4 h-4 text-[#EF4353]" />
          </button>
        </div>
      </div>
    </section>
  );
}
