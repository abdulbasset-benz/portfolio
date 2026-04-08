const Services = () => {
  return (
    <div className="h-full w-screen overflow-hidden px-2 py-10">
      <div className=" flex flex-col">
        <div className="py-10 max-w-4xl">
        <h1 className="font-clash font-medium text-[clamp(3.8rem,8vw,7rem)] leading-[clamp(1em,0.7em,2em)] text-left text-gray-400">
          
          Services
        </h1>{" "}
      </div>

        <div className="flex flex-col items-center gap-10">
          <div className="service-section relative w-full flex items-center justify-center border-b border-gray-300 p-4">
            <h1 className="font-instru font-bold text-[clamp(3.3rem,8vw,4rem)]">E-commerce</h1>
            <span className="absolute top-0 right-3 text-gray-400">01</span>
          </div>

          <div className="service-section relative w-full flex items-center justify-center border-b border-gray-300 p-4">
            <h1 className="font-instru text-[clamp(3.3rem,8vw,4rem)] font-bold">Landing Pages</h1>
            <span className="absolute top-0 right-3 text-gray-400">02</span>
          </div>

          <div className="service-section relative w-full flex items-center justify-center border-b border-gray-300 p-4">
            <h1 className="font-instru text-[clamp(3.3rem,8vw,4rem)] font-bold">UI/UX</h1>
            <span className="absolute top-0 right-3 text-gray-400">03</span>
          </div>

          <div className="service-section relative w-full flex items-center justify-center border-b border-gray-300 p-4">
            <h1 className="font-instru text-[clamp(3.3rem,8vw,4rem)] font-bold">Automation</h1>
            <span className="absolute top-0 right-3 text-gray-400">04</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
