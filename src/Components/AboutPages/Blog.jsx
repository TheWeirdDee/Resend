import React from "react";
import First from "../../assets/Images/About/Blog/First.png";
import Second from "../../assets/Images/About/Blog/Second.png";
import Third from "../../assets/Images/About/Blog/Third.png";

const blogPosts = [
  {
    image: First,
    title: "Resend raises $3M",
    date: "Jul 18, 2023",
  },
  {
    image: Second,
    title: "Resend + Y Combinator",
    date: "Feb 1, 2023",
  },
  {
    image: Third,
    title: "Introducing Resend",
    date: "Jan 4, 2023",
  },
];

const BlogSection = () => {
  return (
    <section className="w-full text-white px-6 md:px-12 lg:px-20 py-2 mb-6">
      <h2 className="text-4xl md:text-5xl font-semibold mb-8">From Our Blog</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="group transition rounded-md overflow-hidden cursor-pointer text-left flex flex-col items-center sm:items-start"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-[390px] max-[500px]:w-[310px] md:w-[325px] h-[200px] md:h-[171px] object-cover rounded-md"
            />
            <div className="mt-3 mb-6 w-full max-w-[325px]">
              <h3 className="text-base md:text-lg font-medium mt-5">{post.title}</h3>
              <p className="text-sm text-gray-400">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
