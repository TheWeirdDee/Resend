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
import Zeno from "../../assets/Images/About/OurBelieve/Zeno.png";
import Bu from "../../assets/Images/About/OurBelieve/Bu.png";
// import Zeh from "../../assets/Images/About/OurBelieve/Zeh.png";

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
    category: "New",
    title: "Resend is SOC 2 Type II compliant",
    authorImg: Jonni,
    authorName: "Jonni Lundy·",
    date: "Mar 26, 2024",
  },
  {
    image: Second,
    category: "Report",
    title: "Incident report for February 21st, 2024",
    authorImg: Bu,
    authorName: "Bu Kinoksha",
    date: "Feb 22, 2024",
  },
  {
    image: Third,
    title: "Resend Forward: Wrap Up",
    authorImg: Zeno,
    authorName: "Zeno Rocha ·",
    date: "Jan 22, 2024",
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
