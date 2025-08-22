import React from "react";
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
];

const BlogPage = () => {
  return (
    <div className="bg-black min-h-screen text-white px-6 py-10">
      
      <h1 className="text-5xl font-bold mb-10 mt-10">Blog</h1>

       
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
