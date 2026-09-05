import React from "react";
import Link from "next/link";
import { CONSULTANT_FEATURES } from "@/data/content";
import { ArrowUpRightIcon } from "./Icons";

export default function TrainingConsultant() {
  return (
    <section id="consultant" className="w-full py-10 bg-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="w-full flex flex-col gap-8">
          {/* Header area */}
          <div className="max-w-5xl flex flex-col gap-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#571244] leading-[130%] font-heading">
              Training The Consultant
            </h2>
            <h3 className="text-base sm:text-[18px] font-semibold text-[#571244] leading-[150%]">
              Maximise Your Potential as a Certified Trainer:
            </h3>
            <p className="text-sm sm:text-[18px] text-[#151515] leading-[150%] font-normal">
              With the help of our Training Consultants program, take a
              revolutionary step toward becoming a distinguished certified
              training consultant. Learn from professionals in the field,
              immerse yourself in a thorough curriculum, and hone your training
              methods through interactive workshops. Participating in our
              program will enable you to gain expertise in diverse courses while
              also developing the abilities to mentor and encourage others in
              their career advancement.
            </p>
          </div>

          {/* 4 Feature Items Box with Deep Plum Background (#571244) */}
          <div className="w-full bg-[#571244] rounded-[8px] p-6 sm:p-8 text-white shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {CONSULTANT_FEATURES.map((feature) => (
                <div key={feature.title} className="flex flex-col gap-2.5">
                  <h4 className="text-base sm:text-[18px] font-bold text-white leading-[150%] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#EF4353]" />
                    <span>{feature.title}</span>
                  </h4>
                  <p className="text-sm sm:text-[18px] text-white/90 leading-[150%] font-normal">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Learn More Button */}
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
    </section>
  );
}
