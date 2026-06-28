import { NavLink } from "react-router";

const Hero = () => {
  return (
    <div className="pt-24 min-h-screen flex items-center">
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 gap-15 py-12">
        {/* Headline + subheadline */}
        <div className="space-y-5 text-center max-w-5xl mx-auto">
          <h1 className="font-instru font-bold capitalize text-center tracking-normal leading-[0.95] text-[clamp(4rem,8vw,10rem)]">
            Digital Presence That Stands Out
          </h1>
          <p className="text-center mx-auto max-w-xl font-inter text-[clamp(1rem,2vw,1.25rem)] text-gray-500 leading-relaxed">
            I'm Abdulbasset — a fullstack developer and designer who builds
            high-end websites, e-commerce stores, and web apps for brands that
            refuse to look ordinary online.
          </p>
        </div>

        {/* Services list */}
        <ul className="flex sm:flex-row items-center justify-center gap-6 sm:gap-16 w-full max-w-lg">
          <li className="font-clash font-normal text-gray-800 text-[clamp(0.95rem,1.6vw,1.25rem)] border-b border-dashed border-primary px-2 pb-0.5 text-center">
            UI/UX Design
          </li>
          <li className="font-clash font-normal text-gray-800 text-[clamp(0.95rem,1.6vw,1.25rem)] border-b border-dashed border-primary px-2 pb-0.5 text-center">
            Web Development
          </li>
        </ul>

        {/* CTA */}
        <NavLink
          to="/contact"
          className="font-clash bg-primary py-3 px-8 text-white font-semibold text-[clamp(0.9rem,1.5vw,1.1rem)] hover:opacity-90 transition-opacity"
        >
          Get a Free Project Quote
        </NavLink>

        {/* Availability badge */}
        <div className="flex items-center justify-center gap-2">
          <span className="relative flex items-center justify-center">
            <span className="absolute h-3 w-3 rounded-full bg-[#16db65]/60 animate-ping" />
            <span className="text-[#16db65] text-2xl leading-none relative z-10">
              •
            </span>
          </span>
          <p className="font-medium font-inter text-[clamp(0.85rem,1.4vw,1rem)]">
            Available for freelance projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
