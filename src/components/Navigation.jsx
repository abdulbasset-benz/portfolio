import { TextAlignJustify } from "lucide-react";

const Navigation = () => {
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="flex justify-between items-center p-2 md:p-4 lg:p-8 max-w-325 mx-auto">
        <h1 className="font-bold font-clash text-[clamp(1.2rem,2vw,1.5rem)] uppercase text-primary ">
            Abdulbasset-benz
        </h1>

        <div className="flex items-center gap-7 lg:hidden border p-2 md:p-4 rounded-lg">
          <TextAlignJustify />
        </div>

        <div className="hidden lg:flex gap-5 font-semibold font-inter leading-tight text-xl">
          <ul className="flex items-center gap-5 text-gray-700">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>

          {/* <button className="bg-[#FF3419] px-4 py-3 text-white rounded-lg">Book a Call</button> */}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
