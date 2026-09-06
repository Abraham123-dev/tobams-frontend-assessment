import React from "react";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="w-full py-10 bg-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 flex justify-center">
        <div className="w-full max-w-[1134px] bg-[#571244] rounded-[8px] p-8 sm:p-12 text-center text-white flex flex-col items-center justify-center gap-8 shadow-md">
          <p className="text-base sm:text-[20px] font-semibold text-white leading-[150%] max-w-[1006px] tracking-[0.03em]">
            Want to accelerate professional growth and development at your organisation?
            <br className="hidden sm:inline" /> See how we can help.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-6 rounded-[4px] bg-white border border-[#571244] hover:bg-gray-50 active:scale-95 transition-all text-[#571244] font-semibold text-[18px] leading-[120%] shadow-xs"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
