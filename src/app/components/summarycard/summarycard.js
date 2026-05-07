"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Inifinitetext from "./inifinitetext";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Summarycard = () => {
  const containerRef = useRef();
  const cardRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { clipPath: "inset(0 6% 0 6% round 1.5rem)" },
      {
        clipPath: "inset(0 0% 0 0% round 1.5rem)",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="px-4 md:px-8 mt-12 md:mt-16 w-full">
      <div ref={cardRef} className="w-full bg-[#0f1a22] rounded-2xl md:rounded-3xl pt-20 md:pt-32 lg:pt-40 pb-12 md:pb-16 px-6 md:px-10 lg:px-12">
        <p className="text-2xl md:text-3xl lg:text-5xl font-[bomstad-light] leading-snug md:leading-tight lg:leading-12 text-white">
          Many ideas struggle to become real products , whether due to unclear
          design, poor user experience, or technical complexity. I help bridge
          that gap by designing and building clean, user-friendly web and mobile
          applications, guiding your project from concept to launch through
          short-term support or long-term collaboration.
        </p>

        <Inifinitetext></Inifinitetext>

      </div>

    </div>
  );
};

export default Summarycard;
