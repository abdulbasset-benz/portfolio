import React from "react";

const Cta = () => {
  return (
    <div className="h-screen flex items-center justify-center overflow-hidden">
      <div className="flex items-center justify-center flex-col gap-10 max-w-2xl">
        <h1 className="font-clash uppercase text-center font-bold text-4xl">
          Ready to Turn Your Website Into a Client Magnet?
        </h1>

        <p className="font-inter text-center text-gray-600 text-lg">
          Let’s discuss your project and build a fast, modern website that
          attracts customers and drives real business results.
        </p>

        <button className="font-clash bg-primary py-2 px-8 text-white font-semibold capitalize">
          Get a Free Strategy Call
        </button>
      </div>
    </div>
  );
};

export default Cta;
