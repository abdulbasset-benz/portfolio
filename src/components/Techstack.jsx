import css from "../assets/stack/css.svg";
import git from "../assets/stack/git.svg";
import html5 from "../assets/stack/html5.svg";
import javascript from "../assets/stack/javascript.svg";
import laravel from "../assets/stack/laravel.svg";
import mysql from "../assets/stack/mysql.svg";
import nodejs from "../assets/stack/nodejs.svg";
import php from "../assets/stack/php.svg";
import react from "../assets/stack/react.svg";
import tailwindcss from "../assets/stack/tailwindcss.svg";

const techIcons = [
  { src: css, alt: "CSS" },
  { src: git, alt: "Git" },
  { src: html5, alt: "HTML5" },
  { src: javascript, alt: "JavaScript" },
  { src: laravel, alt: "Laravel" },
  { src: mysql, alt: "MySQL" },
  { src: nodejs, alt: "Node.js" },
  { src: php, alt: "PHP" },
  { src: react, alt: "React" },
  { src: tailwindcss, alt: "Tailwind CSS" },
];

export default function Techstack() {
  return (
    <section className="container mx-auto p-10 text-text-secondary border-t border-gray-800 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col">
        <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent capitalize bg-slate-50">
          My tech stack
        </h1>
        <h3 className="text-lg sm:text-xl mt-2 mb-6 sm:mb-8 bg-clip-text text-transparent capitalize bg-text-header animate-pulse">
          ✨ secret weapons ✨
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl w-full">
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-900/40 rounded-2xl shadow hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={tech.src}
                alt={tech.alt}
                title={tech.alt}
                className="w-16 h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
