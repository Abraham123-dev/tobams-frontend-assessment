import React from "react";
import Link from "next/link";

export default function PreFooterBanner() {
  return (
    <section className="w-full bg-[#1D0617] border-b-2 border-[#C4C4C4] py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <span className="text-sm sm:text-[18px] font-normal text-white leading-[150%]">
              Ready to be a part of something extraordinary?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-white leading-[130%] font-heading">
              Let&apos;s work together to create a difference
            </h2>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-6 rounded-[4px] bg-[#571244] hover:bg-[#6e1857] active:bg-[#430e34] transition-all text-white font-semibold text-[18px] leading-[120%] shrink-0 active:scale-95 shadow-md"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
