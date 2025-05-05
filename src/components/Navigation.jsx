import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";
import light from "../assets/light.svg";
import leftSpotlight from "../assets/left-spotlight.svg";
import rightSpotlight from "../assets/right-spotlight.svg";
import gridPattern from "../assets/grid-pattern.svg";
import "../style.css";
import { useState } from "react";
import Button from "./ui/Button";

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-4 font-montserrat relative">
      {/* Background elements with adjusted z-index */}
      <img
        src={leftSpotlight}
        alt="Left Spotlight"
        className="absolute -top-32 md:top-0 left-0 z-0 opacity-70"
      />
      <img
        src={rightSpotlight}
        alt="Right Spotlight"
        className="absolute -top-32 md:top-0 right-0 z-0"
      />
      <img
        src={gridPattern}
        alt="Pattern"
        className="absolute w-full  top-10 left-1/2 transform -translate-x-1/2 z-0 max-w-full"
      />
      <nav className="flex justify-between items-center md:w-[85%] mx-auto py-2 relative z-10">
        <div className="flex items-center gap-1 z-20">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 inline-block mr-2 cursor-pointer"
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
          </ul>
        </div>
        <div className="hidden md:flex  items-center space-x-10 z-10">
          <Button variant="navbar" className="text-white">
            contact me
          </Button>

          <img
            src={light}
            alt="Light Mode"
            className="h-8 w-8 hidden md:inline-block cursor-pointer hover:rotate-90 transition duration-300 hover:fill-purple-500"
          />
        </div>

        <img
          src={hamburger}
          alt="Menu"
          className="h-8 w-8 inline-block md:hidden cursor-pointer z-20"
          onClick={toggleMenu}
        />

        <div
          className={`fixed lg:hidden top-20 left-0 w-full h-screen flex flex-col items-center gap-6 font-semibold text-lg
     bg-purple-300/10 backdrop-blur-lg rounded-lg shadow-lg ${
       isMenuOpen
         ? "block transition-all duration-300 ease-in-out translate-y-0"
         : "hidden transition-all duration-300 ease-in-out -translate-y-5"
     } `}
        >
          <ul className="flex flex-col items-center gap-6 text-slate-50 p-4">
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
              <a className="hover:text-purple-400" href="#about">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-purple-400" href="#about">
                Projects
              </a>
            </li>

            <button className=" text-black bg-purple-300 font-semibold px-4 py-2 rounded-lg  hover:text-purple-900 transition duration-300 cursor-pointer">
              Contact me
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
