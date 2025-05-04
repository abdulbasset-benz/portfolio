import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData"; // Updated import path

const Projects = () => {
  return (
    <section className="container mx-auto p-10 text-text-secondary border-t border-gray-800 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col">
        <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent capitalize bg-slate-50">
          My projects
        </h1>
        <h3 className="text-lg sm:text-xl mt-2 mb-6 sm:mb-8 bg-clip-text text-transparent capitalize bg-text-header animate-pulse">
          ✨ some of my magic ✨
        </h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-h-[400px]">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
