import React from "react";
import HeroSection from "../../Components/HeroSection"
import TrustedCompanies from "../../Components/TrustedCompanies"
import Integration from "../../Components/Integration"
import DeveloperExperience from "../../Components/DeveloperExperience"
import DevelopEmails from "../../Components/DevelopeEmails";
import Features from "../../Components/Features";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustedCompanies />
      <Integration />
      <DeveloperExperience />
      <DevelopEmails />
      <Features />
    </div>
  );
};

export default Home;  
