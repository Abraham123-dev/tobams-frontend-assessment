import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LMSSection from "@/components/LMSSection";
import TrainingProgramsSection from "@/components/TrainingProgramsSection";
import ManagementProgram from "@/components/ManagementProgram";
import TransformationHub from "@/components/TransformationHub";
import TrainingConsultant from "@/components/TrainingConsultant";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonials";
import PreFooterBanner from "@/components/PreFooterBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-[#571244] focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* 2-Tier Header Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main id="main-content" className="flex-1 flex flex-col">
        <Hero />
        <LMSSection />
        <TrainingProgramsSection />
        <ManagementProgram />
        <TransformationHub />
        <TrainingConsultant />
        <CtaBanner />
        <Testimonials />
        <PreFooterBanner />
      </main>

      {/* Deep Plum Footer */}
      <Footer />
    </div>
  );
}
