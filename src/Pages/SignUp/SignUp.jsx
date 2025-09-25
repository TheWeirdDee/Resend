import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ use Link instead of <a>
import RLogo from "../../assets/Images/ResendLogo.png";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-[#0d0d0d] text-white px-4">
      <div className="w-full max-w-md space-y-6">
        
       
        <div>
          <Link
            to="/"
            className="relative md:right-100 right-0 md:top-10 top-4 text-lg text-gray-400 hover:text-white transition"
          >
            &lt; Home
          </Link>
        </div>

         
        <div className="flex flex-col items-start space-y-3 mt-8">
          <img
            src={RLogo}
            alt="R Logo"
            className="w-12 h-12 rounded-md bg-gray-800 p-2"
          />
          <h2 className="text-xl font-semibold">Create a Resend Account</h2>
          <p className="text-gray-400 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Log in.
            </Link>
          </p>
        </div>

        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="alan.turing@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-transparent border border-gray-700 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

           
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-300">
                Password
              </label>
               
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 bg-transparent border border-gray-700 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

           
          <button
            type="submit"
            className="w-full py-2 bg-gray-200 text-black font-medium rounded-md hover:bg-gray-300 transition"
          >
            Create an Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-gray-700" />
          <span className="text-xs text-gray-500">OR</span>
          <div className="h-px flex-1 bg-gray-700" />
        </div>

         
        <div className="space-y-3">
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-700 rounded-md bg-gray-800 hover:bg-gray-700 transition">
              <FaGithub className="text-lg" />
              Login with GitHub
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-700 rounded-md bg-gray-800 hover:bg-gray-700 transition">
              <FaGoogle className="text-lg text-red-500" />
              Login with Google
            </button>
          </div>
          <button className="w-full mt-4 py-2 border border-gray-700 rounded-md bg-gray-800 hover:bg-gray-700 transition">
            Login with SSO
          </button>
        </div>

        <p className="text-[11px] text-gray-500 text-center mb-10">
          By signing up, you agree to our{" "}
          <a href="#" className="hover:underline text-blue-500">
            terms, acceptable use
          </a>{" "}
          and{" "}
          <a href="#" className="hover:underline text-blue-500">
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
