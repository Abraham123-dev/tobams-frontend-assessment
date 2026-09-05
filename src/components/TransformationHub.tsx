import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TRANSFORMATION_HUB_POINTS } from "@/data/content";
import { ArrowUpRightIcon, BoltIcon } from "./Icons";

export default function TransformationHub() {
  return (
    <section id="transformation" className="w-full py-10 bg-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="w-full bg-[#EF4353]/20 rounded-[16px] p-6 sm:p-10 lg:p-10 border border-[#EF4353]/15">
          {/* Header area */}
          <div className="max-w-5xl mb-8 flex flex-col gap-2">
            <span className="text-base sm:text-[20px] font-semibold italic text-[#1671D9] font-heading">
              Learning With Our CEO:
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold italic text-[#571244] leading-[130%] font-heading">
              Transformation Hub With Jite Newton
            </h2>
            <p className="text-sm sm:text-[18px] text-[#151515] leading-[150%] font-normal pt-2">
              Transformation Hub with Jite Newton is a flagship webinar series
              curated by the CEO, Dr. Jite Newton. Designed to elevate career
              trajectories and leadership capabilities, this exclusive event
              offers invaluable insights and strategies for personal and
              professional growth. Whether you&apos;re seeking to advance your
              career or enhance your leadership skills, the Transformation Hub
              provides a transformative learning experience to unlock your full
              potential and drive success in your endeavours.
            </p>
          </div>

          {/* Bottom Grid: Image + White Pill Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[560/340] rounded-[8px] overflow-hidden shadow-md">
                <Image
                  src="/images/transformation-hub.jpg"
                  alt="Transformation Hub webinar participant analyzing digital dashboard"
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Right Column: White Translucent Container with 6 Pills */}
            <div className="lg:col-span-7 bg-white/30 rounded-[8px] p-6 sm:p-8 flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {TRANSFORMATION_HUB_POINTS.map((item) => (
                  <div
                    key={item}
                    className="h-14 sm:h-[60px] px-4 bg-white rounded-[12px] flex items-center gap-3 shadow-2xs border border-white/60"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#DDD0DA] border border-[#571244] flex items-center justify-center text-[#571244] shrink-0">
                      <BoltIcon className="w-3.5 h-3.5 text-[#571244]" />
                    </div>
                    <span className="text-[#151515] text-xs sm:text-[16px] font-normal leading-tight line-clamp-1">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[4px] bg-[#571244] hover:bg-[#6e1857] active:bg-[#430e34] transition-all text-white font-semibold text-[18px] leading-[150%] active:scale-95 shadow-xs"
                >
                  <span>Learn More</span>
                  <ArrowUpRightIcon className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
