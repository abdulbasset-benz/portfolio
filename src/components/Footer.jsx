import React from "react";

const Footer = () => {
  return (
    <div className="w-screen p-10">
      <div className="flex flex-col items-center ">
        <h1 className="font-clash font-bold text-6xl capitalize">abu nazim</h1>
        <p className="font-inter text-center text-gray-500">
          Elelvating Brands through Design and Communication
        </p>
      </div>
      {/* social links */}
      <div className="py-10 flex justify-between items-center">
        <div className="font-clash">Instagram</div>
        <div className="font-clash">LinkedIn</div>
        <div className="font-clash">WhatsApp</div>
      </div>

      <div className="pt-10">
        <ul className="flex flex-col items-center gap-2">
          <li>
            <a className="capitalize font-clash font-normal text-lg" href="">
              Home
            </a>
          </li>
          <li>
            <a className="capitalize font-clash font-normal text-lg" href="">
              About
            </a>
          </li>
          <li>
            <a className="capitalize font-clash font-normal text-lg" href="">
              Projects
            </a>
          </li>
          <li>
            <a className="capitalize font-clash font-normal text-lg" href="">
              Services
            </a>
          </li>
          <li>
            <a className="capitalize font-clash font-normal text-lg" href="">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
