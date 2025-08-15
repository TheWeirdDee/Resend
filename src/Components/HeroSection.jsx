import React from "react";
import ResendHeroImage from "../assets/Images/ResendHeroImage.png";
import HeroBg from "../assets/Images/ResendHerobg.png";

const HeroSection = () => {
  return (
    <section
      className="text-white bg-black w-full py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8">
         
        <div className="flex-1 max-w-lg">
        
          <a
            href="#"
            className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full 
             bg-gradient-to-r from-[rgba(2,252,239,0.44)] via-[rgba(255,181,43,0.44)] to-[rgba(160,43,254,0.44)]
             text-white font-[400] text-[14px] leading-[14px] font-inter align-middle transition"
          >
            Introducing Marketing Emails
            <span className="ml-1">›</span>
          </a>

          
          <h1 className="text-5xl font-semibold leading-tight mb-4">
            Email for <br /> developers
          </h1>

          
          <p className="text-[hsla(212,87%,97%,0.71)] text-[14px] leading-[20px] font-medium mb-8">
            The best way to reach humans instead of spam folders. <br />
            Deliver transactional and marketing emails at scale.
          </p>

          
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition"
            >
              Get Started <span className="ml-1">›</span>
            </a>
            <a
              href="#"
              className="text-[hsla(212,87%,97%,0.71)] hover:text-white font-medium transition"
            >
              Documentation <span className="ml-1">›</span>
            </a>
          </div>
 
          <p className="mt-16 text-sm text-center  relative left-0 md:left-50 text-[hsla(212,87%,97%,0.71)]">
            Backed by{" "}
            <span className="bg-orange-500 text-black px-1 rounded">Y</span>{" "}
            Combinator
          </p>
        </div>

    
        <div className="flex-1 flex justify-center max-w-md">
          <img
            src={ResendHeroImage}
            alt="Cube"
            className="w-[300px] md:w-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
