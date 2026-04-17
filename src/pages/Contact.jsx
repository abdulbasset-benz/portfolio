import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // send to your backend / EmailJS / Resend here
  };

  if (isSubmitSuccessful) {
    return (
      <div className="text-center py-20">
        <p className="text-green-400 text-2xl font-bold uppercase">
          Message sent! I'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-12">
        <h1 className="font-inter font-bold text-[clamp(4rem,10vw,5.5rem)] leading-none tracking-tight text-[#0d0d0d]">
          Let's Talk{" "}
        </h1>
        <p className="text-sm font-inter text-gray-500 leading-relaxed pt-1">
          Every project I deliver is a reflection of my commitment to quality,
          designed to inspire and drive success.
        </p>
      </div>
    </main>
  );
}
