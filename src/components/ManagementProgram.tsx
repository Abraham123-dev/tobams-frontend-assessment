import React from "react";
import Image from "next/image";
import { MANAGEMENT_PROGRAM_POINTS } from "@/data/content";
import { BoltIcon } from "./Icons";

export default function ManagementProgram() {
  return (
    <section id="management" className="w-full py-10 bg-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="w-full bg-[#2C0922] rounded-[20px] p-6 sm:p-10 lg:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Image with Asymmetrical Border Radius (8px 8px 0px 8px) */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[592/639] rounded-tl-[8px] rounded-tr-[8px] rounded-br-none rounded-bl-[8px] overflow-hidden shadow-md">
                <Image
                  src="/images/management-program.jpg"
                  alt="Management development cohort reviewing performance data"
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Column: Program Info & 4 Pill Rows */}
            <div className="lg:col-span-6 flex flex-col items-start gap-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-white leading-[150%] tracking-[0.03em] font-heading">
                Management Development Program
              </h2>

              <p className="text-sm sm:text-[16px] text-white leading-[150%] font-normal">
                Tobams Group offers a comprehensive Management Development
                Program designed to equip corporate organisations with the high-performing
                leaders they need to thrive.
              </p>

              <p className="text-sm sm:text-[16px] text-white leading-[150%] font-normal">
                Our program includes workshops, seminars, coaching sessions,
                online courses, and experiential learning opportunities designed
                to improve leadership, strategic thinking, communication, and
                other essential managerial competencies for corporate
                organisations.
              </p>

              {/* 4 Feature Pills with #8F6182 background */}
              <div className="w-full flex flex-col gap-4 pt-2">
                {MANAGEMENT_PROGRAM_POINTS.map((point) => (
                  <div
                    key={point}
                    className="w-full h-10 sm:h-11 px-3 py-1 bg-[#8F6182] rounded-[8px] flex items-center gap-3"
                  >
                    <BoltIcon className="w-5 h-5 text-white shrink-0" />
                    <span className="text-white font-semibold text-sm sm:text-[18px] leading-[150%]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
