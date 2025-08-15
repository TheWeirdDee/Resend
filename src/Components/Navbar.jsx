import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Customers", path: "/customers" },
    { name: "Pricing", path: "/pricing" },
    { name: "Enterprise", path: "/enterprise" },
    { name: "Changelog", path: "/changelog" },
    { name: "Docs", path: "/docs" },
  ];

  return (
    <nav className="w-full h-16 bg-black text-white font-[Inter] fixed z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        <NavLink to="/" className="text-white font-semibold text-lg">
          Resend
        </NavLink>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[hsla(212,87%,97%,0.71)] font-medium text-[14px] leading-[20px] tracking-[0%] align-middle transition ${
                  isActive ? "text-white" : "hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
 
        <div className="flex items-center space-x-4 text-md">
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              `text-[hsla(212,87%,97%,0.71)] font-medium text-[14px] leading-[20px] align-middle transition ${
                isActive ? "text-white" : "hover:text-white"
              }`
            }
          >
            Sign in
          </NavLink>
          <NavLink
            to="/get-started"
            className="bg-white text-black px-4 py-1.5 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Get Started <span className="ml-1">›</span>
          </NavLink>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiX className="text-3xl text-white" />
              ) : (
                <HiMenu className="text-3xl text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-[50px] left-0 w-full bg-black shadow-md overflow-hidden transition-all duration-500 ease-in-out z-40 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 px-4 py-4">
          {navLinks.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-center text-center px-4 py-3 text-md text-[hsla(212,87%,97%,0.71)] font-medium text-[14px] leading-[20px] rounded-lg ${
                  index === 0 ? "mt-2 pt-4" : ""
                } ${
                  isActive
                    ? "bg-[hsla(212,87%,97%,0.71)] text-white"
                    : "text-[hsla(212,87%,97%,0.71)] hover:text-purple-200"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
