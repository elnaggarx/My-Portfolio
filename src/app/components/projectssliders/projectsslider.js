"use client";
import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { projects } from "../../data/projects";
import Image from "next/image";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const ProjectsSlider = () => {
  const totalProjects = projects.length;

  const containerRef = useRef();
  const spotlightRef = useRef();
  const imagesContainerRef = useRef();
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const imagesRef = [image1Ref, image2Ref, image3Ref];
  const namesContainerRef = useRef();
  const name1Ref = useRef();
  const name2Ref = useRef();
  const name3Ref = useRef();
  const namesRef = [name1Ref, name2Ref, name3Ref];

  useGSAP(
    () => {
      const spotlightHeight = spotlightRef.current.offsetHeight;
      const spotlightPadding = parseFloat(
        getComputedStyle(spotlightRef.current).padding,
      );

      const namesContainerHeight = namesContainerRef.current.offsetHeight;
      const imagesContainerHeight = imagesContainerRef.current.offsetHeight;

      const moveDistanceNames =
        spotlightHeight - 2 * spotlightPadding - namesContainerHeight;
      const moveDistanceImages = window.innerHeight - imagesContainerHeight;

      const imageActivationPoint = window.innerHeight / 2;

      ScrollTrigger.create({
        trigger: spotlightRef.current,
        start: "top top",
        end: `+=${window.innerHeight * 3}px`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentProjectIndex = Math.min(
            Math.floor(progress * totalProjects) + 1,
            totalProjects,
          );

          gsap.set(imagesContainerRef.current, {
            y: moveDistanceImages * progress,
          });

          imagesRef.forEach((imageRef, index) => {
            const start = index / totalProjects;
            const end = (index + 1) / totalProjects;

            const isActive = progress >= start && progress < end;

            gsap.set(imageRef.current, {
              opacity: isActive ? 1 : 0.3,
            });
          });

          namesRef.forEach((nameRef, index) => {
            const start = index / totalProjects;
            const end = (index + 1) / totalProjects;

            const localProgress = (progress - start) / (end - start);
            const clamped = Math.max(0, Math.min(1, localProgress));

            gsap.set(nameRef.current, {
              y: -moveDistanceNames * clamped,
              opacity: clamped > 0 && clamped < 1 ? 1 : 0.3,
            });
          });
        },
      });
    }
  );

  return (
    <div className="bg-[#1f1f1f]" ref={containerRef}>
      <section className="w-full h-screen flex items-center justify-center overflow-hidden  px-8">
        <p className="text-7xl text-center  font-[bomstad-light] text-white">
          Every glimpse you take from now will make you value aesthetics
        </p>
      </section>
      <section
        className="w-full h-screen px-8 overflow-hidden relative box-border"
        ref={spotlightRef}
      >
        <div
          className="absolute top-0 left-0 w-[45%] py-[50svh] flex flex-col px-8 gap-5 z-1"
          ref={imagesContainerRef}
        >
          {projects.map((project, index) => {
            switch (index) {
              case 0:
                return (
                  <div
                    ref={image1Ref}
                    className="w-full aspect-[16/9] opacity-[50%] transition-all ease-in-out duration-300 overflow-hidden will-change-transform rounded-2xl"
                  >
                    {" "}
                    <Image
                      alt="project"
                      className="w-full h-full object-cover"
                      key={project.id}
                      src={project.image}
                    ></Image>
                  </div>
                );
              case 1:
                return (
                  <div
                    ref={image2Ref}
                    className="w-full aspect-[16/9] opacity-[50%] transition-all ease-in-out duration-300 overflow-hidden will-change-transform rounded-2xl"
                  >
                    {" "}
                    <Image
                      alt="project"
                      className="w-full h-full object-cover"
                      key={project.id}
                      src={project.image}
                    ></Image>
                  </div>
                );
              case 2:
                return (
                  <div
                    ref={image3Ref}
                    className="w-full aspect-[16/9] opacity-[50%] transition-all ease-in-out duration-300 overflow-hidden will-change-transform     rounded-2xl"
                  >
                    {" "}
                    <Image
                      alt="project"
                      className="w-full h-full object-cover"
                      key={project.id}
                      src={project.image}
                    ></Image>
                  </div>
                );
            }
          })}
        </div>
        <div
          className="absolute flex flex-col items-end  right-2 bottom-2 pt-20 pr-8"
          ref={namesContainerRef}
        >
          {projects.map((project, index) => {
            switch (index) {
              case 0:
                return (
                  <p
                    className="text-5xl font-[montreal-regular] opacity-[50%] text-white z-10 will-change-transform"
                    ref={name1Ref}
                    key={project.id}
                  >
                    {project.name}
                  </p>
                );
              case 1:
                return (
                  <p
                    className="text-5xl font-[montreal-regular] opacity-[50%] text-white z-10 will-change-transform"
                    ref={name2Ref}
                    key={project.id}
                  >
                    {project.name}
                  </p>
                );
              case 2:
                return (
                  <p
                    className="text-5xl font-[montreal-regular] opacity-[50%] text-white z-10 will-change-transform"
                    ref={name3Ref}
                    key={project.id}
                  >
                    {project.name}
                  </p>
                );
            }
          })}
        </div>
      </section>
      <section className="w-full h-screen flex items-center justify-center flex-col px-8 overflow-hidden">
        <p className="text-7xl text-center  font-[bomstad-light] text-white">
          This is just a brief from what is upcoming
        </p>
        <p className="text-2xl text-center font-[montreal-light] text-white mt-8 text-[#6e6e73]">
          I have been working on some projects that I am really excited about,
          and I can’t wait to share them with you. These projects are a
          reflection of my passion for design and development, and they showcase
          my skills in creating visually stunning and highly functional
          products. Stay tuned for more updates, as I will be sharing more
          details about these projects in the near future.
        </p>
      </section>
      <h1>Projects Slider</h1>
    </div>
  );
};

export default ProjectsSlider;
