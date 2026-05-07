"use client";
import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import hero from "@/app/assets/images/hero1.png";
import { ArrowRight } from "@deemlol/next-icons";
import { Codepen } from "@deemlol/next-icons";
import abstracthero from "@/app/assets/images/abstracthero.png";

gsap.registerPlugin(useGSAP, TextPlugin);

const ROLES = [
  "Front-End Developer",
  "React Developer",
  "Mobile App Developer",
  "UI Engineer",
];

const Hero = () => {
  const containerRef = useRef();
  const roleRef = useRef();
  const cursorRef = useRef();
  const nameRef = useRef();
  const ctaRef = useRef();
  const greetingRef = useRef();

  useGSAP(() => {
    gsap.set(roleRef.current, { text: "" });
    gsap.set([nameRef.current, ctaRef.current], { y: 40, opacity: 0 });
    gsap.set(greetingRef.current, { y: 16, opacity: 0 });

    // Cursor blink
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "steps(1)",
    });

    // Cycling typewriter
    const cycleRoles = (startIndex) => {
      let i = startIndex;
      const next = () => {
        const outgoing = ROLES[(i - 1) % ROLES.length];
        const incoming = ROLES[i % ROLES.length];
        gsap.timeline({ onComplete: () => { i++; next(); } })
          .to(roleRef.current, {
            duration: outgoing.length * 0.04,
            text: { value: "", delimiter: "" },
            ease: "none",
          })
          .to(roleRef.current, {
            duration: incoming.length * 0.06,
            text: { value: incoming, delimiter: "" },
            ease: "none",
            delay: 0.25,
          })
          .to({}, { duration: 2.5 });
      };
      next();
    };

    // Entrance sequence
    gsap.timeline({ onComplete: () => setTimeout(() => cycleRoles(1), 1800) })
      .to(greetingRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      })
      .to(roleRef.current, {
        duration: ROLES[0].length * 0.07,
        text: { value: ROLES[0], delimiter: "" },
        ease: "none",
      }, "-=0.1")
      .to(nameRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      }, "-=0.2")
      .to(ctaRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.4");
  }, { scope: containerRef });

  return (
    <>
      <div ref={containerRef} className="px-4 md:px-8 flex flex-col md:flex-row justify-between items-center min-h-screen md:h-screen box-border relative overflow-hidden pt-24 md:pt-0 pb-20 md:pb-0 gap-10 md:gap-0">

        {/* Left column — badge → role → name → tagline → CTA */}
        <div className="flex flex-col w-full md:w-[52%] relative z-10">


          {/* Role typewriter */}
          <div className="flex items-center h-5 mb-5 md:mb-7">
            <p ref={roleRef} className="font-[bomstad-semibold] text-[10px] md:text-xs text-[#6e6e73] uppercase tracking-[0.25em] md:tracking-[0.3em]" />
            <span ref={cursorRef} className="inline-block w-[2px] h-[10px] bg-[#6e6e73] ml-[3px]" />
          </div>

          {/* Name */}
          <h1 ref={nameRef} className="font-[bomstad-light] text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.95] md:leading-[0.92] text-[#0a1f22]">
            Mohamed Amr
          </h1>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 md:gap-6 mt-8 md:mt-10">
            <div className="bg-[#0f1a22] text-white px-5 md:px-6 py-2.5 md:py-2.75 rounded-full flex items-center gap-2 cursor-pointer hover:bg-[#19232b] transition">
              <p className="font-[bomstad-regular] text-sm">View My Work</p>
              <ArrowRight size={16} />
            </div>
            <div className="flex items-center gap-2 text-[#6e6e73] cursor-pointer hover:text-[#0f1a22] transition">
              <Codepen size={16} />
              <p className="font-[bomstad-regular] text-[10px] md:text-xs uppercase tracking-[0.2em]">5+ Live Projects</p>
            </div>
          </div>
        </div>

        {/* Right column — photo with background accent */}
        <div className="w-2/3 sm:w-1/2 md:w-[22%] relative z-10 h-auto md:h-full flex items-center justify-center self-center md:self-auto">
          <div className="absolute bottom-0 right-0 w-[88%]  bg-[#e3e3e3] rounded-t-[2.5rem] -z-10" />
          <Image src={hero} alt="Mohamed Amr" className="w-full relative" />
        </div>

        {/* Abstract bg — constrained to right half, subtle */}
        <Image src={abstracthero} alt="" className="absolute top-0 right-0 w-full h-full object-cover opacity-30 -z-10" />

        {/* Scroll cue — hidden on mobile (no room) */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 z-10">
          <p className="font-[bomstad-semibold] text-[9px] text-[#6e6e73] uppercase tracking-[0.35em]">Scroll</p>
          <div className="w-px h-6 bg-[#6e6e73] opacity-35" />
        </div>
      </div>
    </>
  );
};

export default Hero;
