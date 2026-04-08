import { TextAlignJustify } from "lucide-react";

const Navigation = () => {
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="flex justify-between items-center p-2 md:p-4 lg:p-8 max-w-7xl mx-auto">
        <h1 className="font-bold font-clash text-[clamp(1.2rem,2vw,2rem)] uppercase text-primary ">
            Abdulbasset-benz
        </h1>

        <div className="flex items-center gap-7 lg:hidden border p-2 md:p-4 rounded-lg">
          <TextAlignJustify />
        </div>

        <div className="hidden lg:flex gap-4 font-semibold font-inter leading-tight text-xl">
          <ul className=" gap-3">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Work</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Home</li>
          </ul>

          {/* <button className="bg-[#FF3419] px-4 py-3 text-white rounded-lg">Book a Call</button> */}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
