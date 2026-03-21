"use client";
import { useGSAP } from "@gsap/react";
import {gsap} from "gsap";
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

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Home() {

  const containerRef = useRef();
  const pathRef = useRef();
  const svgTriggerRef = useRef();

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    })
    gsap.set(pathRef.current,{
      strokeDasharray: pathRef.current.getTotalLength(),
    })
    gsap.fromTo(pathRef.current, {
      strokeDashoffset: pathRef.current.getTotalLength(),
    }, {
      strokeDashoffset: 0,
      duration: 10,
      ease: "none",
      scrollTrigger: {
        trigger: svgTriggerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      }
    })
  },{
      scope: containerRef
    })

  return (
    <div ref={containerRef} id="smooth-wrapper">
      <div id="smooth-content">
      <Hero></Hero>

      <Valueslider></Valueslider>
      <Summarycard></Summarycard>
      <Services></Services>
      <h1 className="font-[bomstad-bold] text-8xl mt-32 px-8">Obsession dilevers idealism.</h1>
      <div className="relative h-full w-full">
        <Recentwork></Recentwork>
        <Briefinfo></Briefinfo>
        <div ref={svgTriggerRef} className="absolute h-full w-full top-0 left-0">
          <svg className="w-full h-[83%]" width="1440" height="2896" viewBox="0 0 1440 2896" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path ref={pathRef} d="M41.848 0C41.848 0 -52.3101 255.636 41.848 382.636C126.274 496.509 251.34 498.641 397.128 554.215C612.321 636.245 831.33 645.889 978.165 696.944C1033.69 716.251 1194.39 751.268 1089.54 820.801C943.982 925.609 1135.26 1182.62 861.958 1342.77C724.392 1423.38 588.004 1378.46 458.863 1468.29C306.559 1574.23 238.125 1679.98 226.448 1845.36C217.331 1974.49 257.18 2050.81 329.34 2165.23C499.013 2434.28 764.857 2578.35 1128.27 2565.58C1234.6 2561.85 1328.48 2588.88 1395.18 2519.53C1471.1 2440.58 1446.06 2328.28 1354.02 2262.41C1237.3 2178.87 1094.75 2275.91 978.165 2359.59C866.825 2439.5 901.428 2545.23 807.485 2639.48C608.263 2839.35 379.237 2917.44 69.6894 2891.03" stroke="#0f1a22" strokeWidth={20}/>
          </svg>

        </div>
      </div>
      <Leaningmarquee></Leaningmarquee>
      <Footer />
      </div>
    </div>
  );
}
