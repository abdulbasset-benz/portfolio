import { useState } from "react";
import { NavLink } from "react-router";
import { projects, filters, tagLabel } from "../data/projects";

const Projects = () => {
  const [active, setActive] = useState("all");

  const visible = projects.filter(
    (p) => active === "all" || p.tags.includes(active),
  );

  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-12">
        <h1 className="font-inter font-bold text-[clamp(4rem,10vw,5.5rem)] leading-none tracking-tight text-[#0d0d0d]">
          Projects
        </h1>
        <p className="text-sm font-inter text-gray-500 leading-relaxed pt-1">
          Every project I deliver is a reflection of my commitment to quality,
          designed to inspire and drive success.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`relative pb-2.5 pr-5 text-[13px] font-semibold font-inter transition-colors ${
              active === value
                ? "text-primary"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {label}
            {active === value && (
              <span className="absolute -bottom-px left-0 right-5 h-[1.5px] bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visible.map((project) => (
          <NavLink
            // ← slug-based route instead of id
            to={`/projects/${project.slug}`}
            key={project.id}
            className="group bg-[#e2e2e2] rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            {/* Image */}
            <div className="relative w-full aspect-16/10 overflow-hidden bg-[#b4b4b4]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              {project.accent && (
                <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-primary" />
              )}
            </div>

            {/* Body */}
            <div className="p-4">
              <h2 className="font-clash font-semibold text-[15px] text-[#0e0909] tracking-tight mb-1">
                {project.title}
              </h2>
              <p className="text-xs font-inter text-gray-600 leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-inter font-semibold uppercase tracking-widest text-gray-500 border border-gray-600 px-2 py-0.5 rounded-sm"
                  >
                    {tagLabel[tag]}
                  </span>
                ))}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </main>
  );
};

export default Projects;