const variants = {
  default:
    "btn px-6 py-3 border border-gray-500 rounded-md font-semibold hover:text-slate-300",
  navbar:
    "font-montserrat font-semibold capitalize px-4 py-2 border border-purple-700 rounded-lg text-white hover:bg-purple-700 hover:text-white",
  about:
    " btn px-6 py-3 border border-gray-500 rounded-md font-semibold hover:text-slate-300 mt-6 font-montserrat",
};

export default function Button({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  return (
    <button
      className={`flex items-center group transition duration-300 cursor-pointer ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
