import React from "react";
import HeroSection from "../../Components/HeroSection"
import TrustedCompanies from "../../Components/TrustedCompanies"
const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustedCompanies />
    </div>
  );
};

export default Home; // ✅ This is the missing piece
