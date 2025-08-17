import React from "react";
import Resend from "../../assets/Images/resend.png"; 

const DevelopEmails = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 mt-10">
       <h2
        className="text-3xl md:text-5xl font-bold mt-6 font-[Inter] bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #FFFFFF 30%, rgba(255, 255, 255, 0.5) 100%)",
        }}
      >
        Email reimagined. <br/>
        Available today.
      </h2>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mt-4 md:mt-8">
        <button className="px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
          Get Started →
        </button>
        <button className="px-3 py-2 rounded-full border border-gray-700 text-gray-300 font-semibold hover:border-gray-500 transition">
          Check the Docs →
        </button>
      </div>

      
      <img
        src={Resend}
        alt="Resend Preview"
        className="mt-10 w-full max-w-3xl object-contain relative md:top-12 top-7"
      />
    </div>
  );
};

export default DevelopEmails;
