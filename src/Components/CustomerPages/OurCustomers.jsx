import React from "react";
// import your images here
import Anghami from "../../assets/Images/Customers/Featured/Anghami.png";
import Packmind from "../../assets/Images/Customers/Featured/Packmind.png";
import Payload from "../../assets/Images/Customers/Featured/Payload.png";
import Liveblocks from "../../assets/Images/Customers/Featured/Liveblocks.png";
import Dub from "../../assets/Images/Customers/Featured/Dub.png";
import Fey from "../../assets/Images/Customers/Featured/Fey.png";

const OurCustomers = () => {
  return (
    <section className="text-center py-16 bg-black text-white">
       
              <h2
  className="text-4xl md:text-6xl font-[Inter] font-bold mb-4 mt-8 md:mt-16 bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent"
>
        Meet Our Customers
      </h2>
      <p className="text-gray-400 text-md mb-7 max-w-2xl mx-auto">
        Companies of all sizes trust Resend to deliver their most important
        emails.
      </p>

      
      <div className="grid grid-cols-2 px-8  sm:flex sm:flex-wrap sm:justify-center gap-3 mb-12">
  <a href="/blog" className="px-4 py-1 rounded-xl bg-white text-black font-medium text-center">
    Featured
  </a>
  <a href="/blog" className="px-4 py-1 rounded-xl bg-neutral-900 text-gray-300 text-center">
    Developer Tools
  </a>
  <a href="/blog" className="px-4 py-1 rounded-xl bg-neutral-900 text-gray-300 text-center">
    AI
  </a>
  <a href="/blog" className="px-4 py-1 rounded-xl bg-neutral-900 text-gray-300 text-center">
    Fintech
  </a>
  <a href="/blog" className="px-4 py-1 rounded-xl bg-neutral-900 text-gray-300 text-center">
    Open Source
  </a>
  <a href="/blog" className="px-4 py-1 rounded-xl bg-neutral-900 text-gray-300 text-center">
    SaaS
  </a>
  <a href="/blog" className="px-4 py-1 rounded-lg bg-neutral-900 text-gray-300 text-center">
    Studios
  </a>
  <a href="/blog" className="px-4 py-1 rounded-xl bg-neutral-900 text-gray-300 text-center">
    Travel
  </a>
</div>



      
<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16">
  <div className="rounded-xl  flex items-center justify-center">
    <img src={Anghami} alt="Anghami" className="w-[400px] h-[400px] object-contain" />
  </div>
  <div className="rounded-xl flex items-center justify-center">
    <img src={Packmind} alt="Packmind" className="w-[400px] h-[400px] object-contain" />
  </div>
  <div className="rounded-xl flex items-center justify-center">
    <img src={Payload} alt="Payload" className="w-[400px] h-[400px] object-contain" />
  </div>
  <div className="rounded-xl flex items-center justify-center">
    <img src={Liveblocks} alt="Liveblocks" className="w-[400px] h-[400px] object-contain" />
  </div>
  <div className="rounded-xl flex items-center justify-center">
    <img src={Dub} alt="Dub" className="w-[400px] h-[400px] object-contain" />
  </div>
  <div className="rounded-xl flex items-center justify-center">
    <img src={Fey} alt="Fey" className="w-[400px] h-[400px] object-contain" />
  </div>
</div>

    </section>
  );
};

export default OurCustomers;
