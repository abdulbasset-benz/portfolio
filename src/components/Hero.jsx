const Hero = () => {
  return (
    <div className="pt-24 h-screen">
      <div className="flex flex-col items-center justify-around h-full p-2 gap-7">
        <div className="space-y-5">
          <h1 className="text-center font-clash font-bold uppercase text-[clamp(3.8rem,10vw,7rem)] leading-[clamp(1em,-0.02em,0.02em)]">
            digital <br />designer
          </h1>
          <p className="text-center max-w-xl lg:max-w-2xl font-inter text-[clamp(1rem,2.5vw,1.5rem)] text-gray-600">
            hey there, i'm Abdulbasset, a digital designer with a passion for
            transforming ideas into captivating visual experiences
          </p>
        </div>

        <div className="w-full md:w-1/2 mx-auto">
          <ul className="flex justify-between">
            <li className="font-clash font-normal text-gray-800 text-[clamp(1rem,1.8vw,1.5rem)] border-b border-dashed px-2 border-primary">UI/UX design</li>
            <li className="font-clash font-normal text-gray-800 text-[clamp(1rem,1.8vw,1.5rem)] border-b border-dashed px-2 border-primary">Web development</li>
          </ul>
        </div>

        <div>
          <button className="font-clash bg-primary py-2 px-6 text-white font-semibold">
            Get a Free Project Quote
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex items-center justify-center">
            {/* Pulse ring */}
            <span className="absolute h-3 w-3 rounded-full bg-[#16db65]/60 animate-ping"></span>

            {/* Your bullet dot */}
            <span className="text-[#16db65] text-3xl leading-none relative z-10">
              •
            </span>
          </span>

          <h1 className="font-medium font-clash">
            {" "}
            Available for freelance projects
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
