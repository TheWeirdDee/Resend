import React from "react";
import Lighted from "../assets/images/Testimonials/Lighted.png";
import Line from "../assets/images/Testimonials/Line.png"; 
import Icon from "../assets/Images/Testimonials/Icon.png";
import Profile from "../assets/Images/Testimonials/Profile.png";

const Testimonial = () => {
  return (
    <section className="bg-black text-white mb-10 flex flex-col items-center">
       
      <div className="w-full flex justify-center relative top-5">
      
        <img
          src={Lighted}
          alt="Glow Line"
          className="max-w-[600px] w-full object-contain"
        />
        <img
          src={Line}
          alt="Overlay Line"
          className="max-w-[400px] w-full object-contain absolute md:top-26 top-20 left-1/2 -translate-x-1/2"
        />
      </div>
 
      <div className="mb-4">
        <img 
          src={Icon}  
          alt="Up Arrow Icon" 
          className="w-16 h-16 object-contain"
        />
      </div>

    
      <p className="text-center text-[16px] md:text-[18px] text-gray-200 leading-relaxed max-w-xl px-4 mb-6">
        Resend is transforming email for developers. <br />
        Simple interface, easy integrations, handy templates. What else could we ask for.
      </p>

       
      <div className="flex items-center gap-3">
        <img 
          src={Profile}  
          alt="Profile" 
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-col text-left">
          <p className="text-sm font-medium">Guillermo Rauch</p>
          <p className="text-xs text-gray-400">CEO at Vercel</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
