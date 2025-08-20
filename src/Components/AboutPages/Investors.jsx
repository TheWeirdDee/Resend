import React from "react";
import Ali from "../../assets/Images/About/Investors/Ali.png";
import Alana from "../../assets/Images/About/Investors/Alana.png";
import Ahmad from "../../assets/Images/About/Investors/Ahmad.png";
import Beth from "../../assets/Images/About/Investors/Beth.png";
import Britton from "../../assets/Images/About/Investors/Britton.png";
import Briza from "../../assets/Images/About/Investors/Briza.png";
import Calvin from "../../assets/Images/About/Investors/Calvin.png";
import Cassidy from "../../assets/Images/About/Investors/Cassidy.png";
import Christopher from "../../assets/Images/About/Investors/Christopher.jpg";
import Darian from "../../assets/Images/About/Investors/Darian.png";
import DavidC from "../../assets/Images/About/Investors/DavidC.png";
import DavidM from "../../assets/Images/About/Investors/DavidM.jpg";
import Dylan from "../../assets/Images/About/Investors/Dylan.png";
import Elad from "../../assets/Images/About/Investors/Elad.jpg";
import Eric from "../../assets/Images/About/Investors/Eric.jpg";
import Guillermo from "../../assets/Images/About/Investors/Guillermo.jpg";
import Jack from "../../assets/Images/About/Investors/Jack.png";
import James from "../../assets/Images/About/Investors/James.jpg";
import Jean from "../../assets/Images/About/Investors/Jean.jpg";
import Jeff from "../../assets/Images/About/Investors/Jeff.jpg";
import Jennifer from "../../assets/Images/About/Investors/Jennifer.jpg";
import Kenneth from "../../assets/Images/About/Investors/Kenneth.jpg";
import Lachy from "../../assets/Images/About/Investors/Lachy.jpg";
import Lee from "../../assets/Images/About/Investors/Lee.jpg";
import Michael from "../../assets/Images/About/Investors/Michael.jpg";
import Paul from "../../assets/Images/About/Investors/Paul.jpg";
import Shawn from "../../assets/Images/About/Investors/Shawn.jpg";
import Sidharth from "../../assets/Images/About/Investors/Sidharth.jpg";
import Theo from "../../assets/Images/About/Investors/Theo.jpg";
import Thomas from "../../assets/Images/About/Investors/Thomas.jpg";
import Tido from "../../assets/Images/About/Investors/Tido.jpg";
import Yoko from "../../assets/Images/About/Investors/Yoko.jpg";

const investors = [
  { name: "Ali Rowghani", title: "Investor, ex-CFO of Pixar", img: Ali },
  { name: "Alana Goyal", title: "Founder of Basecase", img: Alana },
  { name: "Ahmad Awais", title: "Founder of Langbase", img: Ahmad },
  { name: "Beth Turner", title: "Partner at SV Angel", img: Beth },
  { name: "Britton Winterrose", title: "AI Advisor at Microsoft", img: Britton },
  { name: "Briza Rocha", title: "Director at Alibaba", img: Briza },
  { name: "Calvin French-Owen", title: "Co-Founder of Segment", img: Calvin },
  { name: "Cassidy Williams", title: "Director at GitHub", img: Cassidy },
  { name: "Christopher Golda", title: "Founder of Rogue Capital", img: Christopher },
  { name: "Darian Shirazi", title: "GP at Gradient", img: Darian },
  { name: "David Cramer", title: "Co-Founder of Sentry", img: DavidC },
  { name: "David Mytton", title: "Co-Founder of Console", img: DavidM },
  { name: "Dylan Field", title: "Founder of Figma", img: Dylan },
  { name: "Elad Gil", title: "Investor", img: Elad },
  { name: "Eric Muntz", title: "Former CTO of Mailchimp", img: Eric },
  { name: "Guillermo Rauch", title: "Founder of Vercel", img: Guillermo },
  { name: "Jack McCloy", title: "Engineering at Snowflake", img: Jack },
  { name: "James Hawkins", title: "Co-Founder of Posthog", img: James },
  { name: "Jean-Denis Greze", title: "CTO at Plaid", img: Jean },
  { name: "Jeff Henroid", title: "Business Dev at AWS", img: Jeff },
  { name: "Jennifer Li", title: "GP at a16z", img: Jennifer },
  { name: "Kenneth Auchenberg", title: "Product Lead at Stripe", img: Kenneth },
  { name: "Lachy Groom", title: "Investor", img: Lachy },
  { name: "Lee Robinson", title: "VP of DX at Vercel", img: Lee },
  { name: "Michael Grinich", title: "Founder of WorkOS", img: Michael },
  { name: "Paul Copplestone", title: "Co-Founder of Supabase", img: Paul },
  { name: "Shawn Wang", title: "Founder of Devtools-Angels", img: Shawn },
  { name: "Sidharth Kakkar", title: "Co-Founder of Subscript", img: Sidharth },
  { name: "Theo Browne", title: "Founder of Ping", img: Theo },
  { name: "Thomas Paul Mann", title: "Co-Founder of Raycast", img: Thomas },
  { name: "Tido Carriero", title: "Co-Founder of Koala", img: Tido },
  { name: "Yoko Li", title: "Partner at a16z", img: Yoko },
];

const InvestorsSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 relative bottom-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 flex items-center space-x-4 text-left font-[Inter]">
          Backed By Incredible Investors
        </h2>
        <p className="text-gray-400 text-lg flex items-center space-x-4 text-left">
          We are fortunate to work with some of the best investors in the world.
          <br />
          Chances are you are already using the products they helped to create.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 max-w-6xl mx-auto">
        {investors.map((inv, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 text-left"
          >
            <img
              src={inv.img}
              alt={inv.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium">{inv.name}</h3>
              <p className="text-gray-400 text-sm">{inv.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestorsSection;
