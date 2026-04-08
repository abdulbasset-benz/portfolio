const About = () => {
  return (
    <div className="h-screen w-screen overflow-hidden relative p-2 pt-10 flex flex-col justify-center">
      <div className="py-10 max-w-4xl">
        <h1 className="font-clash font-medium text-[clamp(3.8rem,8vw,7rem)] leading-[clamp(1em,0.7em,2em)] text-left text-gray-400">
          
          About
        </h1>{" "}
      </div>
      <div className="flex justify-center">
        <h1 className="font-inter font-medium text-[clamp(1.5rem,2.5vw,4rem)] max-w-xl lg:max-w-4xl">
          I build digital experiences that are simple, fast, and
          conversion-driven. My focus isn’t just on building websites — it’s on
          helping businesses achieve real results. Whether it’s increasing
          sales, improving visibility, or generating more leads, every solution
          I create is designed with that goal in mind.
        </h1>
      </div>
    </div>
  );
};

export default About;
