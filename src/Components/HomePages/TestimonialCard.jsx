import React from "react";
import { useInView } from "react-intersection-observer";
import RobertoR from "../../assets/Images/TestimonialsProfile/RobertoR.jpg";
import Alliance from "../../assets/Images/TestimonialsProfile/Alliance.jpg";
import JoeD from "../../assets/Images/TestimonialsProfile/JoeD.jpg";
import SpecCheck from "../../assets/Images/TestimonialsProfile/SpecCheck.jpg";
import Tys from "../../assets/Images/TestimonialsProfile/Tys.jpg";
import Inbuild from "../../assets/Images/TestimonialsProfile/Inbuild.png";
import BrekG from "../../assets/Images/TestimonialsProfile/BrekG.jpg";
import Hammr from "../../assets/Images/TestimonialsProfile/Hammr.jpg";
import HahnbeeL from "../../assets/Images/TestimonialsProfile/HahnbeeL.jpg";
import Mintlify from "../../assets/Images/TestimonialsProfile/Mintlify.png";
import SamD from "../../assets/Images/TestimonialsProfile/SamD.jpg";
import Anyone from "../../assets/Images/TestimonialsProfile/Anyone.jpg";
import Carouselbg from "../../assets/Images/Carouselbg.png";

const testimonials = [
  {
    text: "The Resend team have built a great product in a space that hasn't seen 10x innovation for years. Engineering peers are raving about Resend - it's such a smoother dev experience.",
    name: "Roberto Riccio",
    role: "Head of Product at Alliance",
    img: RobertoR,
    logo: Alliance,
  },
  {
    text: "The Resend team have built a great product in a space that hasn't seen 10x innovation for years. Engineering peers are raving about Resend - it's such a smoother dev experience.",
    name: "Hahnbee L",
    role: "Engineer at Mintlify",
    img: HahnbeeL,
    logo: Mintlify,
  },
  {
    text: "The Resend team have built a great product in a space that hasn't seen 10x innovation for years. Engineering peers are raving about Resend - it's such a smoother dev experience.",
    name: "Sam D",
    role: "Founder at Anyone",
    img: SamD,
    logo: Anyone,
  },
  {
    text: "The Resend team have built a great product in a space that hasn't seen 10x innovation for years. Engineering peers are raving about Resend - it's such a smoother dev experience.",
    name: "Brek G",
    role: "Founder at Hammr",
    img: BrekG,
    logo: Hammr,
  },
  {
    text: "If you're a developer or working on a startup, you're going to love Resend's approach to emailing.",
    name: "Joe DeMaria",
    role: "Co-founder & CEO of SpecCheck",
    img: JoeD,
    logo: SpecCheck,
  },
  {
    text: "We were up and running with Resend in no time. It was seamless to integrate into our existing workflow and gave us a tremendous amount of visibility into our email capabilities. Simple to say, it was a no-brainer.",
    name: "Ty Sharp",
    role: "Co-founder & CEO of InBuild",
    img: Tys,
    logo: Inbuild,
  },
];

const TestimonialsCarousel = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <div
      ref={ref}
      className="overflow-hidden relative w-full py-16"
      style={{
        backgroundImage: `url(${Carouselbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`flex gap-6 animate-scroll ${
          inView ? "running" : "paused"
        }`}
      >
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className={`relative flex-shrink-0 w-[350px] text-white rounded-t-3xl overflow-hidden p-6 
              transition-all duration-700 ease-out 
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              transitionDelay: `${index * 200}ms`, // <-- staggered delay
            }}
          >
            {/* top border gradient */}
            <span
              className="pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-3xl"
              style={{
                background:
                  "linear-gradient(0deg, #000000 25%, rgba(255, 255, 255, 0.15) 100%)",
              }}
            />
            <span
              className="pointer-events-none absolute left-0 top-0 h-full w-[2px] rounded-tl-3xl"
              style={{
                background:
                  "linear-gradient(0deg, #000000 25%, rgba(255, 255, 255, 0.15) 100%)",
              }}
            />
            <span
              className="pointer-events-none absolute right-0 top-0 h-full w-[2px] rounded-tr-3xl"
              style={{
                background:
                  "linear-gradient(0deg, #000000 25%, rgba(255, 255, 255, 0.15) 100%)",
              }}
            />

            {/* content */}
            <div className="space-y-4">
              <p className="text-gray-200 text-sm leading-relaxed">"{t.text}"</p>

              <div className="flex items-center gap-2">
                <img
                  src={t.logo}
                  alt="logo"
                  className="w-8 h-8 rounded-full object-contain"
                />
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover -ml-3"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-300">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 18s linear infinite; /* faster */
        }
        .paused {
          animation-play-state: paused;
        }
        .running {
          animation-play-state: running;
        }
        `}
      </style>
    </div>
  );
};

export default TestimonialsCarousel;
