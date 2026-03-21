"use client"
import React,{useRef} from 'react'
import StickyCards from '../components/stickycards/stickycards'
import { useGSAP } from "@gsap/react";
import {gsap} from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../components/footer/footer';
import AboutMe from '../components/aboutme/aboutme';
import Leaningmarquee from '../components/leaningmarque/leaningmarquee';
import TechArsenal from '../components/techarsenal/techarsenal';


gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
const About = () => {
  const containerRef = useRef();
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    })
  },{
      scope: containerRef
    })
  return (
    <div className='w-full overflow-x-hidden' ref={containerRef} id="smooth-wrapper">
      <div id='smooth-content'>
              <div className='min-h-screen w-full px-8 flex flex-col justify-center'>
        <h1 className="font-[bomstad-light] text-[#0a1f22] text-7xl ">About Me</h1>
        <p className='font-sans text-[#6e6e73] text-lg max-w-[70%] mt-7'>
I design and build high-performance systems across web, backend, game development, and AI.

From visually rich, animated interfaces to scalable backend architectures and real-time applications, I focus on delivering products that are fast, precise, and engineered to stand out.

I don’t settle for average solutions. I build with depth, performance, and intent—turning complex ideas into powerful, production-ready systems.
        </p>
      </div>
      <StickyCards />
      <AboutMe />
      <TechArsenal/>
      <Leaningmarquee/>
      <Footer />
      </div>
    </div>
  )
}

export default About
