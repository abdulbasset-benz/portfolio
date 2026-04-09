import { NavLink } from "react-router";
import { TextAlignJustify } from "lucide-react";

const Navigation = () => {
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="flex justify-between items-center p-2 md:p-4 lg:p-8 max-w-325 mx-auto">
        <h1 className="font-bold font-clash text-[clamp(1.2rem,2vw,1.5rem)] uppercase text-primary">
          Abdulbasset-benz
        </h1>

        <div className="flex items-center gap-7 lg:hidden border p-2 md:p-4 rounded-lg">
          <TextAlignJustify />
        </div>

        <div className="hidden lg:flex gap-5 font-semibold font-inter leading-tight text-xl">
          <ul className="flex items-center gap-5 text-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Projects
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                About
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Contact
              </NavLink>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
