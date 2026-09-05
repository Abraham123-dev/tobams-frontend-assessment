import React from "react";
import Image from "next/image";
import { CORPORATE_TRAINING_POINTS } from "@/data/content";
import { BoltIcon } from "./Icons";

export default function CorporateTrainings() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 flex flex-col items-start gap-5">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#151515] leading-[150%] tracking-[0.03em] font-heading">
            Corporate Trainings
          </h2>

          <p className="text-sm sm:text-[16px] text-[#696969] leading-[150%] font-normal">
            Empower your team with our customised Corporate Training programs
            designed to address the unique needs and objectives of your
            organisation. Our expert facilitators work closely with your team to
            deliver tailored learning experiences that align with your
            company&apos;s goals and values.
          </p>

          <ul className="space-y-2 pt-1">
            {CORPORATE_TRAINING_POINTS.map((point) => (
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
          <div className="relative w-full aspect-[602/346] rounded-tl-[36px] sm:rounded-tl-[56px] rounded-tr-[16px] sm:rounded-tr-[24px] rounded-br-[16px] sm:rounded-br-[23px] rounded-bl-[10px] sm:rounded-bl-[12px] overflow-hidden shadow-md">
            <Image
              src="/images/corporate-training.jpg"
              alt="Corporate training workshop conducted by Tobams Group"
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
