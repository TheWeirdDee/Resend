import React from "react";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react"; 
import FeaturedBlogCard from "./FeaturedBlogCard";
import BlogCard from "./BlogCard";
import BlogOne from "../../assets/Images/Blog/BlogOne.png";
import BlogTwo from "../../assets/Images/Blog/BlogTwo.png";
import Jonni from "../../assets/Images/About/OurBelieve/Jonni.png";
import Rafael from "../../assets/Images/Blog/Arthur/Rafael.png";
import First from "../../assets/Images/Blog/LatestPosts/First.png";
import Second from "../../assets/Images/Blog/LatestPosts/Second.png";
import Third from "../../assets/Images/Blog/LatestPosts/Third.png";
import Fourth from "../../assets/Images/Blog/LatestPosts/Fourth.png";
import Fifth from "../../assets/Images/Blog/LatestPosts/Fifth.png";
import Sixth from "../../assets/Images/Blog/LatestPosts/Sixth.png";
import Seven from "../../assets/Images/Blog/LatestPosts/Seven.png";
import Eight from "../../assets/Images/Blog/LatestPosts/Eight.png";
import Nine from "../../assets/Images/Blog/LatestPosts/Nine.png"
import Ten from "../../assets/Images/Blog/LatestPosts/Ten.png";
import Eleven from "../../assets/Images/Blog/LatestPosts/Eleven.png";
import Twelve from "../../assets/Images/Blog/LatestPosts/Twelve.png"
import Thirteen from "../../assets/Images/Blog/LatestPosts/Thirteen.png";
import Fourteen from "../../assets/Images/Blog/LatestPosts/Fourteen.png";
import Fifteen from "../../assets/Images/Blog/LatestPosts/Fifteen.png"
import Sixteen from "../../assets/Images/Blog/LatestPosts/Sixteen.png";
import Seventeen from "../../assets/Images/Blog/LatestPosts/Seventeen.png";
import Eighteen from "../../assets/Images/Blog/LatestPosts/Eighteen.png"
import Nineteen from "../../assets/Images/Blog/LatestPosts/Nineteen.png";
import Twenty from "../../assets/Images/Blog/LatestPosts/Twenty.png";
import TwentyOne from "../../assets/Images/Blog/LatestPosts/TwentyOne.png"
// import TwentyTwo from "../../assets/Images/Blog/LatestPosts/TwentyTwo.png"
import TwentyThree from "../../assets/Images/Blog/LatestPosts/TwentyThree.png"
import TwentyFour from "../../assets/Images/Blog/LatestPosts/TwentyFour.png"
import TwentyFive from "../../assets/Images/Blog/LatestPosts/TwentyFive.png"
import TwentySix from "../../assets/Images/Blog/LatestPosts/TwentySix.png"
import TwentySeven from "../../assets/Images/Blog/LatestPosts/TwentySeven.png"
import TwentyEight from "../../assets/Images/Blog/LatestPosts/TwentyEight.png"
import TwentyNine from "../../assets/Images/Blog/LatestPosts/TwentyNine.png"
import Thirty from "../../assets/Images/Blog/LatestPosts/Thirty.png"
import ThirtyOne from "../../assets/Images/Blog/LatestPosts/ThirtyOne.png"
import ThirtyTwo from "../../assets/Images/Blog/LatestPosts/ThirtyTwo.png"
import ThirtyThree from "../../assets/Images/Blog/LatestPosts/ThirtyThree.png"
import ThirtyFour from "../../assets/Images/Blog/LatestPosts/ThirtyFour.png"
import ThirtyFive from "../../assets/Images/Blog/LatestPosts/ThirtyFive.png"
import Zeno from "../../assets/Images/About/OurBelieve/Zeno.png";
import Bu from "../../assets/Images/About/OurBelieve/Bu.png";
import Zeh from "../../assets/Images/About/OurBelieve/Zeh.png";
import Gabriel from "../../assets/Images/Blog/Arthur/Gabriel.png";
import Vitor from "../../assets/Images/Blog/Arthur/Vitor.png";
import Krithika from "../../assets/Images/Blog/Arthur/Krithika.png";

