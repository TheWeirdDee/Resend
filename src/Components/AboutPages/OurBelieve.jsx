import React from "react";
import Zeno from "../../assets/Images/About/OurBelieve/Zeno.png";
import Jermi from "../../assets/Images/About/OurBelieve/Jonni.png";
import Bu from "../../assets/Images/About/OurBelieve/Bu.png";
import Zeh from "../../assets/Images/About/OurBelieve/Zeh.png";
import { Calendar } from "lucide-react";
import Greenbg from "../../assets/Images/About/OurBelieve/Greenbg.png";
import Bluebg from "../../assets/Images/About/OurBelieve/Bluebg.png";

const beliefs = [
  {
    id: 1,
    name: "Zeno Rocha",
    email: "zeno@resend.com",
    avatar: Zeno,
    date: "Dec 6th, 2022",
    title: "Do work that inspire others",
    text: `You can’t inspire people by doing an “okay” job. To inspire, you need to do phenomenal work. Quality is not a plus; it’s a must-have. We know nothing will ever be perfect, but that doesn’t stop us from pushing the limits. We don’t want to just meet the bar of our peers. We want to raise the bar. The sum of all the small details is what makes something special.`,
  },
  {
    id: 2,
    name: "Jermi Lundy",
    email: "jermi@resend.com",
    avatar: Jermi,
    date: "Jan 3rd, 2023",
    title: "No ego",
    text: `Helping others is part of the job. It’s okay to admit you don’t know something and ask for help - it’s a sign of strength, not weakness. We work together as an async team and assume positive intent. We communicate in a transparent way.`,
  },
  {
    id: 3,
    name: "Bu Khonsha",
    email: "bu@resend.com",
    avatar: Bu,
    date: "Dec 6th, 2022",
    title: "Keep shipping",
    text: `Speed is key. We prioritize ruthlessly, have a strong sense of urgency, and make decisions fast. We continually review the scope of a project and work toward a v0, not a v1. We ship early, and we ship often.`,
  },
  {
    id: 4,
    name: "Zeh Fernandes",
    email: "<zeh@resend.com>",
    avatar: Zeh,
    date: "May 15th, 2023",
    title: "Default to action",
    text: `Regardless of what you do, we are all makers, and makers don't wait. When we see a problem, we don't expect someone to fix it or tell us what to do. Instead, we take initiative, find creative ways around it, and send a pull request to solve it. Remember - no problem is too small.`,
  },
];

const cardConfig = [
  { rotate: "2deg", minH: "441.78px", bg: Bluebg },
  { rotate: "-2deg", minH: "412.98px", bg: Bluebg },
  { rotate: "2deg", minH: "384.19px", bg: Greenbg },
  { rotate: "2deg", minH: "412.98px", bg: Greenbg },
];

export default function Beliefs() {
  return (
    <section className="text-white px-6 md:px-1">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl pt-20 font-bold font-[Inter]">
          What we believe
        </h2>
        <p className="text-gray-400 mt-2 text-md">
          Principles that dictate how we think, behave, and make decisions.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-2 flex flex-col items-center relative">
        {beliefs.map((belief, idx) => {
          const cfg = cardConfig[idx] || cardConfig[cardConfig.length - 1];
          return (
            <div
              key={belief.id}
              className={`relative w-full max-w-2xl rounded-2xl p-[2px] ${
                idx === 2 ? "-mt-20 z-20" : "mt-8"
              }`} // 👈 card 3 overlaps card 2
              style={{
                background:
                  "linear-gradient(0deg, #000000 25%, rgba(255, 255, 255, 0.15) 100%)",
                transform: `rotate(${cfg.rotate})`,
                minHeight: cfg.minH,
              }}
            >
              <div
                className="rounded-2xl p-6 text-left shadow-lg h-full"
                style={{
                  backgroundImage: `url(${cfg.bg})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                {/* Top bar */}
                <div className="flex justify-between items-center text-gray-500 text-xs mb-4">
                  <div className="flex gap-2">
                    <span className="w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span className="w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span className="w-2 h-2 border border-gray-500 rounded-full"></span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gray-500" />
                    <p>{belief.date}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-b border-[hsla(0,0%,100%,0.05)] mb-4"></div>

                {/* Author */}
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src={belief.avatar}
                    alt={belief.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <p className="text-sm text-gray-300">
                    {belief.name}{" "}
                    <span className="text-gray-500">&lt;{belief.email}&gt;</span>
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{belief.title}</h3>

                {/* Text */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {belief.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
