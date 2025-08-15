import React from "react";
import warner from "../assets/Images/TrustedCompaniesImg/Warner.png";
import fey from "../assets/Images/TrustedCompaniesImg/fey.png";
import anghami from "../assets/Images/TrustedCompaniesImg/Anghami.png";
import mintlify from "../assets/Images/TrustedCompaniesImg/Mintlify.png";
import Payload from "../assets/Images/TrustedCompaniesImg/Payload.png";
import liveblocks from "../assets/Images/TrustedCompaniesImg/Liveblocks.png";
import shepherd from "../assets/Images/TrustedCompaniesImg/Shepherd.png";
import infisical from "../assets/Images/TrustedCompaniesImg/Infisical.png";
import leap from "../assets/Images/TrustedCompaniesImg/leap.png";
import chatbase from "../assets/Images/TrustedCompaniesImg/Chatbase.png";
import craiyon from "../assets/Images/TrustedCompaniesImg/Craiyon.png";
import guruhotel from "../assets/Images/TrustedCompaniesImg/Guru.png";

const TrustedCompanies = () => {
  const logos = [
    { src: warner, alt: "Warner Bros" },
    { src: fey, alt: "FEY" },
    { src: anghami, alt: "Anghami" },
    { src: mintlify, alt: "Mintlify" },
    { src: Payload, alt: "Payload" },
    { src: liveblocks, alt: "Liveblocks" },
    { src: shepherd, alt: "Shepherd" },
    { src: infisical, alt: "Infisical" },
    { src: leap, alt: "Leap" },
    { src: chatbase, alt: "Chatbase" },
    { src: craiyon, alt: "Craiyon" },
    { src: guruhotel, alt: "Guruhotel" },
  ];

  return (
    <section className="bg-black py-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
         
        <div className="relative flex justify-center items-center mt-10">
          
          <div
            className="rounded-full"
            style={{
              width: "100%",
              maxWidth: "1100px",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(143,143,143,0.67) 50%, rgba(0,0,0,0) 100%)",
            }}
          ></div>

           
          <div
            className="absolute rounded-full left-1/2 -translate-x-1/2 mt-2"
            style={{
              width: "350px",
              height: "200px",
              top: "-103px",
              background:
                "radial-gradient(70.71% 70.71% at 50% 50%, rgba(200, 200, 200, 0.1) 0%, rgba(0, 0, 0, 0) 80%)",
            }}
          ></div>
        </div>

        
        <p className="text-gray-400 text-[14px] leading-[20px] font-inter font-[400] mt-16">
          Companies of all sizes trust Resend <br />
          to deliver their most important emails.
        </p>

        
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-8 mt-10 justify-items-center">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="object-contain"
              style={{ width: "123px", height: "36px" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
