import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LMS_COURSES } from "@/data/content";
import { ArrowUpRightIcon } from "./Icons";

export default function LMSSection() {
  return (
    <section id="lms" className="w-full py-10 bg-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="w-full bg-[#571244]/10 rounded-2xl p-6 sm:p-10 lg:p-12 xl:px-16 xl:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Pill-Rounded Team Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] lg:max-w-[440px] aspect-square rounded-full overflow-hidden shadow-md">
                <Image
                  src="/images/lms-team.jpg"
                  alt="TG Academy learning instructors and tech professionals"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 440px"
                />
              </div>
            </div>

            {/* Right Column: LMS Details & Courses */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#571244] leading-[150%] tracking-[0.03em] font-heading">
                Learning Management System
              </h2>

              {/* Inner Tinted Card */}
              <div className="w-full bg-[#571244]/10 rounded-[8px] p-6 sm:p-7 flex flex-col gap-5">
                <p className="text-sm sm:text-[18px] text-[#151515] leading-[150%] font-normal">
                  TG Academy is a hub of knowledge and skill-building resources
                  designed to empower tech talents on their learning journey.
                  From technical courses covering the latest programming
                  languages and development frameworks to soft skills training in
                  leadership, effective communication and project management, TG
                  Academy offers a wide range of courses to cater to diverse
                  learning needs. With accessible and interactive learning
                  materials, individuals can enhance their skills and stay ahead
                  in today&apos;s competitive tech landscape.
                </p>

                <div className="flex flex-col gap-3">
                  <h3 className="text-sm sm:text-[18px] font-bold text-[#571244] leading-[150%]">
                    Some of our courses include:
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm sm:text-[16px] text-[#151515] leading-[150%]">
                    {LMS_COURSES.map((course) => (
                      <span key={course} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#571244]" />
                        <span>{course}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
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
    </section>
  );
}
