import React, { forwardRef } from 'react'
import TechCard from './TechCard'

const TechSection = forwardRef(({ 
  title, 
  titleAccent,
  description, 
  technologies, 
  cardsRef,
  progressBarsRef,
  startIndex = 0
}, ref) => {
  return (
    <div ref={ref} className="mb-20 md:mb-32">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
        {/* Sticky description section */}
        <div className="lg:w-2/5 lg:sticky lg:top-8">
          <div className="section-description">
            <h3 className="font-[bomstad-regular] text-2xl md:text-3xl lg:text-4xl text-[#0f1a22] mb-4 md:mb-6 leading-tight">
              {title}<br/>
              <span className="text-[#6e6e73]">{titleAccent}</span>
            </h3>
            <p className="text-[#6e6e73] font-[bomstad-regular] text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
              {description}
            </p>
            <div className="w-16 h-1 bg-linear-to-r from-[#0f1a22] to-[#6e6e73] rounded-full"></div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="w-full lg:w-3/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {technologies.map((tech, index) => (
              <TechCard
                key={tech.name}
                ref={el => cardsRef.current[index] = el}
                tech={tech}
                index={index}
                progressBarRef={el => progressBarsRef.current[startIndex + index] = el}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

TechSection.displayName = 'TechSection'

export default TechSection
