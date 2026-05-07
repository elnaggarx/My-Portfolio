"use client"
import Image from "next/image"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import personalImage from "@/app/assets/images/personalimage1.jpeg"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Briefinfo = () => {
  const containerRef = useRef()
  const yearsRef = useRef()
  const projectsRef = useRef()

  useGSAP(() => {
    const animateCounter = (el, target) => {
      const obj = { val: 0 }
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => { el.textContent = Math.round(obj.val) + "+" },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      })
    }

    animateCounter(yearsRef.current, 3)
    animateCounter(projectsRef.current, 5)
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="px-4 md:px-8 pt-12 md:pt-16">
      <Image src={personalImage} className="w-full h-[60vh] md:h-screen object-cover rounded-3xl md:rounded-4xl" alt="Personal Image" />
      <div className="flex flex-col md:flex-row justify-between mt-10 md:mt-16 gap-6 md:gap-10">
        <div className="flex-1 border-b border-black pb-8 md:pb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-[bomstad-regular] md:mr-10">Driving measurable growth and engagement through thoughtful design and engineering.</h2>
        </div>
        <div className="flex-1 border-b border-black pb-8 md:pb-16">
          <p className="text-base md:text-lg lg:text-xl font-[bomstad-regular]">Every product I build starts with understanding user goals and translating them into intuitive, high-performance experiences. From concept to launch, I focus on meaningful results—boosting user engagement, retention, and overall business impact.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 mt-6 md:mt-8">
        <div className="flex flex-1 flex-col items-start">
          <p className="text-sm md:text-lg font-[bomstad-light]">Years of experience</p>
          <h2 ref={yearsRef} className="text-5xl md:text-6xl lg:text-7xl mt-3 md:mt-5 font-[bomstad-semibold]">3+</h2>
        </div>
        <div className="flex flex-1 flex-col items-start">
          <p className="text-sm md:text-lg font-[bomstad-light]">Projects completed</p>
          <h2 ref={projectsRef} className="text-5xl md:text-6xl lg:text-7xl mt-3 md:mt-5 font-[bomstad-semibold]">5+</h2>
        </div>
      </div>
    </div>
  )
}

export default Briefinfo
