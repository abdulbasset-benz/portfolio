import React from "react";

const ServiceCard = ({ title, description, icon, arrow }) => {
  return (
    <div
      className="border border-white/40 hover:border-purple-300 hover:bg-purple-400/10 
                 rounded-xl shadow-md hover:shadow-lg transition-all duration-300
                 backdrop-blur-sm bg-white/5 text-left cursor-pointer p-6 group"
    >
      {/* Icon */}
      <div className="flex items-center justify-center md:justify-start mb-4">
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
          <img src={icon} alt={title} className="w-8 h-8 object-contain" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-white group-hover:text-text-header md:text-left">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-400 group-hover:text-gray-300 text-sm text-left mt-2">
        {description}
      </p>

      {/* See More + Arrow */}
      <div className="flex items-center justify-start md:justify-end mt-6 group">
        <h3 className="text-text-header mt-2 transition-all duration-300 group-hover:text-purple-400">
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
