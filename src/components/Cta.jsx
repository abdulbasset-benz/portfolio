import React from "react";

const Cta = () => {
  return (
    <div className="h-screen flex items-center justify-center overflow-hidden">
      <div className="flex items-center justify-center flex-col gap-10 max-w-3xl">
        <h1 className="font-clash uppercase text-center font-bold text-[clamp(2.5rem,6vw,4rem)] leading-[clamp(1em,0.7em,2em)]">
          Ready to Turn Your Website Into a Client Magnet?
        </h1>

        <p className="font-inter text-center text-gray-600 text-[clamp(1rem,2.5vw,1.5rem)]">
          Let’s discuss your project and build a fast, modern website that
          attracts customers and drives real business results.
        </p>

        <button className="font-clash bg-primary py-2 px-8 text-white font-semibold capitalize">
          Get a Free Project Quote
        </button>
      </div>
    </div>
  );
};

export default Cta;
