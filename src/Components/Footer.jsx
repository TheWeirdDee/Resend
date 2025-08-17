import { FaTwitter, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import React from "react";
import footer from "../assets/Images/Footer.png";
import footerline from "../assets/Images/Footerline.png";
 

//   data
const footerLinks = [
  {
    title: "Documentation",
    items: [
      { label: "Getting Started", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Examples", href: "#" },
      { label: "SDKs", href: "#" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Changelog", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Security", href: "#" },
      { label: "SOC 2", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Blog", href: "#" },
      { label: "Brand", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Philosophy", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Acceptable Use", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

// Reusable Links 
function Links({ title, items }) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-medium text-white/80">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main Footer Component
export default function Footer() {
  return (
    <footer className="bg-black text-white relative pt-0 pb-10 px-6">
       

      
      <div className="flex flex-col items-center space-y-4 mb-10 relative z-10">
        <img src={footer} alt="Footer Logo" className="h-10 object-contain" />
        <img
          src={footerline}
          alt="Footer Line"
          className="w-full max-w-2xl object-contain relative bottom-14"
        />
      </div>

       
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
         
       <div className="space-y-6">
  <p className="text-sm text-white/70">
    2261 Market Street #4010 <br />
    San Francisco, CA 94114
  </p>

  
  <div className="flex space-x-4">
    <a href="#"><FaTwitter className="w-5 h-5 hover:text-white/80" /></a>
    <a href="#"><FaGithub className="w-5 h-5 hover:text-white/80" /></a>
    <a href="#"><FaYoutube className="w-5 h-5 hover:text-white/80" /></a>
    <a href="#"><FaInstagram className="w-5 h-5 hover:text-white/80" /></a>
  </div>

  {/* Backed by Y Combinator text */}
  <p className="mt-6 text-sm text-left text-[hsla(212,87%,97%,0.71)]">
    Backed by{" "}
    <span className="bg-orange-500 text-black px-1 rounded">Y</span>{" "}
    Combinator
  </p>
</div>


        
        {footerLinks.map((section, idx) => (
          <Links key={idx} title={section.title} items={section.items} />
        ))}
      </div>
    </footer>
  );
}
