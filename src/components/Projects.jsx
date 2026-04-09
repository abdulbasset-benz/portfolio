import archi from "../assets/archis.jpg";

const Projects = () => {
  return (
    <div className="h-full overflow-hidden md:p-10">
      <div className="py-5 flex justify-center">
        <h1 className="font-clash font-medium text-[clamp(3.8rem,8vw,7rem)] leading-[clamp(1em,0.7em,2em)] text-center">
          <span className="text-primary text-8xl leading-none relative z-10">
            •
          </span>{" "}
          Latest <br /> Projects
        </h1>
      </div>
      {/* projects section */}
      <div className="flex flex-col items-center gap-30">
        <div className="project-card p-2 flex flex-col gap-1 max-w-3xl">
          <div className="project-img rounded-md overflow-hidden">
            <img src={archi} alt="" />
          </div>
          <div className="project-info flex items-center justify-between">
            <h1 className="font-clash font-semibold text-[clamp(1rem,4vw,2rem)] text-gray-900">
              Architex
            </h1>
            <h3 className="font-clash text-[clamp(1rem,4vw,1.5rem)] text-gray-400 ">
              UI/UX - Web Dev
            </h3>
          </div>
        </div>

        <div className="project-card p-2 flex flex-col gap-1 max-w-3xl">
          <div className="project-img rounded-md overflow-hidden">
            <img src={archi} alt="" />
          </div>
          <div className="project-info flex items-center justify-between">
            <h1 className="font-clash font-semibold text-[clamp(1rem,4vw,1.5rem)] text-gray-900">
              Miss Kitty
            </h1>
            <h3 className="font-clash text-[clamp(1rem,4vw,1.5rem)] text-gray-400">
              UI/UX
            </h3>
          </div>
        </div>

        <div className="project-card p-2 flex flex-col gap-1 max-w-3xl">
          <div className="project-img rounded-md overflow-hidden">
            <img src={archi} alt="" />
          </div>
          <div className="project-info flex items-center justify-between">
            <h1 className="font-clash font-semibold text-[clamp(1rem,4vw,1.5rem)] text-gray-900">
              Benak Hills
            </h1>
            <h3 className="font-clash text-[clamp(1rem,4vw,1.5rem)] text-gray-400">
              UI/UX
            </h3>
          </div>
        </div>

        <div className="project-card p-2 flex flex-col gap-1 max-w-3xl">
          <div className="project-img rounded-md overflow-hidden">
            <img src={archi} alt="" />
          </div>
          <div className="project-info flex items-center justify-between">
            <h1 className="font-clash font-semibold text-[clamp(1rem,4vw,1.5rem)] text-gray-900">
              Archite Y
            </h1>
            <h3 className="font-clash text-[clamp(1rem,4vw,1.5rem)] text-gray-400">
              Web Development
            </h3>
          </div>
        </div>
      </div>

      {/* call to action */}
      <div className="flex justify-center my-10">
        <button className="font-inter bg-primary py-2 px-6 text-white font-semibold capitalize">
          View more projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
