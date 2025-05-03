import React from "react";
import steps from "../data/Steps";

const Process = () => {
  return (
    <div className=" mx-auto  py-12 bg-primary border-t border-gray-800 p-10">
      <div className="max-w-4xl mx-auto text-white ">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent text-center  bg-slate-50">
          How do I work?
        </h1>
        <h3 className="text-xl text-center mb-8 bg-clip-text text-transparent capitalize bg-text-header animate-pulse">
          ✨ the process ✨
        </h3>
        <div className="relative border-l-2  border-l-text-header">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="mb-10 ml-2 relative">
                <div className="absolute -left-6">
                  <Icon className="w-8 h-8 text-white bg-primary p-2 rounded-full ring-4 ring-white" />
                </div>
                <h3 className="text-xl ml-6 font-semibold text-text-header">
                  {step.title}
                </h3>
                <p className="text-gray-400 mt-2 ml-6">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Process;
