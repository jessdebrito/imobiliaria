import React from "react";
import OurStory from "./components/OurStory";
import { OurValuesSection } from "@/components/sections/OurValuesSections";
import WhyUs from "./components/WhyUs";
import AgentCard from "./components/AgentsCard";
import OfficeList from "./components/OurOffices";
 

export default function AboutUs() {
  return (
    <section className="pt-30">
      <OurStory />
      <OfficeList />
      <AgentCard />
      <OurValuesSection />
      <WhyUs />
    </section>
  );
}
