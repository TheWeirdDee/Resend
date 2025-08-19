import React from "react";
import ResendLogo from "../../assets/Images/About/ResendLogo.png";

const AboutHero = () => {
  return (
    <div className="max-w-6xl mx-auto text-center px-4 pt-26"> 
      
       
      <img
        src={ResendLogo}
        alt="Resend Logo"
        className="mx-auto mb-6 w-40 h-40 object-contain"
      />

      <h2
        className="text-3xl md:text-5xl font-bold mt-6 font-[Inter] bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #FFFFFF 30%, rgba(255, 255, 255, 0.5) 100%)",
        }}
      >
        Building the modern <br />
        email sending <br /> platform
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-center text-sm leading-[20px] font-inter font-[400] mb-1">
        The web has come a long way in the last ten years, but why is email stuck
        in the past? <br />
        It doesn't have to be that way. We want to change that. We want to
        reimagine email.
      </p>
    </div>
  );
};

export default AboutHero;
