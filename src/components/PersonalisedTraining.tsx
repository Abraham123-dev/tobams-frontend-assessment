import React from "react";
import Image from "next/image";
import { PERSONALISED_TRAINING_POINTS } from "@/data/content";
import { BoltIcon } from "./Icons";

export default function PersonalisedTraining() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative w-full aspect-[599/378] rounded-tl-[24px] sm:rounded-tl-[33px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] overflow-hidden shadow-md">
            <Image
              src="/images/personalised-training.jpg"
              alt="Personalised one-on-one training session with Tobams Group experts"
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start gap-5">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#151515] leading-[150%] tracking-[0.03em] font-heading">
            Personalised Individual Training
          </h2>

          <p className="text-sm sm:text-[16px] text-[#696969] leading-[150%] font-normal">
            Begin a journey of lifelong learning and professional development
            with Tobams Group&apos;s diverse range of training programs for
            individuals. From technical skills mastery to soft skills
            enhancement, our courses cover a wide spectrum of topics to meet the
            evolving needs of today&apos;s professionals.
          </p>

          <ul className="space-y-2 pt-1">
            {PERSONALISED_TRAINING_POINTS.map((point) => (
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
      </div>
    </div>
  );
}
