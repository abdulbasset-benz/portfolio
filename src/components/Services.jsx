const Services = () => {
  return (
    <div className="h-full w-screen overflow-hidden px-2 py-10">
      <div className=" flex flex-col">
        <div className="py-20">
          <h1 className="font-inter font-bold text-5xl text-left">
            Services
          </h1>
        </div>

        <div className="flex flex-col items-center gap-10">
            <div className="service-section relative w-full flex items-center justify-center border-b border-gray-300 p-4">
                <h1 className="font-instru text-4xl font-bold">UI/UX Design</h1>
                <span className="absolute top-0 right-3 text-gray-400">01</span>
            </div>
            <div className="service-section relative w-full flex items-center justify-center border-b border-gray-300 p-4">
                <h1 className="font-instru text-4xl font-bold">Web Development</h1>
                <span className="absolute top-0 right-3 text-gray-400">02</span>
            </div>
            <div className="service-section relative w-full flex items-center justify-center border-b border-gray-300 p-4">
                <h1 className="font-instru text-4xl font-bold">Website Redesign</h1>
                <span className="absolute top-0 right-3 text-gray-400">03</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
