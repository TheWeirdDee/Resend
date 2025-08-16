import { FaPaperPlane, FaCheckCircle, FaRegEnvelope, FaWindows } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import DELeft from "../assets/Images/DELeft.png";
import DERight from "../assets/Images/DERight.png";

export default function DeveloperExperience() {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-16">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center md:text-left md:ml-16 ml-0">
        <h2 className="text-4xl md:text-5xl font-bold">
          First-Class <br />
          <span className="text-gray-300 font-medium font-[Inter]">Developer Experience</span>
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          We are a team of engineers who love building tools for other engineers. <br />
          Our goal is to create the email platform we’ve always wished we had — one that{" "}
          <span className="italic">just works</span>.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Test Mode Card */}
        <div className="rounded-2xl p-6 shadow-lg">
          

          {/* Image container with only top/left/right border */}
          <div className="rounded-t-2xl ">
            <img src={DELeft} alt="Test Mode Logs" className="rounded-t-2xl" />
          </div>

          <div className="mt-4 md:ml-10 ml-5">
            <h3 className="text-lg font-semibold">Test Mode</h3>
            <p className="text-gray-400 text-sm mt-2">
              Simulate events and experiment with our API without the risk of accidentally sending
              real emails to real people.
            </p>
            <a href="#" className="text-sm text-blue-400 mt-3 inline-block">
              Learn more →
            </a>
          </div>
        </div>

        {/* Modular Webhooks Card */}
        <div className="rounded-2xl p-6 shadow-lg">
          {/* Image container with only top/left/right border */}
          <div className="rounded-t-2xl  p-4">
            <img src={DERight} alt="Webhooks Flow" className="rounded-t-2xl" />
          </div>

          <div className="mt-0 md:ml-10 ml-5">
            <h3 className="text-lg font-semibold">Modular Webhooks</h3>
            <p className="text-gray-400 text-sm mt-2">
              Receive real-time notifications directly to your server. Every time an email is delivered,
              opened, bounces, or a link is clicked.
            </p>
            <a href="#" className="text-sm text-blue-400 mt-3 inline-block">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
