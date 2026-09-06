"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TOP_NAV_ITEMS } from "@/data/content";
import {
  UserIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
} from "./Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white relative z-40">
      {/* Tier 1: Top Bar (Logo + Action Buttons) - 104px Height */}
      <div className="w-full border-b border-[#DDD0DA]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 h-20 sm:h-[104px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex items-center" aria-label="Tobams Group Home">
            <div className="relative w-[140px] sm:w-[166px] h-12 sm:h-16">
              <Image
                src="/images/logo.png"
                alt="Tobams Group Logo"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 140px, 166px"
              />
            </div>
          </Link>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Account Button */}
            <Link
              href="#account"
              className="h-12 px-4 rounded-[4px] bg-[#571244] border border-[#571244] hover:bg-[#6e1857] transition-all flex items-center gap-3 active:scale-95"
            >
              <div className="w-8 h-8 rounded-full bg-[#DDD0DA] flex items-center justify-center text-[#571244]">
                <UserIcon className="w-4 h-4 text-[#571244]" />
              </div>
              <span className="text-white font-semibold text-[18px] leading-[150%]">
                Account
              </span>
              <ChevronDownIcon className="w-4 h-4 text-[#DDD0DA]" />
            </Link>

            {/* Take Assessment Button */}
            <Link
              href="#assessment"
              className="h-12 px-5 rounded-[4px] bg-[#EF4353] hover:bg-[#d82f3f] transition-all flex items-center justify-center text-white font-semibold text-[18px] leading-[150%] active:scale-95 shadow-xs"
            >
              Take Assessment
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-[#571244] hover:bg-[#571244]/10 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <CloseIcon className="w-7 h-7 text-[#571244]" />
            ) : (
              <MenuIcon className="w-7 h-7 text-[#571244]" />
            )}
          </button>
        </div>
      </div>

      {/* Tier 2: Bottom Navigation Links Bar (Desktop) - 69px Height */}
      <div className="hidden lg:block w-full">
        <div className="max-w-[1440px] mx-auto px-16 h-[69px] flex items-center justify-between">
          <nav className="flex items-center justify-between w-full" aria-label="Main Navigation">
            {TOP_NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex items-center gap-1.5 py-5 text-[18px] leading-[150%] transition-colors ${
                  item.isActive
                    ? "text-[#571244] font-semibold"
                    : "text-[#151515] font-normal hover:text-[#571244]"
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDownIcon className="w-3.5 h-3.5 text-[#571244]" />
                )}
                {item.isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#571244]" />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DDD0DA] px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 mb-6">
            {TOP_NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2 text-[18px] leading-[150%] border-b border-gray-100 ${
                  item.isActive
                    ? "text-[#571244] font-semibold"
                    : "text-[#151515] font-normal"
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDownIcon className="w-4 h-4 text-[#571244]" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="#account"
              onClick={() => setMobileMenuOpen(false)}
              className="h-12 px-4 rounded-[4px] bg-[#571244] text-white flex items-center justify-center gap-3 font-semibold text-[18px]"
            >
              <UserIcon className="w-4 h-4" />
              <span>Account</span>
            </Link>

            <Link
              href="#assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="h-12 px-5 rounded-[4px] bg-[#EF4353] text-white flex items-center justify-center font-semibold text-[18px]"
            >
              Take Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
