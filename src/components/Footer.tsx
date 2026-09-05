import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_SECTIONS } from "@/data/content";
import { LinkedinIcon, TwitterIcon, InstagramIcon, MailIcon, PhoneIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#11040E] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 pt-16 pb-8 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-white/10">
          <div className="lg:col-span-4 flex flex-col items-start gap-5">
            <Link href="/" aria-label="Tobams Group Home">
              <Image
                src="/images/logo.png"
                alt="Tobams Group"
                width={166}
                height={64}
                className="object-contain"
              />
            </Link>

            <p className="text-[14px] text-[#F8F8F8] leading-[160%] font-normal max-w-[280px]">
              Tobams Group is an innovative consultancy firm reshaping the future
              of tech talent development in Africa, specializing in talent
              acquisition, internships, and skill development with a global
              perspective.
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#11040E] hover:bg-[#EF4353] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#11040E] hover:bg-[#EF4353] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#11040E] hover:bg-[#EF4353] hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <TwitterIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-[16px] font-semibold text-white">What We Do</h3>
            <ul className="space-y-3">
              {FOOTER_SECTIONS.whatWeDo.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[14px] text-white/80 hover:text-white transition-colors leading-[150%]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-[16px] font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              {FOOTER_SECTIONS.company.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[14px] text-white/80 hover:text-white transition-colors leading-[150%]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-[16px] font-semibold text-white">Solution</h3>
            <ul className="space-y-3">
              {FOOTER_SECTIONS.solution.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[14px] text-white/80 hover:text-white transition-colors leading-[150%]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full bg-white/[0.06] rounded-[8px] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            <h4 className="text-[16px] font-bold text-white">Registered Offices</h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[14px] font-semibold text-[#EF4353] mb-1">United Kingdom</p>
                <p className="text-[13px] text-white/80 leading-[160%]">
                  07451196 (Registered by Company House)
                  <br />
                  Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                </p>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#EF4353] mb-1">Nigeria</p>
                <p className="text-[13px] text-white/80 leading-[160%]">
                  RC 1048722 (Registered by the Corporate Affairs Commission)
                  <br />
                  4. Muaz Close, Angwar-Rimi
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[16px] font-bold text-white">Contact Information</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:theteam@tobamsgroup.com"
                className="flex items-center gap-2 text-[13px] text-white/80 hover:text-white transition-colors"
              >
                <MailIcon className="w-4 h-4 text-[#EF4353] shrink-0" />
                theteam@tobamsgroup.com
              </a>
              <a
                href="tel:+447886600748"
                className="flex items-center gap-2 text-[13px] text-white/80 hover:text-white transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-[#EF4353] shrink-0" />
                +447886600748
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-white/50">
          <p>Copyright &copy; Tobams Group, 2024. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors underline underline-offset-2">
              Terms and Conditions
            </Link>
            <Link href="#" className="hover:text-white transition-colors underline underline-offset-2">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors underline underline-offset-2">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
