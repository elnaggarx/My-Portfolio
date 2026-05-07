"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Briefinfo from "./components/briefinfo/briefinfo";
import Hero from "./components/hero/hero";
import Valueslider from "./components/hero/valueslider";
import Leaningmarquee from "./components/leaningmarque/leaningmarquee";
import Recentwork from "./components/recentwork/recentwork";
import Services from "./components/services/services";
import Summarycard from "./components/summarycard/summarycard";
import Footer from "./components/footer/footer";
import Logo from "./components/logo/Logo";


gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Home() {
  const containerRef = useRef();
  const pathRef = useRef();
  const svgTriggerRef = useRef();
  const quoteRef = useRef();
  const quoteTriggerRef = useRef();
  const quoteTriggerContainerRef = useRef();

  useGSAP(
    () => {
      ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
      });
      gsap.set(pathRef.current, {
        strokeDasharray: pathRef.current.getTotalLength(),
      });
      gsap.fromTo(
        pathRef.current,
        {
          strokeDashoffset: pathRef.current.getTotalLength(),
        },
        {
          strokeDashoffset: 0,
          duration: 10,
          ease: "none",
          scrollTrigger: {
            trigger: svgTriggerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
          },
        },
      );

      gsap.set(quoteRef.current, { opacity: 0 });
      ScrollTrigger.create({
        trigger: quoteTriggerRef.current,
        start: "top top",
        end: "bottom 20%",
        onEnter: () => gsap.to(quoteRef.current, { opacity: 1, duration: 1 }),
        onLeaveBack: () =>
          gsap.to(quoteRef.current, { opacity: 0, duration: 1 }),
      });
    gsap.fromTo(
      quoteTriggerRef.current,
      { clipPath: "inset(0 6% 0 6% round 1.5rem)" },
      {
        clipPath: "inset(0 0% 0 0% round 1.5rem)",
        ease: "none",
        scrollTrigger: {
          trigger: quoteTriggerContainerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      })
    },
    {
      scope: containerRef,
    },
  );

  return (
    <div ref={containerRef} id="smooth-wrapper">
      <div id="smooth-content">
        <Hero></Hero>

        <Valueslider></Valueslider>
        <Summarycard></Summarycard>
        <Services></Services>
        <div ref={quoteTriggerContainerRef} className="flex justify-center items-center w-full">
          <div
            ref={quoteTriggerRef}
            className="h-screen bg-[#202020] box-border p-6 md:p-8 m-0 w-full  flex items-center justify-center relative' mt-20 md:mt-32 rounded-3xl md:rounded-4xl "
          >
            <h1
              ref={quoteRef}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center  font-[bomstad-light] text-white"
            >
              Obsession dilevers idealism.
            </h1>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Recentwork></Recentwork>
          <Briefinfo></Briefinfo>
          <div
            ref={svgTriggerRef}
            className="absolute h-full w-full top-0 left-0"
          >
            <svg
              className="w-full h-[83%] opacity-90"
              width="1440"
              height="2896"
              viewBox="0 0 1440 2896"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={pathRef}
                d="M41.848 0C41.848 0 -52.3101 255.636 41.848 382.636C126.274 496.509 251.34 498.641 397.128 554.215C612.321 636.245 831.33 645.889 978.165 696.944C1033.69 716.251 1194.39 751.268 1089.54 820.801C943.982 925.609 1135.26 1182.62 861.958 1342.77C724.392 1423.38 588.004 1378.46 458.863 1468.29C306.559 1574.23 238.125 1679.98 226.448 1845.36C217.331 1974.49 257.18 2050.81 329.34 2165.23C499.013 2434.28 764.857 2578.35 1128.27 2565.58C1234.6 2561.85 1328.48 2588.88 1395.18 2519.53C1471.1 2440.58 1446.06 2328.28 1354.02 2262.41C1237.3 2178.87 1094.75 2275.91 978.165 2359.59C866.825 2439.5 901.428 2545.23 807.485 2639.48C608.263 2839.35 379.237 2917.44 69.6894 2891.03"
                stroke="#0f1a22"
                strokeWidth={20}
              />
            </svg>
          </div>
        </div>
        <Leaningmarquee></Leaningmarquee>
        <Footer />
      </div>
    </div>
  );
}
