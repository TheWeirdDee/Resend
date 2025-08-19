import React from "react";
import HeroSection from "../../Components/HomePages/HeroSection";
import TrustedCompanies from "../../Components/HomePages/TrustedCompanies";
import Integration from "../../Components/HomePages/Integration";
import DeveloperExperience from "../../Components/HomePages/DeveloperExperience";
import DevelopEmails from "../../Components/HomePages/DevelopeEmails";
import Features from "../../Components/HomePages/Features";
import Testimonials from "../../Components/HomePages/Testimonials";
import ControlSection from "../../Components/HomePages/ControlSection";
import Resend from "../../Components/HomePages/Resend";
import TestimonialCard from "../../Components/HomePages/TestimonialCard";
const Home = () => {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <TrustedCompanies />
      <Integration />
      <DeveloperExperience />
      <DevelopEmails />
      <Features />
      <Testimonials />
      <ControlSection />

       
      <div className="flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold font-[Inter] mb-4">
          Beyond Expectations
        </h2>
        <p className="text-gray-400 max-w-2xl mb-10 text-sm md:text-base">
          Resend is driving remarkable developer experiences that enable success
          stories, empower businesses, and fuel growth across industries and individuals.
        </p>
      </div>
      <TestimonialCard />
      <Resend />
    </div>
  );
};

export default Home;
