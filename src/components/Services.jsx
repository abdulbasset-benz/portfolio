import React from "react";
import ServiceCard from "./ServiceCard";
import servicesData from "../data/ServicesData";

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-primary border-t border-t-gray-800 font-poppins"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent capitalize bg-slate-50">
            what i do
          </h1>
          <h3 className="text-lg sm:text-xl mt-2 mb-6 sm:mb-8 bg-clip-text text-transparent capitalize bg-text-header animate-pulse">
            ✨ my services ✨
          </h3>
          <div className="h-1 w-24 bg-secondary mx-auto"></div>
          <p className="text-gray-400 mt-0 max-w-2xl mx-auto text-sm sm:text-base">
            Specialized solutions tailored to bring your digital vision to
            reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-h-[400px]">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              arrow={service.arrow}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
