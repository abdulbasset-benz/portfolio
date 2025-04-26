import React from "react";
import "../style.css";
import avatar from "../assets/avatar.png";
import arrow from "../assets/arrow.svg";

const Hero = () => {
  return (
    <div className="container mx-auto text-center p-6 relative flex flex-col items-center gap-5 text-amber-50 font-montserrat">
      <img
        src={avatar}
        alt="Avatar"
        className="w-50 h-50 rounded-full shadow-lg"
      />
      <p className="uppercase text-text-secondary">
        Dynamic Web Magic with <span className="text-text-secondary">Laravel</span> &{" "}
        <span className="text-text-secondary">react js</span>
      </p>
      <h1 className="font-inter font-extrabold capitalize text-4xl md:text-5xl lg:text-6xl xl:text-6xl max-w-5xl mx-auto ">
        Transforming Concepts into Seamless{" "}
        <span className="text-text-header block md:inline lg:whitespace-nowrap">
          User Experiences
        </span>
      </h1>
      <h3>Hi! I’m Abdulbasset, a Full-stack Developer based in Algeria.</h3>
      <button className="btn flex items-center py-3 px-6 border border-gray-500 rounded-md cursor-pointer font-semibold hover:text-slate-300 group">
        See My Work
        <img
          src={arrow}
          alt="Arrow"
          className="inline-block ml-3 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </button>
    </div>
  );
};

export default Hero;
