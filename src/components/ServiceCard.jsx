import React from "react";

const ServiceCard = ({ title, description, icon, arrow }) => {
  return (
    <div
      className="border border-white/40 hover:border-purple-300 hover:bg-purple-400/10 rounded-xl
                 shadow-md hover:shadow-lg transition-all duration-300
                 backdrop-blur-md text-center cursor-pointer p-6 group">
      
      {/* Icon */}
      <div className="flex items-center justify-center md:justify-start">
        <div className="rounded-full">
          <img src={icon} alt={title} className="w-12 h-12 object-contain" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-white group-hover:text-text-header py-2 md:text-left">{title}</h2>

      {/* Description */}
      <p className="text-gray-400 group-hover:text-gray-300 text-sm max-w-sm text-center md:text-left block mx-auto">
        {description}
      </p>

      {/* See More + Arrow */}
      <div className="flex items-center justify-center md:justify-end mt-4 group">
        <h3 className="text-center md:text-right text-text-header mt-2 transition-all duration-300 group-hover:text-purple-400">
          See more
        </h3>
        <img
          src={arrow}
          alt="arrow"
          className="w-3 h-3 object-contain ml-1.5 mt-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>

    </div>
  );
};

export default ServiceCard;
