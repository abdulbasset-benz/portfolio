const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Premium, editorial-grade designs that match the quality of your brand. Every layout built to impress at first glance.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Fast, clean, production-ready builds. Pixel-perfect implementation from design to live site — no handoff, no lost details.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Intuitive interfaces that guide visitors toward action. Designed for experience, optimised for conversion.",
  },
  {
    number: "04",
    title: "Conversion Optimisation",
    description:
      "Strategic layout, copy hierarchy, and interaction design that turns visitors into leads and enquiries into clients.",
  },
];

const Services = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto flex flex-col">

        {/* Section header */}
        <div className="mb-4">
          <p className="font-inter text-sm tracking-[0.2em] uppercase text-[rgb(255,52,25)] mb-3">
            What I Do
          </p>
          <h2 className="font-clash font-medium text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-[#66666e]">
            Services
          </h2>
        </div>

        {/* Service rows */}
        <div className="flex flex-col mt-10">
          {services.map((s) => (
            <div
              key={s.number}
              className="group relative flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 py-7 sm:py-8 gap-2 sm:gap-0 hover:border-[rgb(255,52,25)] transition-colors duration-300 cursor-default"
            >
              {/* Number */}
              <span className="font-inter text-xs tracking-widest text-gray-300 group-hover:text-[rgb(255,52,25)] transition-colors duration-300 sm:w-12 shrink-0">
                {s.number}
              </span>

              {/* Title */}
              <h3 className="font-instru font-bold text-[clamp(1.6rem,4vw,2.8rem)] leading-tight text-black group-hover:translate-x-2 transition-transform duration-300 flex-1">
                {s.title}
              </h3>

              {/* Description — hidden on mobile, fades in on hover desktop */}
              <p className="font-inter text-sm text-gray-400 sm:max-w-xs sm:text-right sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;