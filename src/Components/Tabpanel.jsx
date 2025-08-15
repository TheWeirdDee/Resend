import React from "react";
import TabpanelImage from "../assets/Images/Tabpanel.png";

const Tabpanel = () => {
  return (
    <div className="flex justify-center mt-[24px]">
      <img
        src={TabpanelImage}
        alt="Tabpanel"
        className="
          w-[98%] max-w-[1024px]   /* width adjusts on small screens */
          h-auto                   /* height scales proportionally */
          rounded-[20px] 
          border border-gray-100
          object-contain
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
