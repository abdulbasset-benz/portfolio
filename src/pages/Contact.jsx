import { useForm } from "react-hook-form"

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // send to your backend / EmailJS / Resend here
  }

  if (isSubmitSuccessful) {
    return (
      <div className="text-center py-20">
        <p className="text-green-400 text-2xl font-bold uppercase">
          Message sent! I'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-16 bg-gray-600">
      <h1 className="font-clash font-black text-5xl uppercase text-center leading-tight mb-12">
        You are <span className="text-[#FF3419]">one</span> click away from
        changing <span className="text-[#FF3419]">everything</span>
      </h1>

      {/* Text fields */}
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
        className="w-full bg-transparent border-b border-white/20 py-2 mb-1 outline-none focus:border-[#FF3419] text-white placeholder:text-white/30"
      />
      {errors.name && <p className="text-[#FF3419] text-xs mb-4">{errors.name.message}</p>}

      <input
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
        })}
        placeholder="Email"
        className="w-full bg-transparent border-b border-white/20 py-2 mb-1 outline-none focus:border-[#FF3419] text-white placeholder:text-white/30 mt-4"
      />
      {errors.email && <p className="text-[#FF3419] text-xs mb-4">{errors.email.message}</p>}

      <input
        {...register("projectDescription")}
        placeholder="Describe your project"
        className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-[#FF3419] text-white placeholder:text-white/30 mt-4"
      />

      <hr className="border-white/10 my-8" />

      <h2 className="font-clash font-bold text-lg uppercase mb-6">Project Details</h2>

      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        {/* Radio — has website */}
        <div>
          <p className="text-[#FF3419] text-xs uppercase font-semibold tracking-wider mb-3">
            Do you currently have a website?
          </p>
          {["yes", "no, we will start from scratch"].map((val) => (
            <label key={val} className="flex items-center gap-2 text-white/70 text-sm mb-2 cursor-pointer">
              <input
                type="radio"
                value={val}
                {...register("hasWebsite", { required: "Please select one" })}
                className="accent-[#FF3419]"
              />
              {val}
            </label>
          ))}
          {errors.hasWebsite && <p className="text-[#FF3419] text-xs">{errors.hasWebsite.message}</p>}
        </div>

        {/* Checkboxes — project type */}
        <div>
          <p className="text-[#FF3419] text-xs uppercase font-semibold tracking-wider mb-3">
            What type of project?
          </p>
          {["Portfolio Website", "E-commerce Store", "Landing Page", "Website Redesign", "Other"].map((val) => (
            <label key={val} className="flex items-center gap-2 text-white/70 text-sm mb-2 cursor-pointer">
              <input
                type="checkbox"
                value={val}
                {...register("projectType", { required: "Select at least one" })}
                className="accent-[#FF3419]"
              />
              {val}
            </label>
          ))}
          {errors.projectType && <p className="text-[#FF3419] text-xs">{errors.projectType.message}</p>}
        </div>

        {/* Industry text input */}
        <div>
          <p className="text-[#FF3419] text-xs uppercase font-semibold tracking-wider mb-3">
            What industry are you in?
          </p>
          <input
            {...register("industry")}
            placeholder="example: interior design"
            className="w-full bg-transparent border-b border-white/20 py-1 outline-none focus:border-[#FF3419] text-white placeholder:text-white/30 text-sm"
          />
        </div>

        {/* Radio — timeline */}
        <div>
          <p className="text-[#FF3419] text-xs uppercase font-semibold tracking-wider mb-3">
            When do you need this completed?
          </p>
          {["ASAP (1–2 weeks)", "Within 1 month", "2–3 months", "Flexible"].map((val) => (
            <label key={val} className="flex items-center gap-2 text-white/70 text-sm mb-2 cursor-pointer">
              <input type="radio" value={val} {...register("timeline")} className="accent-[#FF3419]" />
              {val}
            </label>
          ))}
        </div>
      </div>

      {/* Budget checkboxes */}
      <div className="mt-6">
        <p className="text-[#FF3419] text-xs uppercase font-semibold tracking-wider mb-3">
          What's your budget range? (Optional)
        </p>
        <div className="grid grid-cols-2 gap-2">
          {["Under $1,500", "$1,500 – $5,000", "$5,000 – $7,000", "$7,000+", "Not sure yet"].map((val) => (
            <label key={val} className="flex items-center gap-2 text-white/70 text-sm cursor-pointer">
              <input type="checkbox" value={val} {...register("budget")} className="accent-[#FF3419]" />
              {val}
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleSubmit(onSubmit)}
          className="flex items-center gap-4 bg-[#FF3419] text-white font-bold px-8 py-4 rounded-full hover:opacity-85 transition-opacity"
        >
          Get a Free Quote
          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">→</span>
        </button>
      </div>
    </section>
  )
}