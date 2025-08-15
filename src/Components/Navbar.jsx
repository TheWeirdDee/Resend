import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    <nav className="w-full bg-black text-white font-[Inter]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <NavLink to="/" className="text-white font-semibold text-sm">
          Resend
        </NavLink>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[hsla(212,87%,97%,0.71)] font-medium text-[14px] leading-[20px] 
                tracking-[0%] align-middle transition ${
                  isActive ? "text-white" : "hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4 text-sm">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
