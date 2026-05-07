import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TechSection from './TechSection'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const TechArsenal = () => {
  const containerRef = useRef()
  const webSectionRef = useRef()
  const gameSectionRef = useRef()
  const aiSectionRef = useRef()
  const webCardsRef = useRef([])
  const gameCardsRef = useRef([])
  const aiCardsRef = useRef([])
  const progressBarsRef = useRef([])

  const webMobileTech = [
    { name: 'ASP.NET Core', description: 'Backend development & APIs', proficiency: 85, level: 'Advanced' },
    { name: 'React', description: 'Modern web interfaces', proficiency: 95, level: 'Expert' },
    { name: 'React Native', description: 'Cross-platform mobile apps', proficiency: 90, level: 'Advanced' },
    { name: 'Next.js', description: 'Full-stack React framework', proficiency: 88, level: 'Advanced' },
    { name: 'Node.js', description: 'Server-side JavaScript', proficiency: 82, level: 'Advanced' },
    { name: 'Express', description: 'Minimalist web framework', proficiency: 80, level: 'Advanced' }
  ];

  const gameTech = [
    { name: 'Unity Game Engine', description: '3D game development', proficiency: 75, level: 'Intermediate' },
    { name: 'C#', description: 'Game scripting & logic', proficiency: 78, level: 'Intermediate' }
  ];

  const aiTech = [
    { name: 'RAG Models', description: 'Retrieval-augmented generation', proficiency: 70, level: 'Intermediate' },
    { name: 'Machine Learning', description: 'AI model development', proficiency: 65, level: 'Intermediate' }
  ];

  useGSAP(() => {
    // Header animation
    gsap.fromTo(".tech-header", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )

    // Web section animation
    const webTl = gsap.timeline({
      scrollTrigger: {
        trigger: webSectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    webTl.fromTo(".section-description", 
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(webCardsRef.current, 
      { y: 100, opacity: 0, scale: 0.8 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "back.out(1.7)"
      }, "-=0.4"
    )

    // Game section animation
    const gameTl = gsap.timeline({
      scrollTrigger: {
        trigger: gameSectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    gameTl.fromTo(gameSectionRef.current?.querySelector(".section-description"), 
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(gameCardsRef.current, 
      { y: 100, opacity: 0, scale: 0.8 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        stagger: 0.15, 
        ease: "back.out(1.7)"
      }, "-=0.4"
    )

    // AI section animation
    const aiTl = gsap.timeline({
      scrollTrigger: {
        trigger: aiSectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    aiTl.fromTo(aiSectionRef.current?.querySelector(".section-description"), 
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(aiCardsRef.current, 
      { y: 100, opacity: 0, scale: 0.8 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        stagger: 0.15, 
        ease: "back.out(1.7)"
      }, "-=0.4"
    )

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="mt-20 md:mt-32 px-4 md:px-8 pb-24 md:pb-44">
      {/* Header */}
      <div className="w-full mb-12 md:mb-20">
        <p className="tech-header font-[bomstad-semibold] text-lg md:text-xl lg:text-2xl text-[#0f1a22] mb-4">Tech Arsenal</p>
        <hr className="border-[#6e6e73]/30 mt-2"></hr>
        <p className="tech-header text-[#6e6e73] font-[bomstad-regular] text-base md:text-lg mt-5 md:mt-6 max-w-2xl">
          A comprehensive showcase of my technical expertise across web development, game creation, and artificial intelligence.
        </p>
      </div>

      {/* Web & Mobile Development Section */}
      <TechSection
        ref={webSectionRef}
        title="Web & Mobile"
        titleAccent="Development"
        description="Building scalable web applications and cross-platform mobile experiences with modern frameworks and robust backend architectures."
        technologies={webMobileTech}
        cardsRef={webCardsRef}
        progressBarsRef={progressBarsRef}
        startIndex={0}
      />

      {/* Game Development Section */}
      <TechSection
        ref={gameSectionRef}
        title="Game"
        titleAccent="Development"
        description="Creating immersive 3D gaming experiences with professional game engines and scripting languages."
        technologies={gameTech}
        cardsRef={gameCardsRef}
        progressBarsRef={progressBarsRef}
        startIndex={6}
      />

      {/* AI & Machine Learning Section */}
      <TechSection
        ref={aiSectionRef}
        title="AI & Machine"
        titleAccent="Learning"
        description="Developing intelligent systems using advanced AI techniques and machine learning models for innovative solutions."
        technologies={aiTech}
        cardsRef={aiCardsRef}
        progressBarsRef={progressBarsRef}
        startIndex={8}
      />
    </div>
  )
}

export default TechArsenal
