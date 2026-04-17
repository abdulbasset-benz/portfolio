import { useState } from "react";
import { NavLink } from "react-router";

const projects = [
  {
    id: 1,
    title: "Radiant skincare branding",
    description:
      "Radiant skincare is offering a user-centric, ad-free platform.",
    tags: ["branding", "ui/ux"],
    image: "/projects/radiant.jpg",
  },
  {
    id: 2,
    title: "Apex clothing Co. rebrand",
    description: "Bold new look for an eco-conscious apparel brand.",
    tags: ["branding", "development"],
    image: "/projects/apex.jpg",
    accent: true,
  },
  {
    id: 3,
    title: "Vero app development",
    description:
      "Vero aimed to distinguish itself in a competitive social media landscape.",
    tags: ["branding", "development", "ui/ux"],
    image: "/projects/vero.jpg",
  },
  {
    id: 4,
    title: "Stoyo branding",
    description: "Visual identity and packaging design for a Stoyo brand.",
    tags: ["branding"],
    image: "/projects/stoyo.jpg",
    accent: true,
  },
  {
    id: 5,
    title: "Timeless Impressions redesign",
    description: "Bold new look for an eco-conscious apparel brand.",
    tags: ["ui/ux", "development"],
    image: "/projects/timeless.jpg",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "UI/UX", value: "ui/ux" },
  { label: "Branding", value: "branding" },
  { label: "Development", value: "development" },
];

const tagLabel = {
  "ui/ux": "UI/UX", // ← was "webdesign": "ui/ux"
  branding: "Branding",
  development: "Development",
};

const Projects = () => {
  const [active, setActive] = useState("all");

  const visible = projects.filter(
    (p) => active === "all" || p.tags.includes(active),
  );

  return (
    <main className="max-w-5xl mx-auto px-6 py-14">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
        <h1 className="font-clash font-extrabold text-[clamp(2.4rem,6vw,3.5rem)] leading-none tracking-tight text-[#0d0d0d]">
          Projects
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed pt-1">
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
            className={`relative pb-2.5 pr-5 text-[13px] font-medium transition-colors ${
              active === value
                ? "text-[#0d0d0d]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {label}
            {active === value && (
              <span className="absolute bottom-[-1px] left-0 right-5 h-[1.5px] bg-[#0d0d0d]" />
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {visible.map((project) => (
          <NavLink
            to={`/projects/${project.id}`}
            key={project.id}
            className="group bg-[#e8e5de] rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#d0cdc6]">
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
              <h2 className="font-clash font-bold text-[15px] text-[#0d0d0d] tracking-tight mb-1">
                {project.title}
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 border border-gray-300 px-2 py-0.5 rounded-sm"
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
