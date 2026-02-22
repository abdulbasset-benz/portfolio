import archi from "../assets/archis.jpg";

const Projects = () => {
  return (
    <div className="h-full overflow-hidden">
      <div className="py-20 px-2">
        <h1 className="font-inter font-bold text-5xl text-left">
          Latest Projects
        </h1>
      </div>
      {/* projects section */}
      <div className="flex flex-col gap-10">
        <div className="project-card p-2 flex flex-col gap-4">
          <div className="project-img rounded-md overflow-hidden">
            <img src={archi} alt="" />
          </div>
          <div className="project-info flex items-center justify-between">
            <h1 className="font-clash text-lg">Project Title</h1>
            <h3 className="font-clash text-lg">UI/UX</h3>
          </div>
        </div>

        <div className="project-card p-2 flex flex-col gap-4">
          <div className="project-img rounded-md overflow-hidden">
            <img src={archi} alt="" />
          </div>
          <div className="project-info flex items-center justify-between">
            <h1 className="font-clash text-lg">Project Title</h1>
            <h3 className="font-clash text-lg">UI/UX</h3>
          </div>
        </div>

        <div className="project-card p-2 flex flex-col gap-4">
          <div className="project-img rounded-md overflow-hidden">
            <img src={archi} alt="" />
          </div>
          <div className="project-info flex items-center justify-between">
            <h1 className="font-clash text-lg">Project Title</h1>
            <h3 className="font-clash text-lg">UI/UX</h3>
          </div>
        </div>

        <div className="project-card p-2 flex flex-col gap-4">
          <div className="project-img rounded-md overflow-hidden">
            <img src={archi} alt="" />
          </div>
          <div className="project-info flex items-center justify-between">
            <h1 className="font-clash text-lg">Project Title</h1>
            <h3 className="font-clash text-lg">UI/UX</h3>
          </div>
        </div>
      </div>

      {/* call to action */}
      <div className="flex justify-center my-10">
        <button className="font-inter rounded-lg bg-primary py-2 px-6 text-white font-semibold capitalize">
          View more projects
        </button>
      </div>
    </div>
  );
};

export default Projects;