import React from "react";
import ServiceCard from "./ServiceCard";
import servicesData from "../data/ServicesData";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">My Services</h2>
          <div className="h-1 w-24 bg-secondary mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Specialized solutions tailored to bring your digital vision to reality.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;