import { TextAlignJustify } from "lucide-react";

const Navigation = () => {
  return (
    <div className="w-full relative">
      <div className="flex justify-between items-center p-2 md:p-4 lg:p-8">
        <h1 className="font-bold text-2xl lg:text-4xl">BENZY</h1>

        <div className="flex items-center gap-7 lg:hidden border p-2 md:p-4 rounded-lg">
          <TextAlignJustify />
        </div>

        <div className="hidden lg:flex font-bold leading-tight text-2xl">
          <ul>
            <li>Home</li>
            <li>Work</li>
            <li>Contact</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
