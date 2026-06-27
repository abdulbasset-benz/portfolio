import { NavLink } from "react-router";
import benak from "../assets/benakhills.webp";
import missKitty from "../assets/misskitty.webp";
import Aurum from "../assets/aurum.webp";

const projects = [
  {
    id: 1,
    slug: "benak-hills",
    image: benak,
    title: "Benak Hills",
    category: "Luxury Real Estate",
    tags: ["UI/UX", "Web Dev"],
    alt: "Benak Hills luxury residency website",
  },
  {
    id: 2,
    slug: "miss-kitty",
    image: missKitty,
    title: "Miss Kitty",
    category: "Interior Design Brand",
    tags: ["UI/UX", "Web Dev"],
    alt: "Miss Kitty interior design studio website",
  },
  {
    id: 3,
    slug: "aurum",
    image: Aurum,
    title: "Aurum Estates",
    category: "Architecture Studio",
    tags: ["UI/UX", "Web Dev"],
    alt: "Architex architecture studio website",
  },
  {
    id: 4,
    slug: "archite-y",
    image: Aurum,
    title: "Archite Y",
    category: "Property Development",
    tags: ["Web Dev"],
    alt: "Archite Y property development website",
  },
];

const ProjectCard = ({ project, index, featured = false }) => (
  <NavLink
    to={`/projects/${project.slug}`}
    className="group flex flex-col gap-3 cursor-pointer"
  >
    {/* Image */}
    <div
      className={`overflow-hidden bg-gray-100 relative ${
        featured ? "aspect-video" : "aspect-4/3"
      }`}
    >
      <img
        src={project.image}
        alt={project.alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <span className="absolute top-3 right-4 font-inter text-xs text-white/60 tracking-widest">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>

    {/* Info row */}
    <div className="flex items-start justify-between gap-4 pt-1">
      <div className="flex flex-col gap-0.5">
        <h3
          className={`font-clash font-bold leading-tight group-hover:text-[rgb(255,52,25)] transition-colors duration-300 ${
            featured
              ? "text-[clamp(1.6rem,3.5vw,2.4rem)]"
              : "text-[clamp(1.2rem,2.5vw,1.6rem)]"
          }`}
        >
          {project.title}
        </h3>
        <p className="font-inter text-xs text-gray-400 tracking-wide">
          {project.category}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 justify-end">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-inter text-[10px] tracking-widest uppercase border border-gray-200 px-2 py-1 text-gray-400 group-hover:border-[rgb(255,52,25)] group-hover:text-[rgb(255,52,25)] transition-colors duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Bottom rule */}
    <div className="h-px bg-gray-100 group-hover:bg-[rgb(255,52,25)] transition-colors duration-500" />
  </NavLink>
);

const Projects = () => {
  const [featured, ...rest] = projects;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="font-inter text-sm tracking-[0.2em] uppercase text-[rgb(255,52,25)] mb-3">
              Selected Work
            </p>
            <h2 className="font-inter font-bold text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-black">
              Latest <br /> Projects
            </h2>
          </div>
          <NavLink
            to="/projects"
            className="font-clash font-semibold text-sm tracking-widest uppercase border-b border-black pb-0.5 self-start sm:self-end hover:border-[rgb(255,52,25)] hover:text-[rgb(255,52,25)] transition-colors duration-300"
          >
            View All →
          </NavLink>
        </div>

        {/* Featured — full width */}
        <ProjectCard project={featured} index={0} featured={true} />

        {/* Rest — 2 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
          {rest.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 1}
              featured={false}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;