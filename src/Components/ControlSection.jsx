import React from "react";
import TIcon from "../assets/Images/ControlSection/TIcon.png";
import Tablist1 from "../assets/Images/ControlSection/Tablist1.png";
import Tablist2 from "../assets/Images/ControlSection/Tablist2.png";
import Analytics from "../assets/Images/ControlSection/Analytics.png";
import SmallIcon from "../assets/Images/ControlSection/icon.png";  

const ControlSection = () => {
  return (
    <section className="bg-black text-white py-20 flex flex-col items-center px-4">
      
      <div className="mb-6">
        <img 
          src={TIcon} 
          alt="Control Icon" 
          className="w-16 h-16 object-contain"
        />
      </div>

      
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
        Everything in your control
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-10 text-sm md:text-base">
        All the features you need to manage your email sending, troubleshoot with detailed logs,
        and protect your domain reputation — without the friction.
      </p>

       
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl">
        
        
        <div className="flex justify-center">
          <div 
  className="flex items-center gap-4 text-left p-2 rounded-2xl bg-black w-full max-w-[300px]"
  style={{ border: "1px solid hsla(208, 91%, 92%, 0.19)" }}
>
  <img 
    src={SmallIcon} 
    alt="Feature Icon" 
    className="w-8 h-8 ml-3 object-contain"
  />
  <p className="text-gray-400 text-sm">Intuitive analytics</p>
</div>

        </div>

         
        <div className="flex justify-center">
          <img 
            src={Tablist2} 
            alt="Tablist 2" 
            className="w-full max-w-[300px] object-contain"
          />
        </div>

         
        <div className="flex justify-center">
          <img 
            src={Tablist1} 
            alt="Tablist 1" 
            className="w-full max-w-[300px] object-contain"
          />
        </div>
      </div>

      
      <div className="w-full flex justify-center">
        <img 
          src={Analytics} 
          alt="Dashboard Analytics" 
          className="w-full max-w-5xl object-contain"
        />
      </div>
    </section>
  );
};

export default ControlSection;
