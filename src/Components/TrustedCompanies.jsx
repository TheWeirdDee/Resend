import React from "react";
import Section from "../assets/Images/Section.png";

const TrustedCompanies = () => {
  return (
    <section className="bg-black px-5">
      <div className="max-w-6xl mx-auto text-center">
         
        <img
          src={Section}
          alt="Trusted Companies"
          className="w-full max-w-[900px] mx-auto h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default TrustedCompanies;
