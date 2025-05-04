import React from "react";

const ProjectCard = ({
  id,
  title,
  description,
  image,
  techStack,
  githubUrl,
}) => {
  return (
    <div className="flex flex-col justify-between h-[500px]">
      <div className="border h-full border-white/90 hover:border-purple-300 hover:bg-purple-400/10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-white/5 text-left cursor-pointer p-6 group flex flex-col justify-between">
        {/* Image */}
        <img
          src={image[0]}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        {/* Title */}
        <h2 className="text-xl font-semibold text-white group-hover:text-text-header md:text-left">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 group-hover:text-gray-300 text-sm text-left mt-2 line-clamp-3">
          {description}
        </p>
        <a
          href="#"
          className="text-purple-400 hover:text-purple-300 text-sm underline mt-1 inline-block"
        >
          More details
        </a>

        {/* Tech Stack */}
        <p className="text-gray-400 text-sm mt-2">{techStack.join(", ")}</p>

        <div className="flex justify-end items-center mt-4 gap-4">
          <a href="{githubUrl}">github</a>
          <a href="">live demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
