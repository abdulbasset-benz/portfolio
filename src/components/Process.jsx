import React from 'react';
import steps from '../data/Steps';

const Process = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-10 text-center">How I Do It</h2>
      <div className="relative border-2 border-red-500">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="mb-10 ml-2 relative">
              <div className="absolute -left-6">
                <Icon className="w-8 h-8 text-white bg-primary p-2 rounded-full ring-4 ring-white" />
              </div>
              <h3 className="text-xl ml-6 font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-2 ml-6">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Process;
