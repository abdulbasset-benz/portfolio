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
    <section className="max-w-2xl mx-auto px-6 py-20 bg-black">
      <h1 className="font-inter text-neutral-300 font-bold text-[clamp(1.5rem,2vw,3rem)] capitalize text-center leading-tight">
        Get your free quote in 24 hours
      </h1>
      <p className="text-center font-medium font-inter text-neutral-500 text-[clamp(0.9rem,2vw,1rem)]">Fill the form so we can get an accurate evaluation of your project</p>
      {/* Form fields */}
      <form>
        
      </form>
      
    </section>
  );
}
