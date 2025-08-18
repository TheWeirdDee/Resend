import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdOutlineContentCopy } from "react-icons/md";
import ReactIcon from "../../assets/Images/DevelopEmails/ReactIcon.png";
import Tab from "../../assets/Images/DevelopEmails/Tab.png";

export default function DevelopEmails() {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-0 text-center">
      {/* Logo */}
      <div className="flex justify-center">
        <div className="p-4 rounded-2xl">
          <img src={ReactIcon} alt="React Logo" className="w-30 h-30" />
        </div>
      </div>

       
      <h2 className="text-3xl md:text-5xl font-bold mt-6 font-[Inter]">
        Develop emails using React
      </h2>
      <p className="mt-4 text-gray-400 text-md max-w-2xl mx-auto">
        Create beautiful templates without having to deal with {"<table>"} layouts and HTML. <br />
        Powered by react-email, our open source component library.
      </p>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mt-4 md:mt-8">
        <button className="px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
          Get Started →
        </button>
        <button className="px-3 py-2 rounded-full border border-gray-700 text-gray-300 font-semibold hover:border-gray-500 transition">
          Check the Docs →
        </button>
      </div>

      {/* Tab */}
<div className="flex justify-center mt-0 md:mt-8 mb-6">
  <img
    src={Tab}
    alt="React Email Preview"
    className="
      w-full max-w-[1100px] 
      rounded-3xl
      object-contain
      h-[300px] sm:h-[400px] md:h-auto
    "
  />
</div>
    </section>
  );
}
