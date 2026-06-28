"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import webDesign from "../assets/web-design.png";
import webDev from "../assets/code.png";
import uiUX from "../assets/uiux.png";
import conversion from "../assets/conversion.png";

const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Premium, editorial-grade designs that match the quality of your brand.",
    image: webDesign,
  },
  {
    number: "02",
    title: "Web Development",
    description: "Fast, clean, production-ready builds.",
    image: webDev,
  },
  {
    number: "03",
    title: "UI/UX Design",
    description: "Intuitive interfaces that guide visitors toward action.",
    image: uiUX,
  },
  {
    number: "04",
    title: "Conversion Optimisation",
    description: "Strategic layout and interaction design.",
    image: conversion,
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const thumbnailRef = useRef(null);
  const sliderRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(true);

  const [modal, setModal] = useState({
    active: false,
    index: 0,
  });

  const thumbnailWidth = 250;
  const thumbnailHeight = 340;

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();

    window.addEventListener("resize", checkDesktop);

    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Mouse follow
  useGSAP(
    () => {
      if (
        !isDesktop ||
        !thumbnailRef.current ||
        !sliderRef.current ||
        !containerRef.current
      )
        return;

      gsap.set(thumbnailRef.current, {
        scale: 0,
        xPercent: -50,
        yPercent: -50,
        force3D: true,
      });

      gsap.set(sliderRef.current, { y: 0 });

      const xTo = gsap.quickTo(thumbnailRef.current, "x", {
        duration: 0.5,
        ease: "power3.out",
      });

      const yTo = gsap.quickTo(thumbnailRef.current, "y", {
        duration: 0.5,
        ease: "power3.out",
      });

      let hasPosition = false;

      const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();

        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        if (!hasPosition) {
          gsap.set(thumbnailRef.current, {
            x: relX,
            y: relY,
          });

          hasPosition = true;
        } else {
          xTo(relX);
          yTo(relY);
        }
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { dependencies: [isDesktop] },
  );

  // Open / close + slider animation
  useGSAP(
    () => {
      if (!isDesktop || !thumbnailRef.current || !sliderRef.current) return;

      if (modal.active) {
        gsap.to(thumbnailRef.current, {
          scale: 1,
          opacity: 1,
          visibility: "visible",
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(sliderRef.current, {
          y: -modal.index * thumbnailHeight,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      } else {
        gsap.to(thumbnailRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          overwrite: "auto",

          onComplete: () => {
            gsap.set(thumbnailRef.current, {
              visibility: "hidden",
            });
          },
        });
      }
    },
    {
      dependencies: [modal.active, modal.index, isDesktop],
    },
  );

  return (
    <section
      ref={containerRef}
      onMouseLeave={() =>
        setModal({
          active: false,
          index: 0,
        })
      }
      className="relative w-full px-4 sm:px-6 lg:px-8 py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <p className="font-inter text-sm tracking-[0.2em] uppercase text-[rgb(255,52,25)] mb-3">
            What I Do
          </p>

          <h2 className="font-clash font-medium text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-[#66666e]">
            Services
          </h2>
        </div>

        {/* Rows */}
        <div className="flex flex-col mt-10">
          {services.map((s, index) => (
            <div
              key={s.number}
              onMouseEnter={() =>
                setModal({
                  active: true,
                  index,
                })
              }
              className="
                group
                relative
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                border-b
                border-gray-200
                py-7
                sm:py-8
                gap-2
                sm:gap-0
                hover:border-[rgb(255,52,25)]
                transition-colors
                duration-300
              "
            >
              <span className="font-inter text-xs tracking-widest text-gray-300 sm:w-12 shrink-0">
                {s.number}
              </span>

              <h3
                className="
                font-instru
                font-bold
                text-[clamp(1.6rem,4vw,2.8rem)]
                leading-tight
                text-black
                group-hover:translate-x-2
                transition-transform
                duration-300
                flex-1
              "
              >
                {s.title}
              </h3>

              <p
                className="
                font-inter
                text-sm
                text-gray-400
                sm:max-w-xs
                sm:text-right
                sm:opacity-0
                sm:group-hover:opacity-100
                transition-opacity
                duration-300
                leading-relaxed
              "
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Preview */}
      <div
        ref={thumbnailRef}
        className="
          absolute
          top-0
          left-0
          z-50
          overflow-hidden
          rounded-2xl
          shadow-2xl
          pointer-events-none
        "
        style={{
          width: thumbnailWidth,
          height: thumbnailHeight,
          opacity: 0,
          visibility: "hidden",
        }}
      >
        <div
          ref={sliderRef}
          className="relative w-full"
          style={{
            height: thumbnailHeight * services.length,
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="absolute left-0 w-full flex items-center justify-center overflow-hidden"
              style={{
                top: index * thumbnailHeight,
                width: thumbnailWidth,
                height: thumbnailHeight,
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
