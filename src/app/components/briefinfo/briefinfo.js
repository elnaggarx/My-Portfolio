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
    <div ref={containerRef} className="px-8 pt-16">
      <Image src={personalImage} className="w-full h-screen object-cover rounded-4xl" alt="Personal Image" />
      <div className="flex justify-between mt-16 gap-10">
        <div className="flex-1 border-b border-black pb-16">
          <h2 className="text-3xl font-[bomstad-regular] mr-10">Driving measurable growth and engagement through thoughtful design and engineering.</h2>
        </div>
        <div className="flex-1 border-b border-black pb-16">
          <p className="text-xl font-[bomstad-regular]">Every product I build starts with understanding user goals and translating them into intuitive, high-performance experiences. From concept to launch, I focus on meaningful results—boosting user engagement, retention, and overall business impact.</p>
        </div>
      </div>
      <div className="flex justify-between gap-10 mt-8">
        <div className="flex flex-1 flex-col items-start">
          <p className="text-lg font-[bomstad-light]">Years of experience</p>
          <h2 ref={yearsRef} className="text-7xl mt-5 font-[bomstad-semibold]">3+</h2>
        </div>
        <div className="flex flex-1 flex-col items-start">
          <p className="text-lg font-[bomstad-light]">Projects completed</p>
          <h2 ref={projectsRef} className="text-7xl mt-5 font-[bomstad-semibold]">5+</h2>
        </div>
      </div>
    </div>
  )
}

export default Briefinfo
