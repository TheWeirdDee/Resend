// src/Components/Pricing.jsx
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import bgbg from "../../assets/Images/Pricing/Bgbg.png";

function Row({ ok = true, children }) {
  return (
    <li className="flex items-start gap-3">
      {ok ? (
        <FiCheckCircle className="mt-0.5 text-green-400 shrink-0" />
      ) : (
        <RxCrossCircled className="mt-0.5 text-neutral-500 shrink-0" />
      )}
      <span className={ok ? "text-neutral-200" : "text-neutral-400"}>
        {children}
      </span>
    </li>
  );
}

function Card({ title, price, subtitle, cta, secondary, children }) {
  return (
    <div className="relative rounded-t-3xl p-[1px] overflow-hidden"
      style={{
        background: "linear-gradient(0deg, #000000 25%, rgba(255, 255, 255, 0.15) 100%)",
        borderBottom: "none",  
      }}
    >
       
      <div className="rounded-t-3xl bg-black/80 p-8 flex flex-col h-full">
        <div className="text-center">
          <p className="text-base text-neutral-400 mb-3">{title}</p>
          <div className="text-5xl font-semibold tracking-tight">
            {price}
            {price !== "Custom" && (
              <span className="text-2xl font-normal text-neutral-300"> / mo</span>
            )}
          </div>

          <div className="my-6 h-px bg-neutral-800" />
          <p className="text-base text-neutral-300">{subtitle}</p>
          <div className="mt-6 h-px bg-neutral-800" />
        </div>

        <ul className="mt-6 space-y-3 text-base flex-1">{children}</ul>

        <button
          className={`mt-8 rounded-xl px-5 py-3 text-base font-semibold transition
            ${
              secondary
                ? "bg-white text-gray-950 hover:bg-gray-500"
                : "bg-white text-gray-950 hover:bg-gray-500"
            }`}
          type="button"
        >
          {cta}
        </button>
      </div>
    </div>
  );
}


export default function Pricing() {
  const marks = [
    { short: "3k", full: "3,000" },
    { short: "50k", full: "50,000" },
    { short: "100k", full: "100,000" },
    { short: "200k", full: "200,000" },
    { short: "500k", full: "500,000" },
    { short: "1,000k", full: "1,000,000" },
    { short: "1,500k", full: "1,500,000" },
    { short: "2,500k", full: "2,500,000" },
    { short: "3,000k+", full: "3,000,000+" },
  ];

  const [idx, setIdx] = useState(0);
  
  const percentage = (idx / (marks.length - 1)) * 100;
  return (
     
  

  
    <section
      className="relative text-white font-[Inter] py-14 md:px-2 px-0  w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgbg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />

       
      <div className="relative text-center">
        <h2 className="text-4xl md:text-6xl font-[Inter] font-bold mb-4 mt-10 md:mt-16 bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
          Pricing
        </h2>
        <p className="text-gray-400 text-md mb-7 max-w-2xl mx-auto">
         Start for free and scale as you grow.
        </p>

         
        <div className="grid grid-cols-2 px-8 sm:flex sm:flex-wrap sm:justify-center gap-3 mb-12">
  <a
    href="/pricing"
    className="px-4 py-2 rounded-xl bg-white text-black font-medium text-center flex items-center justify-center"
  >
    Transactional Emails
  </a>
  <a
    href="/pricing"
    className="px-4 py-2 rounded-xl bg-neutral-900 text-gray-300 text-center flex items-center justify-center"
  >
    Marketing Emails
  </a>
</div>

      </div>

      
    <div className="max-w-5xl mx-auto px-12 md:px-36 relative z-10">
      <input
        type="range"
        min={0}
        max={marks.length - 1}
        value={idx}
        onChange={(e) => setIdx(Number(e.target.value))}
        className="w-full h-1 rounded-full appearance-none cursor-pointer transition-all duration-300"
        aria-label="Monthly email volume"
        style={{
          background: `linear-gradient(to right, white ${percentage}%, #262626 ${percentage}%)`,
        }}
      />

      <div className="mt-2 flex justify-between text-[13px] select-none">
        {marks.map((m, i) => (
          <span
            key={i}
            className={`tabular-nums text-center ${
              idx === i ? "text-white font-medium" : "text-neutral-400"
            }`}
          >
            <span className="block lg:hidden">{m.short}</span>
            <span className="hidden lg:block">{m.full}</span>
          </span>
        ))}
      </div>
    </div>
  );
}


      {/* Card Details*/}
      <div className="max-w-8xl mx-auto px-14 mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        <Card title="Free" price="$0" subtitle="3,000 emails / mo" cta="Get started">
          <Row>Ticket Support</Row>
          <Row>1-day Data Retention</Row>
          <Row>1 Domain</Row>
          <Row ok={false}>100 emails a day</Row>
          <Row ok={false}>Dedicated IPs</Row>
        </Card>

        <Card title="Pro" price="$20" subtitle="50,000 emails / mo" cta="Get started">
          <Row>Ticket Support</Row>
          <Row>3-day Data Retention</Row>
          <Row>10 Domains</Row>
          <Row>No daily limit</Row>
          <Row ok={false}>Dedicated IPs</Row>
        </Card>

        <Card title="Scale" price="$90" subtitle="100,000 emails / mo" cta="Get started">
          <Row>Slack & Ticket Support</Row>
          <Row>7-day Data Retention</Row>
          <Row>1,000 Domains</Row>
          <Row>No daily limit</Row>
          <Row>Dedicated IP with Add-on</Row>
        </Card>

        <Card title="Enterprise" price="Custom" subtitle="A plan based on your needs" cta="Contact us">
          <Row>Priority Support</Row>
          <Row>Flexible Data Retention</Row>
          <Row>Flexible Domains</Row>
          <Row>No daily limit</Row>
          <Row>Dedicated IPs with Add-on</Row>
        </Card>
      </div>
    </section>
  );
}
