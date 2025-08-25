// src/Components/Pricing.jsx
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import bgbg from "../../assets/Images/bgbg.png";  

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
    <div
      className="relative rounded-5xl  backdrop-blur shadow-2xl p-6 flex flex-col overflow-hidden"
      style={{
        borderStyle: "solid",
        borderWidth: "1px 1px 0 1px",  
        borderImage: "linear-gradient(0deg, #000000 25%, rgba(255, 255, 255, 0.15) 100%) 1",
      }}
    >
     
      <div className="text-center">
        <p className="text-sm text-neutral-400 mb-3">{title}</p>
        <div className="text-4xl font-semibold tracking-tight">
          {price}
          <span className="text-2xl font-normal text-neutral-300"> / mo</span>
        </div>

        <div className="my-6 h-px bg-neutral-800" />

        <p className="text-sm text-neutral-300">{subtitle}</p>
        <div className="mt-6 h-px bg-neutral-800" />
      </div>

      <ul className="mt-6 space-y-3 text-sm">{children}</ul>

      <button
        className={`mt-8 rounded-xl px-4 py-2 text-sm font-semibold transition
        ${secondary
            ? "bg-neutral-800 text-white hover:bg-neutral-700"
            : "bg-neutral-800 text-white hover:bg-neutral-700"}`}
        type="button"
      >
        {cta}
      </button>
    </div>
  );
}





export default function Pricing() {
  const marks = [
    "3,000",
    "50,000",
    "100,000",
    "200,000",
    "500,000",
    "1,000,000",
    "1,500,000",
    "2,500,000",
    "3,000,000+",
  ];
  const [idx, setIdx] = useState(0);

  return (
    <section
      className="relative  text-white font-[Inter] py-14 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgbg})` }}  
    >
      
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black"
      />

       
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="relative">
          <input
            type="range"
            min={0}
            max={marks.length - 1}
            value={idx}
            onChange={(e) => setIdx(Number(e.target.value))}
            className="w-full h-1 bg-neutral-800 rounded-full appearance-none accent-white"
            aria-label="Monthly email volume"
          />
        </div>

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
        {/* Free */}
        <Card title="Free" price="$0" subtitle="3,000 emails / mo" cta="Get started">
          <Row>Ticket Support</Row>
          <Row>1-day Data Retention</Row>
          <Row>1 Domain</Row>
          <Row ok={false}>100 emails a day</Row>
          <Row ok={false}>Dedicated IPs</Row>
        </Card>

        {/* Pro */}
        <Card title="Pro" price="$20" subtitle="50,000 emails / mo" cta="Get started">
          <Row>Ticket Support</Row>
          <Row>3-day Data Retention</Row>
          <Row>10 Domains</Row>
          <Row>No daily limit</Row>
          <Row ok={false}>Dedicated IPs</Row>
        </Card>

        {/* Scale */}
        <Card title="Scale" price="$90" subtitle="100,000 emails / mo" cta="Get started">
          <Row>Slack & Ticket Support</Row>
          <Row>7-day Data Retention</Row>
          <Row>1,000 Domains</Row>
          <Row>No daily limit</Row>
          <Row>Dedicated IP with Add-on</Row>
        </Card>

        {/* Enterprise */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 backdrop-blur shadow-2xl p-6 flex flex-col">
          <div className="text-center">
            <p className="text-sm text-neutral-400 mb-3">Enterprise</p>
            <div className="text-4xl font-semibold tracking-tight">Custom</div>

            <div className="my-6 h-px bg-neutral-800" />

            <p className="text-sm text-neutral-300">
              A plan based on your specific needs
            </p>
            <div className="mt-6 h-px bg-neutral-800" />
          </div>

          <ul className="mt-6 space-y-3 text-sm">
            <Row>Priority Support</Row>
            <Row>Flexible Data Retention</Row>
            <Row>Flexible Domains</Row>
            <Row>No daily limit</Row>
            <Row>Dedicated IPs with Add-on</Row>
          </ul>

          <button
            className="mt-8 rounded-xl px-4 py-2 text-sm font-semibold transition bg-neutral-800 text-white hover:bg-neutral-700"
            type="button"
          >
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
