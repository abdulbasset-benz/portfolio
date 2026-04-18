import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

const PROJECT_TYPES = ["UI/UX", "Landing Page", "Portfolio", "E-commerce"];
const IMPROVEMENTS = [
  "Full redesign",
  "Conversion",
  "Performance",
  "New Features",
];
const BUDGETS = ["< $500", "$500–$1k", "$1k–$3k", "$3k+"];

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      hasWebsite: "yes",
      improvements: [],
      projectTypes: [],
      budget: "",
    },
  });

  const hasWebsite = watch("hasWebsite");

  const onSubmit = (data) => {
    console.log(data);
    // plug in EmailJS / Resend / your backend here
  };

  // --- Thank you screen ---
  if (isSubmitSuccessful) {
    return (
      <div className="min-h-screen bg-[#111] flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75"
              />
            </svg>
          </div>
          <h2 className="font-clash font-extrabold text-3xl text-white mb-3 leading-tight">
            Thank you for
            <br />
            reaching out to us
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            We will get back to you within 24 hours,
            <br />
            don't forget to check your inbox.
          </p>
          <a
            href="/"
            className="inline-block bg-primary text-white font-bold text-sm px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Go back Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-25">
        {/* Page header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-16">
          <h1 className="font-clash font-extrabold text-[clamp(3rem,8vw,5rem)] leading-none tracking-tight">
            Let's Talk
          </h1>
          <p className="text-sm font-inter text-gray-500 leading-relaxed md:pt-2">
            Got an idea you want to bring to life? Let's talk about it — no
            commitment, just a free quote in 24 hours.
          </p>
        </div>

        {/* Form card */}
        <div className="max-w-2xl mx-auto bg-[#161616] rounded-xl p-8 md:p-12">
          <h2 className="font-clash font-extrabold text-[clamp(1.5rem,4vw,2rem)] text-white leading-tight mb-2">
            Get your free quote
            <br />
            in <span className="text-primary">24 hours</span>
          </h2>
          <p className="text-xs text-gray-600 mb-10">
            Fill the form so we can get an accurate evaluation of your project.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* ── Project details ── */}
            <section>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4">
                Project details
              </p>

              {/* Has website toggle */}
              <p className="text-xs text-gray-500 mb-3">
                Do you currently have a website?
              </p>
              <Controller
                name="hasWebsite"
                control={control}
                render={({ field }) => (
                  <div className="flex gap-3 mb-6">
                    {["yes", "no"].map((val) => (
                      <button
                        type="button"
                        key={val}
                        onClick={() => field.onChange(val)}
                        className={`flex-1 py-2.5 rounded-md text-sm font-semibold border transition-all capitalize ${
                          field.value === val
                            ? "bg-primary border-primary text-white"
                            : "bg-transparent border-white/10 text-gray-500 hover:border-white/25"
                        }`}
                      >
                        {val === "yes" ? "Yes" : "No"}
                      </button>
                    ))}
                  </div>
                )}
              />

              {/* YES branch */}
              {hasWebsite === "yes" && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <input
                      {...register("websiteUrl", {
                        required: "Please enter your website URL",
                        pattern: {
                          value: /^https?:\/\/.+/,
                          message: "Enter a valid URL starting with http(s)://",
                        },
                      })}
                      type="url"
                      placeholder="https://www.yoursite.com"
                      className="w-full bg-transparent border-b border-white/10 focus:border-primary py-2.5 text-white text-sm placeholder-white/20 outline-none transition-colors"
                    />
                    {errors.websiteUrl && (
                      <p className="text-primary text-xs mt-1">
                        {errors.websiteUrl.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-3">
                      What would you like to improve?
                    </p>
                    <Controller
                      name="improvements"
                      control={control}
                      rules={{
                        validate: (v) => v.length > 0 || "Select at least one",
                      }}
                      render={({ field }) => (
                        <div className="flex flex-wrap gap-2">
                          {IMPROVEMENTS.map((item) => {
                            const active = field.value.includes(item);
                            return (
                              <button
                                type="button"
                                key={item}
                                onClick={() =>
                                  field.onChange(
                                    active
                                      ? field.value.filter((v) => v !== item)
                                      : [...field.value, item],
                                  )
                                }
                                className={`px-4 py-2 rounded-md text-xs font-semibold border transition-all ${
                                  active
                                    ? "bg-primary border-primary text-white"
                                    : "bg-transparent border-white/10 text-gray-500 hover:border-white/25"
                                }`}
                              >
                                {item}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    />
                    {errors.improvements && (
                      <p className="text-primary text-xs mt-1">
                        {errors.improvements.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      {...register("painPoints")}
                      placeholder="Pain points — what bothers you about your current site?"
                      rows={3}
                      className="w-full bg-transparent border-b border-white/10 focus:border-primary py-2.5 text-white text-sm placeholder-white/20 outline-none transition-colors resize-none"
                    />
                  </div>
                </div>
              )}

              {/* NO branch */}
              {hasWebsite === "no" && (
                <div className="animate-in fade-in duration-200">
                  <p className="text-xs text-gray-500 mb-3">
                    Select your project type
                  </p>
                  <Controller
                    name="projectTypes"
                    control={control}
                    rules={{
                      validate: (v) =>
                        v.length > 0 || "Select at least one type",
                    }}
                    render={({ field }) => (
                      <div className="flex flex-wrap gap-2">
                        {PROJECT_TYPES.map((item) => {
                          const active = field.value.includes(item);
                          return (
                            <button
                              type="button"
                              key={item}
                              onClick={() =>
                                field.onChange(
                                  active
                                    ? field.value.filter((v) => v !== item)
                                    : [...field.value, item],
                                )
                              }
                              className={`px-4 py-2 rounded-md text-xs font-semibold border transition-all ${
                                active
                                  ? "bg-primary border-primary text-white"
                                  : "bg-transparent border-white/10 text-gray-500 hover:border-white/25"
                              }`}
                            >
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  />
                  {errors.projectTypes && (
                    <p className="text-primary text-xs mt-1">
                      {errors.projectTypes.message}
                    </p>
                  )}
                </div>
              )}
            </section>

            {/* ── Budget ── */}
            <section>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4">
                Budget range
              </p>
              <Controller
                name="budget"
                control={control}
                rules={{ required: "Please select a budget range" }}
                render={({ field }) => (
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => field.onChange(item)}
                        className={`px-4 py-2 rounded-md text-xs font-semibold border transition-all ${
                          field.value === item
                            ? "bg-primary border-primary text-white"
                            : "bg-transparent border-white/10 text-gray-500 hover:border-white/25"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              />
              {errors.budget && (
                <p className="text-primary text-xs mt-1">
                  {errors.budget.message}
                </p>
              )}
            </section>

            {/* ── Personal info ── */}
            <section className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                Personal info
              </p>
              <div>
                <input
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-transparent border-b border-white/10 focus:border-primary py-2.5 text-white text-sm placeholder-white/20 outline-none transition-colors"
                />
                {errors.fullName && (
                  <p className="text-primary text-xs mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent border-b border-white/10 focus:border-primary py-2.5 text-white text-sm placeholder-white/20 outline-none transition-colors"
                />
                {errors.email && (
                  <p className="text-primary text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </section>

            {/* ── Project description ── */}
            <section>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4">
                Describe your project
              </p>
              <textarea
                {...register("description", {
                  required: "Please describe your project",
                })}
                placeholder="Tell me about your project and what you're looking to achieve..."
                rows={4}
                className="w-full bg-transparent border-b border-white/10 focus:border-primary py-2.5 text-white text-sm placeholder-white/20 outline-none transition-colors resize-none"
              />
              {errors.description && (
                <p className="text-primary text-xs mt-1">
                  {errors.description.message}
                </p>
              )}
            </section>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-sm py-4 rounded-md transition-colors"
              >
                Get My Free Quote
              </button>
              <p className="text-center text-[11px] text-gray-600 mt-3">
                ⏱ Response within 24h
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
