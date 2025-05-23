import Button from "./ui/Button";

const AboutMe = () => {
  return (
    <section className=" text-white border-t border-gray-800 font-poppins py-20 px-4">
      <div className="container mx-auto flex flex-col items-center text-center relative">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-slate-50">
          About Me
        </h1>
        <h3 className="text-xl mb-8 bg-clip-text text-transparent capitalize bg-text-header animate-pulse">
          ✨ the coding wizard ✨
        </h3>

        <p className="max-w-2xl text-md leading-relaxed">
          Hi, I'm{" "}
          <span className="font-bold bg-clip-text text-transparent bg-text-header">
            Abdulbasset
          </span>
          —a full-stack developer who crafts apps that look stunning and run
          lightning-fast⚡.
        </p>

        <p className="mt-4 px-3 max-w-2xl text-md leading-relaxed">
          With <span className="font-bold">Laravel</span> and{" "}
          <span className="font-bold">React</span>, I turn ideas into sleek,
          high-performance tools that solve real problems. For me, coding is
          artistry: every pixel and line of code must balance beauty with speed.
        </p>

        <p className="mt-4 max-w-2xl text-md leading-relaxed">
          I thrive on creating seamless user experiences and collaborating with
          bold thinkers ready to disrupt industries. Let's build something
          people love—and can't live without.
        </p>

        <div className="mt-6 text-lg bg-clip-text text-transparent bg-text-header font-bold">
          Got a vision? Let's make it{" "}
          <span className="text-white">UNSTOPPABLE</span>
        </div>
        <Button variant="about">
          Contact Me
          <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            🚀
          </span>
        </Button>
      </div>
    </section>
  );
};

export default AboutMe;
