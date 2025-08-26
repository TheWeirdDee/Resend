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
    <div className="relative rounded-t-3xl overflow-hidden">
      {/* Border wrapper */}
      <div
        className="relative"
        style={{
          borderTop: "1px solid transparent",
          borderLeft: "1px solid transparent",
          borderRight: "1px solid transparent",
          borderImage:
            "linear-gradient(0deg, #000000 25%, rgba(255, 255, 255, 0.15) 100%) 1",
          borderRadius: "26px 26px 0 0", 
          overflow: "hidden",
        }}
      >
        <div className="rounded-t-2xl p-6 flex flex-col h-full bg-black/80">
          <div className="text-center">
            <p className="text-sm text-neutral-400 mb-3">{title}</p>
            <div className="text-4xl font-semibold tracking-tight">
              {price}
              {price !== "Custom" && (
                <span className="text-2xl font-normal text-neutral-300">
                  {" "}
                  / mo
                </span>
              )}
            </div>

            <div className="my-6 h-px bg-neutral-800" />
            <p className="text-sm text-neutral-300">{subtitle}</p>
            <div className="mt-6 h-px bg-neutral-800" />
          </div>

          <ul className="mt-6 space-y-3 text-sm flex-1">{children}</ul>

          <button
            className={`mt-8 rounded-xl px-4 py-2 text-sm font-semibold transition
              ${
                secondary
                  ? "bg-white text-gray-900 hover:bg-neutral-700"
                  : "bg-white text-gray-900 hover:bg-neutral-700"
              }`}
            type="button"
          >
            {cta}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const marks = [
    "3k",
    "50k",
    "100k",
    "200k",
    "500k",
    "1,000k",
    "1,500k",
    "2,500k",
    "3,000k+",
  ];
  const [idx, setIdx] = useState(0);

  return (
    <section
      className="relative text-white font-[Inter] py-14 md:px-2 px-8 overflow-hidden bg-cover bg-center"
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
            className="px-6 py-2 rounded-xl bg-white text-black font-medium text-center"
          >
            Transactional Emails
          </a>
          <a
            href="/pricing"
            className="px-4 md:pt-2 pt-5 py-1 rounded-xl bg-neutral-900 text-gray-300 text-center"
          >
            Marketing Emails
          </a>
        </div>
      </div>

      {/* Range Slider */}
      <div className="max-w-5xl mx-auto px-4 md:px-16 relative z-10">
        <input
          type="range"
          min={0}
          max={marks.length - 1}
          value={idx}
          onChange={(e) => setIdx(Number(e.target.value))}
          className="w-full h-2 bg-neutral-800 rounded-full appearance-none accent-white"
          aria-label="Monthly email volume"
        />
        <div className="mt-2 flex justify-between text-[11px] text-neutral-400 select-none">
          {marks.map((m) => (
            <span key={m} className="tabular-nums">
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* Cards */}
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
