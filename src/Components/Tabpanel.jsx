import React from "react";
import TabpanelImage from "../assets/Images/Tabpanel.png";

const Tabpanel = () => {
  return (
    <div className="flex justify-center mt-[24px]">
      <img
  src={TabpanelImage}
  alt="Tabpanel"
  className="
    max-w-full    
    h-[240px] max-[500px]:h-[190px]   sm:h-[350px] md:h-[380px]
    object-contain
    lg:h-[500px]
  "
       
       
  style={{
    transform: "rotate(0deg)",
    opacity: 1,
  }}
/>

    </div>
  );
};

export default Tabpanel;
