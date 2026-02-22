'use client'
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);
import value1 from "@/app/assets/images/value1.png";
import value2 from "@/app/assets/images/value2.jpg";
import value3 from "@/app/assets/images/value3.png";
import value4 from "@/app/assets/images/value4.png";

const Valueslider = () => {
  const triggerRef = useRef();
  const imgsRef = useRef();
  const containerRef = useRef();

  // Refs for video 1
  const container1Ref = useRef(null)
  const video1Ref = useRef(null)

  // Refs for other items (image only, no video)
  const container2Ref = useRef(null)
  const container3Ref = useRef(null)
  const container4Ref = useRef(null)

  useEffect(() => {
    const v = video1Ref.current
    const el = container1Ref.current
    if (!v || !el) return

    v.muted = true
    v.playsInline = true
    v.loop = true
    try { v.playbackRate = 0.6 } catch (e) {}

    if (typeof IntersectionObserver === 'undefined') {
      try { v.playbackRate = 0.6 } catch (e) {}
      v.play().catch(() => {})
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          try { v.playbackRate = 0.6 } catch (e) {}
          v.play().catch(() => {})
        } else {
          v.pause()
        }
      },
      { threshold: [0.5] }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  useGSAP(() => {
    const images = imgsRef.current;
    gsap.to(images, {
      x: () => -(images.scrollWidth - window.innerWidth),
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 1,
        pin: true,
        start: "top top",
        end: () => `+=${images.scrollWidth}`,}
      })
  },{
    scope: containerRef
  })

  return (
    <div ref={containerRef}>
          <div className='h-screen overflow-hidden bg-[#dedede] flex items-center' ref={triggerRef}>
      <div className="flex gap-8 pl-8 flex-nowrap will-change-transform" ref={imgsRef}>
        {/* Item 1 - Video */}
        <div ref={container1Ref} className={`shrink-0 w-[56%] h-100 rounded-3xl relative group flex justify-center items-center text-white font-[bomstad-semibold] text-4xl overflow-hidden`}>
          <video
            ref={video1Ref}
            src="/videos/value1.mp4"
            poster={value2.src}
            className="w-full h-full object-cover rounded-3xl absolute top-0 left-0 z-0"
            preload="metadata"
            muted
            playsInline
            loop
            aria-hidden="true"
          />
          <div className={`absolute inset-0 rounded-3xl bg-[#0f1a22]/45 transition-opacity duration-200 z-10`} aria-hidden="true" />
          <p className="z-20">Bringing ideas to life.</p>
        </div>

        {/* Item 2 - Image */}
        <div ref={container2Ref} className={`shrink-0 w-[56%] h-100 rounded-3xl relative group flex justify-center items-center text-white font-[bomstad-semibold] text-4xl overflow-hidden`}>
          <Image
            src={value1}
            alt="value"
            className="w-full h-full object-cover rounded-3xl absolute top-0 left-0 z-0"
          />
          <div className={`absolute inset-0 rounded-3xl bg-[#0f1a22]/45 transition-opacity duration-200 z-10`} aria-hidden="true" />
          <p className="z-20">Crafting user-friendly experiences.</p>
        </div>

        {/* Item 3 - Image */}
        <div ref={container3Ref} className={`shrink-0 w-[56%] h-100 rounded-3xl relative group flex justify-center items-center text-white font-[bomstad-semibold] text-4xl overflow-hidden`}>
          <Image
            src={value3}
            alt="value"
            className="w-full h-full object-cover rounded-3xl absolute top-0 left-0 z-0"
          />
          <div className={`absolute inset-0 rounded-3xl bg-[#0f1a22]/45 transition-opacity duration-200 z-10`} aria-hidden="true" />
          <p className="z-20">Building clean, scalable solutions</p>
        </div>

        {/* Item 4 - Image */}
        <div ref={container4Ref} className={`shrink-0 w-[56%] h-100 rounded-3xl relative group flex justify-center items-center text-white font-[bomstad-semibold] text-4xl overflow-hidden`}>
          <Image
            src={value4}
            alt="value"
            className="w-full h-full object-cover rounded-3xl absolute top-0 left-0 z-0"
          />
          <div className={`absolute inset-0 rounded-3xl bg-[#0f1a22]/45 transition-opacity duration-200 z-10`} aria-hidden="true" />
          <p className="z-20">Attention to details</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Valueslider
