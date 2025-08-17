import React from "react";
import Tabpanel from "../../Components/HomePages/Tabpanel"
import Go from "../../assets/Images/IntegrationImg/Go.png";
import Java from "../../assets/Images/IntegrationImg/Java.png";
import Node from "../../assets/Images/IntegrationImg/Node.png";
import Php from "../../assets/Images/IntegrationImg/Php.png";
import Python from "../../assets/Images/IntegrationImg/Python.png";
import Rest from "../../assets/Images/IntegrationImg/Rest.png";
import Ruby from "../../assets/Images/IntegrationImg/Ruby.png";
import Elixir from "../../assets/Images/IntegrationImg/Elixir.png";
import Serverless from "../../assets/Images/IntegrationImg/Serverless.png";
import Smtp from "../../assets/Images/IntegrationImg/Smtp.png";
import Integrate from "../../assets/Images/IntegrationImg/Integrate.png";

const Integration = () => {
  return (
    <section className="bg-black py-12">
      <div className="max-w-6xl mx-auto text-center px-4">
        
         
        <img 
          src={Integrate} 
          alt="Integrate Banner" 
          className="mx-auto mb-6 md:max-w-[160px] max-w-[100px]  w-full h-auto object-contain" 
        />
        
        <h2 className="text-white font-[Inter] text-2xl font-semibold mb-3">
          Integrate{" "}
          <span className="bg-gradient-to-r from-[#FFFF92] to-[#EE8912] bg-clip-text text-transparent">
            This Morning
          </span>
        </h2>
        
        <p className="text-gray-400 text-[14px] leading-[20px] font-inter font-[400] mb-10">
          A simple, elegant interface so you can start sending emails in minutes. <br /> 
          It fits right into your code with SDKs for your favorite programming languages.
        </p>

         
  <div className="grid grid-cols-5 lg:grid-cols-10 gap-x-6 gap-y-5 items-center justify-items-center">
  <img src={Node} alt="Node.js" className="w-[68px] h-[94.39px] object-contain" />
  <img src={Go} alt="Go Programming" className="w-[68px] h-[94.39px] object-contain" />
  <img src={Java} alt="Java" className="w-[68px] h-[94.39px] object-contain" />
  <img src={Php} alt="PHP" className="w-[68px] h-[94.39px] object-contain" />
  <img src={Python} alt="Python" className="w-[68px] h-[94.39px] object-contain" />
  <img src={Rest} alt="REST API" className="w-[68px] h-[94.39px] object-contain" />
  <img src={Ruby} alt="Ruby" className="w-[68px] h-[94.39px] object-contain" />
  <img src={Serverless} alt="Serverless Framework" className="w-[68px] h-[94.39px] object-contain" />
  <img src={Elixir} alt="Elixir Programming" className="w-[68px] h-[94.39px] object-contain" />
  <img src={Smtp} alt="SMTP Email Protocol" className="w-[68px] h-[94.39px] object-contain" />
</div>

      </div>
      <Tabpanel />
    </section>
  );
};

export default Integration;
