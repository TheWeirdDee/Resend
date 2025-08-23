// src/components/CodePanel.jsx
import React, { useMemo } from "react";

import nodeLogo from "../../assets/Images/Home/TabPanel/Node.svg";
import nextLogo from "../../assets/Images/Home/TabPanel/Next.svg";
import remixLogo from "../../assets/Images/Home/TabPanel/Remix.svg";
import nuxtLogo from "../../assets/Images/Home/TabPanel/Nuxt.svg";
import expressLogo from "../../assets/Images/Home/TabPanel/Express.svg";
import redwoodLogo from "../../assets/Images/Home/TabPanel/Redwood.svg";
import bunLogo from "../../assets/Images/Home/TabPanel/Bun.svg";

const frameworks = [
  { name: "Node.js", logo: nodeLogo },
  { name: "Next.js", logo: nextLogo },
  { name: "Remix", logo: remixLogo },
  { name: "Nuxt", logo: nuxtLogo },
  { name: "Express", logo: expressLogo },
  { name: "Redwood", logo: redwoodLogo },
  { name: "Bun", logo: bunLogo },
];

export default function CodePanel() {
  const code = useMemo(
    () => `import { Resend } from 'resend';

const resend = new Resend('re_123456789');

(async function() {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'delivered@resend.dev',
    subject: 'Hello World',
    html: '<strong>it works!</strong>'
  });

  if (error) {
    return console.log(error);
  }

  console.log(data);
})();`,
    []
  );

  const lines = code.split("\n");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {}
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black  md:mt-7 mt-3">
    <div
  className="bg-neutral-900/70 shadow-2xl overflow-hidden
             w-full max-w-[90%] h-full
             lg:w-[1024px] lg:h-[596px] 
             opacity-100 rounded-[24px]
             border border-[#D6EBFD30]"
>

        {/* Top bar */}
        <div className="relative flex items-center justify-between h-16 gap-2 px-3 py-2 bg-neutral-950 border-b border-[#D6EBFD30]">
          
          <div className="absolute right-0 top-0 h-[2px] w-1/3 bg-[linear-gradient(90deg,rgba(56,189,248,0)_0%,rgba(232,232,232,0.2)_33.02%,rgba(143,143,143,0.67)_64.41%,rgba(236,72,153,0)_98.93%)]"></div>

          {/* Framework chips */}
          <div
            className="flex items-center gap-2 whitespace-nowrap w-full pr-2 
                       overflow-x-auto no-scrollbar"
          >
            {frameworks.map((f) => (
              <div
                className="chip inline-flex items-center gap-2 rounded-md  px-3 py-1 flex-shrink-0"
                key={f.name}
                title={f.name}
              >
                <img
                  src={f.logo}
                  alt={f.name}
                  className="h-20 w-20 object-contain"
                />
              </div>
            ))}
          </div>

          
          <div className="ml-2 hidden sm:flex">
            <button
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs hover:bg-neutral-800"
              aria-label="Copy code"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M9 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H9zm-4 6a1 1 0 0 0-2 0v8a5 5 0 0 0 5 5h7a1 1 0 1 0 0-2H8a3 3 0 0 1-3-3V9z" />
              </svg>
              Copy
            </button>
          </div>
        </div>

        
        
{/* Code area */}
<div className="bg-[#05050A]">
  <div
  className="grid grid-cols-[auto_1fr] gap-4 p-4"
  style={{
    fontFamily: "SF Mono, monospace",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    color: "#A0A0A0",
  }}
>

    {/* Line numbers */}
    <ol className="no-select text-right text-neutral-500 pr-3 mr-1">
      {lines.map((_, i) => (
        <li key={i} className="tabular-nums">
          {i + 1}
        </li>
      ))}
    </ol>

    {/* Code */}
    <pre className="overflow-x-auto">
      {lines.map((line, i) => {
        const highlighted = line
        .replace("console.log", `<span style="color:#EBECED">console.log</span>`)
        .replace("{ Resend }", `<span style="color:#EBECED">{ Resend }</span>`)
        .replace("{ data, error }", `<span style="color:#EBECED">{ data, error }</span>`)
        .replace(".emails.send", `<span style="color:#EBECED">.emails.send</span>`)
          .replace("'resend'", `<span style="color:#FFFF92">'resend'</span>`)
          .replace("'re_123456789'", `<span style="color:#FFFF92">'re_123456789'</span>`)
          .replace("'onboarding@resend.dev'", `<span style="color:#FFFF92">'onboarding@resend.dev'</span>`)
          .replace("'delivered@resend.dev'", `<span style="color:#FFFF92">'delivered@resend.dev'</span>`)
          .replace("'Hello World'", `<span style="color:#FFFF92">'Hello World'</span>`)
          .replace("'<strong>it works!</strong>'", `<span style="color:#FFFF92">'<strong>it works!</strong>'</span>`);

        return (
          <div
            key={i} className="mb-2"
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        );
      })}
    </pre>
  </div>
</div>


         
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-950/90 text-sm">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">
              View on GitHub
            </a>
            <a href="#" className="hidden md:flex hover:underline">
              Download ZIP
            </a>
          </div>
          <span className="text-neutral-500">Made with React & Tailwind</span>
        </div>
      </div>
    </div>
  );
}
