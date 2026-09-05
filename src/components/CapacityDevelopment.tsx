import React from "react";
import Image from "next/image";
import { CAPACITY_DEVELOPMENT_POINTS } from "@/data/content";
import { BoltIcon } from "./Icons";

export default function CapacityDevelopment() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 flex flex-col items-start gap-5">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#151515] leading-[150%] tracking-[0.03em] font-heading">
            Capacity Development
          </h2>

          <p className="text-sm sm:text-[16px] text-[#696969] leading-[150%] font-normal">
            At Tobams Group, we empower individuals and organizations through
            tailored training programs, expert-led workshops, and personalized
            mentorship. We are committed to your success and growth. We are
            dedicated to providing a comprehensive suite of benefits designed to
            foster your development and success:
          </p>

          <ul className="space-y-2 pt-1">
            {CAPACITY_DEVELOPMENT_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-sm sm:text-[16px] text-[#696969] leading-[150%]"
              >
                <BoltIcon className="w-4 h-4 text-[#1D0617] shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6">
          <div className="relative w-full aspect-[601/405] rounded-tl-[24px] sm:rounded-tl-[40px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] overflow-hidden shadow-md">
            <Image
              src="/images/capacity-development.jpg"
              alt="Capacity development workshop with interactive whiteboard presentations"
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
