"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Services = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Eyebrow label fades in
    gsap.from(".srv-eyebrow", {
      y: 12,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".srv-eyebrow",
        start: "top 88%",
        once: true,
      },
    });

    // Heading slides up after the eyebrow
    gsap.from(".srv-heading", {
      y: 35,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      delay: 0.15,
      scrollTrigger: {
        trigger: ".srv-eyebrow",
        start: "top 88%",
        once: true,
      },
    });

    // "Services" section label
    gsap.from(".srv-label", {
      y: 12,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".srv-list",
        start: "top 85%",
        once: true,
      },
    });

    // Dividers reveal from left
    gsap.from(".srv-divider", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".srv-list",
        start: "top 85%",
        once: true,
      },
    });

    // Service items stagger up
    gsap.from(".srv-item", {
      y: 28,
      opacity: 0,
      duration: 0.65,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".srv-list",
        start: "top 85%",
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="mt-20 md:mt-32 px-4 md:px-8 w-full">

      <div className="mb-12 md:mb-20">
        <p className="srv-eyebrow text-[10px] md:text-xs font-[bomstad-semibold] uppercase tracking-[0.18em] text-[#6e6e73] pt-1.5 shrink-0">
          What I can do for you
        </p>
        <h2 className="srv-heading flex-1 text-2xl md:text-4xl lg:text-5xl mt-5 md:mt-8 font-[bomstad-light] leading-tight md:leading-[1.2] text-[#0a1f22]">
          I craft intuitive digital products — websites and mobile apps that connect brands with their audiences through thoughtful design and solid engineering.
        </h2>
      </div>

      <div className="w-full">
        <p className="srv-label text-xs font-[bomstad-semibold] uppercase tracking-[0.18em] text-[#6e6e73] mb-4">
          Services
        </p>

        <ul className="srv-list flex flex-col w-full">
          <hr className="srv-divider border-[#6e6e73]/30" />

          <li className="srv-item group relative overflow-hidden p-4 md:p-8 flex items-center gap-4 md:gap-8 cursor-default rounded-lg" >
            <div className="absolute inset-0 bg-[#0f1a22] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />
            <span className="relative z-10 font-[montreal-regular] text-xs md:text-sm text-[#6e6e73] w-6 md:w-8 shrink-0 transition-colors duration-300 group-hover:text-white/40">01/</span>
            <span className="relative z-10 text-lg md:text-2xl lg:text-3xl font-[bomstad-regular] text-[#0a1f22] transition-colors duration-300 group-hover:text-white">Front-End Web Development</span>
          </li>
          <hr className="srv-divider border-[#6e6e73]/30" />

          <li className="srv-item group relative overflow-hidden p-4 md:p-8 flex items-center gap-4 md:gap-8 cursor-default rounded-lg">
            <div className="absolute inset-0 bg-[#0f1a22] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />
            <span className="relative z-10 font-[montreal-regular] text-xs md:text-sm text-[#6e6e73] w-6 md:w-8 shrink-0 transition-colors duration-300 group-hover:text-white/40">02/</span>
            <span className="relative z-10 text-lg md:text-2xl lg:text-3xl font-[bomstad-regular] text-[#0a1f22] transition-colors duration-300 group-hover:text-white">Mobile App Development</span>
          </li>
          <hr className="srv-divider border-[#6e6e73]/30" />

          <li className="srv-item group relative overflow-hidden p-4 md:p-8 flex items-center gap-4 md:gap-8 cursor-default rounded-lg">
            <div className="absolute inset-0 bg-[#0f1a22] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />
            <span className="relative z-10 font-[montreal-regular] text-xs md:text-sm text-[#6e6e73] w-6 md:w-8 shrink-0 transition-colors duration-300 group-hover:text-white/40">03/</span>
            <span className="relative z-10 text-lg md:text-2xl lg:text-3xl font-[bomstad-regular] text-[#0a1f22] transition-colors duration-300 group-hover:text-white">UI Development from Figma</span>
          </li>
          <hr className="srv-divider border-[#6e6e73]/30" />

          <li className="srv-item group relative overflow-hidden p-4 md:p-8 flex items-center gap-4 md:gap-8 cursor-default rounded-lg">
            <div className="absolute inset-0 bg-[#0f1a22] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />
            <span className="relative z-10 font-[montreal-regular] text-xs md:text-sm text-[#6e6e73] w-6 md:w-8 shrink-0 transition-colors duration-300 group-hover:text-white/40">04/</span>
            <span className="relative z-10 text-lg md:text-2xl lg:text-3xl font-[bomstad-regular] text-[#0a1f22] transition-colors duration-300 group-hover:text-white">Product Development & Launch</span>
          </li>
          <hr className="srv-divider border-[#6e6e73]/30" />
        </ul>
      </div>

    </div>
  );
};

export default Services;
