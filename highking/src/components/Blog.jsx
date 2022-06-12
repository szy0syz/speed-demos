import React from "react";
import ButtonFill from "./ButtonFill";
const Blog = ({ content, alternative }) => {
  return (
    <section
      className={`flex ${
        alternative ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col gap-6 py-12 md:px-28 px-4 items-center`}
    >
      <div className="flex-1">
        <img
          src={content.img}
          alt="img"
          className="md:h-[550px] h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-semibold leading-normal md:text-5xl md:leading-snug">
          {content.title}
        </h1>
        <p className="py-5 text-sm leading-relaxed text-gray-600 md:w-2/3">
          {content.des}
        </p>
        <ButtonFill>Contact Us</ButtonFill>
      </div>
    </section>
  );
};

export default Blog;