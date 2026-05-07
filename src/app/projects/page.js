"use client";
import React from "react";
import ProjectsSlider from "../components/projectssliders/projectsslider";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Leaningmarquee from "../components/leaningmarque/leaningmarquee";
import Footer from "../components/footer/footer";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
const Projects = () => {
  const containerRef = useRef();
  useGSAP(
    () => {
      ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
      });
    },
    {
      scope: containerRef,
    },
  );
  return (
    <div ref={containerRef} id="smooth-wrapper">
      <div id="smooth-content">
        <div>
          <div className="flex items-center px-4 md:px-8 w-full min-h-screen pt-24 md:pt-0">
            <div>
              <h1 className="font-[bomstad-light] text-5xl md:text-6xl lg:text-7xl text-[#0a1f22]">
                Projects
              </h1>
              <p className="font-[montreal-light] text-base md:text-xl lg:text-2xl mt-5 md:mt-7 max-w-full md:max-w-[80%] lg:max-w-[70%] text-[#6e6e73]">
                Here are some of the projects I’ve worked on. I’m always looking
                for new opportunities to collaborate and create something
                amazing. If you have a project in mind, feel free to reach out!
              </p>
            </div>
          </div>
          <ProjectsSlider />
        </div>
        <Leaningmarquee></Leaningmarquee>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Projects;
