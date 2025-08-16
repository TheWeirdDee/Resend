import React from "react";
import TabpanelImage from "../assets/Images/Tabpanel.png";

const Tabpanel = () => {
  return (
    <div className="flex justify-center mt-[24px]">
      <img
  src={TabpanelImage}
  alt="Tabpanel"
  className="
    max-w-full   // 🔑 ensures it never overflows horizontally
    h-[250px] sm:h-[350px] md:h-auto
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
