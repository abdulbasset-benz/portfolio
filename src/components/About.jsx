const About = () => {
  return (
    <section className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-24 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-12">

        {/* Header */}
        <div>
          <p className="font-inter text-sm tracking-[0.2em] uppercase text-[rgb(255,52,25)] mb-3">
            Who I Am
          </p>
          <h2 className="font-inter  font-medium text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-[#66666e]">
            My Story
          </h2>
        </div>

        {/* Main statement */}
        <p className="font-inter font-bold text-[clamp(1.6rem,3.5vw,2.8rem)] leading-[1.1] max-w-5xl text-black">
          I believe that every brand that has high standards, strive to be unique, and must stand out online.
        </p>

        {/* Body copy */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-24 max-w-5xl">
          <p className="font-inter text-[clamp(0.95rem,1.5vw,1.1rem)] text-gray-500 leading-relaxed lg:max-w-sm">
            I'm Abdulbasset — a fullstack designer and developer based in
            Algeria. I have always had a nick for creating designs that are not just visually appealing but also functional. No vanity metrics
          </p>
          <p className="font-inter text-[clamp(0.95rem,1.5vw,1.1rem)] text-gray-500 leading-relaxed lg:max-w-sm">
            My edge is being both designer and developer. There's no
            handoff, no lost details, no misaligned vision. You get one
            person who owns the entire experience — from the first
            impression to the final interaction.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-between gap-10 lg:gap-20 pt-4 border-t border-gray-100">
          {[
            { value: "4+", label: "Years building premium web experiences" },
            { value: "7+", label: "Projects delivered end-to-end" },
            { value: "100%", label: "Design and development in-house" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-instru font-bold text-[clamp(2rem,4vw,3rem)] leading-none text-black">
                {stat.value}
              </span>
              <span className="font-inter text-xs text-gray-400 max-w-35 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;