import React from "react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "Behance", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#F0EDE6] overflow-hidden">
      {/* Top grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12 pt-14 pb-10">
        {/* Quick Links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-black mb-5">
            Quick Links
          </p>
          <ul className="flex flex-col gap-3">
            {quickLinks.map(({ label, href }) => (
              <li
                key={label}
                href={href}
                className="text-[#666] hover:text-black transition-colors
                text-[15px] font-clash"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-black mb-5">
            Social Links
          </p>
          <ul className="flex flex-col gap-3">
            {socialLinks.map(({ label, href }) => (
              <li
                key={label}
                href={href}
                className="text-[#666] hover:text-black transition-colors
                text-[15px] font-clash"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Image — spans both columns on mobile */}
        <div className="col-span-2 md:col-span-1">
          <div className="w-full aspect-video rounded-lg bg-[#c8b8a2] overflow-hidden">
            {/* Replace with your actual image */}
            <img
              src="/your-footer-image.jpg"
              alt="Featured work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 md:mx-12 border-t border-[#ccc9c0]" />

      {/* Big editorial brand name */}
      <div className="px-6 md:px-10 overflow-hidden">
        <h2 className="font-clash font-black text-[clamp(3rem,10vw,7.5rem)] leading-none tracking-[-0.04em] text-black whitespace-nowrap">
          Abdulbasset-benz
        </h2>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 px-6 md:px-12 pb-8 pt-3">
        <span className="text-xs text-[#999]">
          © 2026 Abdulbasset-benz. All rights reserved.
        </span>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-xs text-[#999] hover:text-black transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-xs text-[#999] hover:text-black transition-colors"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
