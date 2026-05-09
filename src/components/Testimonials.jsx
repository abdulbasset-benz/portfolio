const testimonials = [
  {
    id: 1,
    quote:
      "Working with Abdulbasset was seamless from start to finish. He understood our brand instantly and delivered a digital presence that truly reflects the quality of Miss Kitty.",
    author: "Miss Kitty Brand",
    role: "Fashion & Lifestyle Brand",
    initial: "M",
  },
  {
    id: 2,
    quote:
      "Benakhi Hills needed a website that matched the luxury of our residency. Abdulbasset delivered exactly that — premium, fast, and conversion-focused.",
    author: "Benakhi Hills Residency",
    role: "Luxury Real Estate",
    initial: "B",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-16">
          <p className="font-inter text-sm tracking-[0.2em] uppercase text-[rgb(255,52,25)] mb-3">
            Client Words
          </p>
          <h2 className="font-clash font-bold uppercase text-[clamp(2.2rem,6vw,4rem)] leading-[0.95] max-w-xl">
            What Clients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-gray-100 p-8 sm:p-10 flex flex-col justify-between gap-10 group hover:border-[rgb(255,52,25)] transition-colors duration-300"
            >
              {/* Quote mark */}
              <div>
                <span
                  className="block font-clash font-bold text-[5rem] leading-none text-gray-100 group-hover:text-[rgb(255,52,25)] transition-colors duration-300 select-none mb-4"
                  aria-hidden="true"
                >
                  "
                </span>
                <p className="font-inter text-[clamp(1rem,1.8vw,1.2rem)] text-gray-700 leading-relaxed">
                  {t.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar initial */}
                <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center shrink-0 group-hover:bg-[rgb(255,52,25)] transition-colors duration-300">
                  <span className="font-clash font-bold text-white text-sm">
                    {t.initial}
                  </span>
                </div>
                <div>
                  <p className="font-clash font-semibold text-black text-[0.95rem] leading-tight">
                    {t.author}
                  </p>
                  <p className="font-inter text-gray-400 text-[0.8rem] mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="mt-16 h-px bg-gray-100 w-full" />

      </div>
    </section>
  );
};

export default Testimonials;