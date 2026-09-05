import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[511px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Linear Gradient Overlay (0.7 opacity) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Training and Development background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Hero Content Container: padding 112px 64px, gap 48px */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-[112px] flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center gap-10 max-w-[1312px] w-full">
          {/* Caption Tag: WHAT WE DO */}
          <div className="inline-flex items-center justify-center px-12 py-3 rounded-[100px] bg-white/10 backdrop-blur-xs text-white text-[14px] font-semibold tracking-normal uppercase">
            WHAT WE DO
          </div>

          {/* Heading and Description Frame */}
          <div className="flex flex-col items-center gap-[15px] max-w-[1205px]">
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[130%] font-heading tracking-tight">
              Training and Development
            </h1>

            <p className="text-base sm:text-[18px] font-semibold text-white leading-[150%] max-w-[1077px]">
              Our comprehensive range of programs and resources is designed to
              enhance skills, broaden knowledge, and propel careers forward in
              today&apos;s ever-evolving landscape.
            </p>
          </div>

          {/* Get Started Button */}
          <div>
            <Link
              href="#lms"
              className="inline-flex items-center justify-center h-12 px-6 rounded-[4px] bg-[#571244] hover:bg-[#6e1857] active:bg-[#430e34] transition-all text-white font-semibold text-[18px] leading-[150%] shadow-md active:scale-95"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
