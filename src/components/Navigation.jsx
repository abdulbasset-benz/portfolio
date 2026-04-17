import { useState } from "react";
import { NavLink } from "react-router";
import { TextAlignJustify, X } from "lucide-react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="w-full fixed top-0 left-0 z-40">
        <div className="flex justify-between items-center p-2 md:p-4 lg:p-8 max-w-325 mx-auto">
          <h1 className="font-bold font-clash text-[clamp(1.2rem,2vw,1.5rem)] capitalize">
            Abdulbasset-benz
          </h1>

          {/* Mobile trigger */}
          <div
            className="flex items-center gap-7 lg:hidden border p-2 md:p-4 rounded-lg cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <TextAlignJustify />
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex gap-5 font-semibold font-inter leading-tight text-xl">
            <ul className="flex items-center gap-5 text-gray-700">
              {["/ Home", "/projects Projects", "/about About", "/contact Contact"].map((item) => {
                const [to, label] = item.split(" ");
                return (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) => isActive ? "text-primary" : ""}
                    >
                      {label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`
          fixed inset-0 z-50 flex flex-col lg:hidden
          transition-transform duration-350 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Red panel */}
        <div className="flex-1 bg-primary flex flex-col justify-between px-6 pt-7 pb-8">
          {/* Header row */}
          <div className="flex justify-between items-center">
            <h1 className="font-bold font-clash text-lg capitalize text-white">
              Abdulbasset-benz
            </h1>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white p-1"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-col gap-1 mt-8">
              {[
                { to: "/", label: "Home" },
                { to: "/projects", label: "Projects" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className="text-white font-bold font-clash text-[clamp(2.4rem,10vw,3rem)] leading-tight tracking-tight block"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex gap-5 flex-wrap">
            {["LinkedIn", "Instagram", "Dribbble", "Behance"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-white/70 text-sm hover:text-white transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Dark CTA panel */}
        <div className="bg-[#0f0f0f] px-6 py-7 flex flex-col gap-3"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(255,255,255,.03) 28px,rgba(255,255,255,.03) 29px),repeating-linear-gradient(90deg,transparent,transparent 28px,rgba(255,255,255,.03) 28px,rgba(255,255,255,.03) 29px)",
          }}
        >
          <p className="text-primary text-xs tracking-widest uppercase">Got an Idea?</p>
          <p className="text-white text-2xl font-bold font-clash leading-snug tracking-tight">
            Let's craft<br />brilliant together!
          </p>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="self-start border border-primary text-primary text-sm px-5 py-2 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            Get in touch
          </NavLink>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Navigation;