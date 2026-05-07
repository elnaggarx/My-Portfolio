import React, { forwardRef } from 'react'

const TechCard = forwardRef(({ tech, index, progressBarRef }, ref) => {
  return (
    <div 
      ref={ref}
      className="group relative"
    >
      <div className="bg-white rounded-2xl p-5 md:p-8 shadow-xl hover:shadow-2xl hover:shadow-[#0f1a22]/20 transition-all duration-700 ease-out border border-gray-100/50 hover:border-[#0f1a22]/30 cursor-pointer relative overflow-hidden backdrop-blur-sm">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-[#0f1a22]/5 via-transparent to-[#6e6e73]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
        
        {/* Floating particles effect */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-[#0f1a22]/20 rounded-full group-hover:animate-ping"></div>
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-[#6e6e73]/30 rounded-full group-hover:animate-pulse"></div>
        
        <div className="relative z-10">
          {/* Header with index and proficiency badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#6e6e73] font-[bomstad-regular] text-sm group-hover:text-[#0f1a22] transition-colors duration-300">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#0f1a22] to-[#6e6e73] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-xs font-bold">{tech.proficiency}%</span>
            </div>
          </div>
          
          {/* Tech name */}
          <h4 className="font-[bomstad-semibold] text-lg md:text-xl text-[#0f1a22] mb-3 group-hover:text-[#0f1a22] transition-all duration-300">
            {tech.name}
          </h4>

          {/* Description */}
          <p className="text-[#6e6e73] font-[bomstad-regular] text-sm md:text-base leading-relaxed mb-5 md:mb-6 group-hover:text-[#404040] transition-colors duration-300">
            {tech.description}
          </p>

          {/* Skill Matrix */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-[bomstad-regular] text-[#6e6e73] uppercase tracking-wider">
                Proficiency
              </span>
              <span className="text-xs font-[bomstad-semibold] text-[#0f1a22] px-2 py-1 bg-[#0f1a22]/10 rounded-full">
                {tech.level}
              </span>
            </div>
            
            <div className="relative">
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="bg-linear-to-r from-[#0f1a22] via-[#6e6e73] to-[#0f1a22] h-3 rounded-full shadow-sm transition-all duration-1000 ease-out"
                  style={{ width: `${tech.proficiency}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-[#6e6e73] font-[bomstad-regular] mt-2">
                <span>Beginner</span>
                <span className="font-[bomstad-semibold] text-[#0f1a22]">{tech.proficiency}%</span>
                <span>Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

TechCard.displayName = 'TechCard'

export default TechCard
