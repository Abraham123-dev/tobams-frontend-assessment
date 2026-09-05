import React from "react";
import CorporateTrainings from "./CorporateTrainings";
import PersonalisedTraining from "./PersonalisedTraining";
import CapacityDevelopment from "./CapacityDevelopment";

export default function TrainingProgramsSection() {
  return (
    <section className="w-full py-10 bg-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="w-full bg-white rounded-[16px] p-6 sm:p-12 lg:p-16 flex flex-col gap-16 lg:gap-[120px] shadow-xs">
          <CorporateTrainings />
          <PersonalisedTraining />
          <CapacityDevelopment />
        </div>
      </div>
    </section>
  );
}
