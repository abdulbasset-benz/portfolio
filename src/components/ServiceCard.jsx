import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-primary rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800 group">
      {/* Card Header with Icon */}
      <div className="relative h-32 flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 to-primary">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <img 
          src={icon} 
          alt={title} 
          className="w-20 h-20 z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" 
        />
      </div>
      
      {/* Card Content */}
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4 text-white relative">
          {title}
          <span className="block h-1 w-12 bg-secondary mx-auto mt-2 transform transition-all duration-300 group-hover:w-24"></span>
        </h1>
        
        <p className="text-gray-400 mb-6 font-light">{description}</p>
        
        <button className="bg-secondary text-white py-2 px-6 rounded-full font-medium hover:bg-gray-700 transition duration-300 flex items-center mx-auto">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;