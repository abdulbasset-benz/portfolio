import { Link } from "react-router";
import Message from "../assets/message.svg";

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-sm w-full">
        {/* Illustration */}
        <div id="ty-illustration" className="mx-auto mb-10">
          <img
            src={Message}
            alt="Message sent"
            className="!w-auto !h-auto !object-contain mx-auto max-w-[280px]"
          />
        </div>

        {/* Text */}
        <div id="ty-content">
          <h2 className="font-inter font-extrabold text-[clamp(1.5rem,5vw,1.875rem)] text-[#111] leading-tight mb-3">
            Thank you for reaching
            <br />
            out to us
          </h2>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            We will get back to you within 24 hours,
            <br />
            don't forget to check your inbox.
          </p>
          <Link
            to="/"
            className="font-clash bg-primary py-2 px-6 text-white font-semibold"
          >
            Go back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
