import React from "react";

const BlogCard = ({ image, category, title, authorImg, authorName, date }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-black  hover:scale-[1.02]">
      <img src={image} alt={title} className="w-full h-48 object-cover border border-[hsla(208,91%,92%,0.19)]" />
      <div className="p-4">
        <span className="text-xs text-gray-400 uppercase">{category}</span>
        <h3 className="mt-2 text-lg font-semibold text-white font-[Inter]">{title}</h3>
        <div className="flex items-center mt-3 text-gray-400 text-sm">
          <img
            src={authorImg}
            alt={authorName}
            className="w-6 h-6 rounded-full mr-2"
          />
          <span>{authorName}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