const featuredPosts = [
  {
    image: BlogOne,
    category: "News",
    title: "Resend is SOC 2 Type II compliant",
    authorImg: Jonni,
    authorName: "Jonni Lundy.",
    date: "Mar 26, 2024",
  },
  {
    image: BlogTwo,
    category: "Customer",
    title: "Gmail and Yahoo’s bulk sending requirements for 2024",
    authorImg: Rafael,
    authorName: "Rafael Viana·",
    date: "Jun 9, 2024",
  },
];

const latestPosts = [
  {
    image: First,
    title: "Resend is SOC 2 Type II compliant",
    authorImg: Jonni,
    authorName: "Jonni Lundy",
    date: "Mar 26, 2024",
  },
  {
    image: Second,
    title: "Incident report for February 21st, 2024",
    authorImg: Bu,
    authorName: "Bu Kinoksha",
    date: "Feb 22, 2024",
  },
  {
    image: Third,
    title: "Resend Forward: Wrap Up",
    authorImg: Zeno,
    authorName: "Zeno Rocha ",
    date: "Jan 22, 2024",
  },
   {
    image: Fourth,
    title: "Introducing Light Mode",
    authorImg: Zeh,
    authorName: "Zeh Fernandes",
    date: "Jan 20, 2024",
  },
  {
    image: Fifth,
    title: "React Email 2.0",
    authorImg: Gabriel,
    authorName: "Gabriel Miranda",
    date: "Jan 19, 2024",
  },
  {
    image: Sixth,
    title: "Introducing the Batch Emails API",
    authorImg: Vitor,
    authorName: "Vitor Capretz",
    date: "Jan 18, 2024",
  },
  {
    image: Seven,
    title: "Improving Time to Inbox in Asia",
    authorImg: Krithika,
    authorName: "Krithika Yetchina",
    date: "Jan 17, 2024",
  },
  {
    image: Eight,
    title: "Manage subscribers with Resend Audiences",
    authorImg: Bu,
    authorName: "Bu Kinoshita",
    date: "Jan 16, 2024",
  },
  {
    image: Nine,
    title: "Send Marketing Emails with Resend Broadcasts",
    authorImg: Zeh,
    authorName: "Zeh Fernandes",
    date: "Jan 15, 2024",
  },
   {
    image: Ten,
    title: "Incident report for January 10, 2024",
    authorImg: Zeno,
    authorName: "Zeno Rocha",
    date: "Jan 10, 2024",
  },
  {
    image: Eleven,
    title: "Gmail and Yahoo’s bulk sending requirements for 2024",
    authorImg: Rafael,
    authorName: "Rafael Viana",
    date: "Jan 9, 2024",
  },
  {
    image: Twelve,
    title: "Improved Performance for Tailwind Emails",
    authorImg: Gabriel,
    authorName: "Gabriel Miranda",
    date: "Dec 6, 2023",
  },
  {
    image: Thirteen,
    title: "Welcoming Krithika Yetchina, our new Customer Support Engineer",
    authorImg: Jonni,
    authorName: "Jonni Lundy",
    date: "Nov 22, 2023",
  },
  {
    image: Fourteen,
    title: "How to send emails using Bun",
    authorImg: Vitor,
    authorName: "Vitor Capretz",
    date: "Sep 20, 2023",
  },
  {
    image: Fifteen,
    title: "Welcoming Haison Ohara, our new Developer Success Engineer",
    authorImg: Jonni,
    authorName: "Jonni Lundy",
    date: "Sep 14, 2023",
  },
  {
    image: Sixteen,
    title: "Welcoming Vitor Capretz, our new Software Engineer",
    authorImg: Bu,
    authorName: "Bu Kinoshita",
    date: "Nov 7, 2023",
  },
  {
    image: Seventeen,
    title: "Email Authentication: A Developer's Guide",
    authorImg: Jonni,
    authorName: "Jonni Lundy",
    date: "Aug 25, 2023",
  },
  {
    image: Eighteen,
    title: "How to configure Supabase to send emails from your domain",
    authorImg: Zeno,
    authorName: "Zeno Rocha",
    date: "Aug 10, 2023",
  },
  {
    image: Nineteen,
    title: "Why SMTP still matters today",
    authorImg: Jonni,
    authorName: "Jonni Lundy",
    date: "AUg 8, 2023",
  },
  {
    image: Twenty,
    title: "Resend raises $3M",
    authorImg: Zeno,
    authorName: "Zeno Rocha",
    date: "Jul 18, 2023",
  },
  {
    image: TwentyOne,
    title: "New Free Tier",
    authorImg: Zeno,
    authorName: "Zeno Rocha",
    date: "Jun 12, 2023",
  },
  {
    image: TwentyThree,
    title: "Welcoming Zeh Fernandes, our new Product Designer",
    authorImg: Zeno,
    authorName: "Zeno Rocha",
    date: "May 16, 2023",
  },
  {
    image: TwentyFour,
    title: "Launch Week 1: Wrap Up",
    authorImg: Zeno,
    authorName: "Zeno Rocha",
    date: "Mar 13, 2023",
  },
  {
    image: TwentyFive,
    title: "Send emails using React and Tailwind CSS",
    authorImg: Zeno,
    authorName: "Zeno Rocha",
    date: "Mar 12, 2023",
  },
    {
    image: TwentySix,
    title: "Open and Click Tracking",
    authorImg: Zeno,
    authorName: "Zeno Rocha",
    date: "Mar 11, 2023",
  },
  {
    image: TwentySeven,
    title: "Supercharge Sending with Integrations",
    authorImg: Jonni,
    authorName: "Jonni Lundy",
    date: "Mar 10, 2023",
  },
  {
    image: TwentyEight,
    title: "New Domain Verification Experience",
    authorImg: Bu,
    authorName: "Bu Kinoshita",
    date: "Mar 9, 2023",
  },
  {
    image: TwentyNine,
    title: "Capture email events with Webhooks",
    authorImg: Bu,
    authorName: "Bu Kinoshita",
    date: "Mar 9, 2023",
  },
   {
    image: Thirty,
    title: "Introducing Managed Dedicated IPs",
    authorImg: Jonni,
    authorName: "Jonni Lundy",
    date: "Mar 7, 2023",
  },
  {
    image: ThirtyOne,
    title: "Faster Email Delivery with Multi-Region",
    authorImg: Zeno,
    authorName: "Zeno Rocha",
    date: "Mar 6, 2023",
  },
  {
    image: ThirtyTwo,
    title: "Lessons learned from growing a 6,338 people waitlist in 7 weeks",
    authorImg: Zeno,
    authorName: "Zeno Rocha",
    date: "Feb 21, 2023",
  },
   {
    image: ThirtyThree,
    title: "Why I spent $25,000 on a domain (or how to pick a startup name)",
     authorImg: Zeno,
    authorName: "Zeno Rocha",
    date: "Feb 6, 2023",
  },
  {
    image: ThirtyFour,
    title: "Resend + Y Combinator",
     authorImg: Zeno,
    authorName: "Zeno Rocha",
    date: "Feb 1, 2023",
  },
  {
    image: ThirtyFive,
    title: "Introducing Resend",
     authorImg: Zeno,
    authorName: "Zeno Rocha",
    date: "Jan 4, 2023",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-black min-h-screen text-white px-8 md:px-14 py-10 ">
      
      <div className="flex items-center justify-between mt-26 mb-5">
        <h1
  className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent"
>
  Blog
</h1>

        <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:border-gray-500 transition">
          <Bell size={18} />
          Subscribe
        </button>
      </div>

<div className="flex flex-wrap gap-3 mb-8">
  <a href="/blog" className="px-4 py-1 rounded-full bg-white text-black font-medium">All</a>
  <a href="/blog" className="px-4 py-1 rounded-full bg-neutral-900 text-gray-300">Company</a>
  <a href="/blog" className="px-4 py-1 rounded-full bg-neutral-900 text-gray-300">Guides</a>
  <a href="/blog" className="px-4 py-1 rounded-full bg-neutral-900 text-gray-300">Engineering</a>
  <a href="/blog" className="px-4 py-1 rounded-full bg-neutral-900 text-gray-300">Product</a>
</div>


       
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {featuredPosts.map((post, index) => (
          <FeaturedBlogCard key={index} {...post} />
        ))}
      </div>
 
      <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
