import React from "react";
import Light from "../../assets/Images/About/Light.png";
import Line from "../../assets/Images/About/Line.png";

const AboutHero = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 text-center mb-5">
       
      <div className="relative w-40 h-40 mx-auto">
        <img
          src={Light}
          alt="Top Light"
          className="w-full h-full object-contain"
        />
        <img
          src={Line}
          alt="Top Line"
          className="absolute left-3 inset-0 w-full h-full object-contain"
        />
      </div>

      
      <h2 className="text-white text-2xl font-inter font-semibold">
        Our Story
      </h2>
 
      <div className="max-w-[480px]  mx-auto mt-6 text-left">
        <p className="text-gray-300  text-[15px] md:text-[17px] leading-[27px] tracking-[0.45px] font-inter font-normal mb-6">
          Resend started with an <span className="text-gray-200"> open source </span> project in 2022. We were <span className="text-gray-200"> frustrated </span>
          by how difficult it was to build <span className="text-gray-200"> modern </span> email templates that <span className="text-gray-200"> worked </span>
          well across all email clients.
        </p>

        <p className="text-gray-300  text-[15px] md:text-[17px] leading-[27px] tracking-[0.45px] font-inter font-normal mb-6">
          As we started to dig deeper,  <span className="text-gray-200"> it became clear </span> that this was just the
          tip of the iceberg. We realized that sending emails that  <span className="text-gray-200">reach the
          inbox </span> (not the spam folder) was the biggest pain point, so we started
          to  <span className="text-gray-200">explore something new.</span>
        </p>

        <p className="text-gray-300  text-[15px] md:text-[17px] leading-[27px] tracking-[0.45px] font-inter font-normal">
          In 2023, we launched an entire email sending platform and joined  <span className="text-gray-200">Y
          Combinator's </span>winter batch. We're creating something special here, and
          we're excited to build it with you.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
