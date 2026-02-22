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

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Home() {

  const containerRef = useRef();

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1.25,
      effects: true,
      smoothTouch: 0.1,
    })},{
      scope: containerRef
    })

  return (
    <div ref={containerRef} id="smooth-wrapper">
      <div id="smooth-content">
      <Hero></Hero>

      <Valueslider></Valueslider>
      <Summarycard></Summarycard>
      <Services></Services>
      <Recentwork></Recentwork>
      <Briefinfo></Briefinfo>
      <Leaningmarquee></Leaningmarquee>
      </div>
    </div>
  );
}
