import React from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/vector.svg";
import light from "../assets/light.svg";
import leftSpotlight from "../assets/left-spotlight.svg";
import rightSpotlight from "../assets/right-spotlight.svg";
import pattern from "../assets/pattern.svg";
import gridPattern from "../assets/grid-pattern.svg";
import bgPattern from "../assets/bg-pattern.svg";
import "../style.css";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="container mx-auto p-4 font-montserrat relative z-10">
      <img
        src={leftSpotlight}
        alt="Left Spotlight"
        className="absolute top-0 left-0"
      />
      <img
        src={rightSpotlight}
        alt="Left Spotlight"
        className="absolute top-0 right-0"
      />
      <img
        src={gridPattern}
        alt="Pattern"
        className="absolute top-10 left-1/2 transform -translate-x-1/2 -z-10 mx-auto" 
      />
      <nav className="flex justify-between items-center md:w-[85%] mx-auto py-2">
        <div className="flex items-center gap-1 z-20">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 inline-block mr-2 cursor-pointer "
          />
          <span className="text-white hidden md:block text-lg font-bold cursor-pointer">
            Abdulbasset Benz.
          </span>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="space-x-9 text-white flex items-center">
            <li>
              <a className="hover:text-purple-400" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-purple-400" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-purple-400" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-purple-400" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="hover:text-purple-400" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-10 z-10">
          <button className="md:block border-1 border-purple-300 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-700 hover:text-white transition duration-300 cursor-pointer">
            Contact me
          </button>

          <img
            src={light}
            alt="Light Mode"
            className="h-8 w-8 hidden md:inline-block cursor-pointer hover:rotate-90 transition duration-300 hover:fill-purple-500"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
