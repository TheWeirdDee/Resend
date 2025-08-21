import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import warner from "../../assets/Images/Home/TrustedCompanies/Warner.png";
import fey from "../../assets/Images/Home/TrustedCompanies/Fey.png";
import anghami from "../../assets/Images/Home/TrustedCompanies/Anghami.png";
import mintlify from "../../assets/Images/Home/TrustedCompanies/Mintlify.png";
import Payload from "../../assets/Images/Home/TrustedCompanies/Payload.png";
import liveblocks from "../../assets/Images/Home/TrustedCompanies/Liveblocks.png";
import shepherd from "../../assets/Images/Home/TrustedCompanies/Shepherd.png";
import infisical from "../../assets/Images/Home/TrustedCompanies/Infisical.png";
import leap from "../../assets/Images/Home/TrustedCompanies/Leap.png";
import chatbase from "../../assets/Images/Home/TrustedCompanies/Chatbase.png";
import craiyon from "../../assets/Images/Home/TrustedCompanies/Craiyon.png";
import guruhotel from "../../assets/Images/Home/TrustedCompanies/Guru.png";

const TrustedCompanies = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,  
      once: true,  
      easing: "ease-in-out",
    });
  }, []);

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
        {/* Gradient Line */}
        <div className="relative flex justify-center items-center md:mt-10 mb-10">
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

          {/* Border Top Light */}
          <div
            className="absolute rounded-full left-1/2 -translate-x-1/2 md:mt-2 w-[100px] h-[100px] mt-14 md:w-[350px] md:h-[200px] top-[-103px]"
            style={{
              background:
                "radial-gradient(70.71% 70.71% at 50% 50%, rgba(200, 200, 200, 0.1) 0%, rgba(0, 0, 0, 0) 80%)",
            }}
          ></div>
        </div>

         
        <p className="text-gray-400 text-[16px] leading-[25px] font-[Inter] font-[400] mt-16">
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
              data-aos="fade-up"
              data-aos-delay={idx * 150}  
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
