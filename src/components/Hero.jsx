import React from "react";
import "../style.css";
import avatar from "../assets/avatar.png";
import arrow from "../assets/arrow.svg";

const Hero = () => {
  return (
    <section className="bg-primary text-amber-50 font-montserrat py-20">
      <div className="container mx-auto flex flex-col items-center gap-5 text-center px-4 relative">
        <img
          src={avatar}
          alt="Avatar"
          className="w-40 h-40 rounded-full shadow-lg object-cover"
        />
        <p className="uppercase text-text-secondary tracking-wide">
          Dynamic Web Magic with <span className="text-text-secondary">Laravel</span> &{" "}
          <span className="text-text-secondary">React.js</span>
        </p>
        <h1 className="font-inter font-extrabold capitalize text-4xl md:text-5xl lg:text-6xl max-w-5xl">
          Transforming Concepts into Seamless{" "}
          <span className="text-text-header block md:inline">
            User Experiences
          </span>
        </h1>
        <h3 className="text-lg md:text-xl">
          Hi! I’m Abdulbasset, a Full-stack Developer based in Algeria.
        </h3>
        <div>
          <button className="btn px-6 py-3 border border-gray-500 rounded-md font-semibold hover:text-slate-300 group transition duration-300">
            See My Work
            <img
              src={arrow}
              alt="Arrow"
              className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
