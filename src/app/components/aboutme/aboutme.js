import Image from 'next/image'
import React from 'react'
import personalImage from "@/app/assets/images/personalimage2.jpg"
const AboutMe = () => {
  return (
    <div className='mt-20 md:mt-32 px-4 md:px-8 flex flex-col lg:flex-row lg:justify-between items-start w-full gap-10 lg:gap-16'>
      <div className='w-full lg:flex-1 lg:w-[50%]'>
        <p className='font-sans text-[#6e6e73] text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9'>
            I build high-performance digital systems that don’t just function—they stand out.

            My work spans full-stack development, advanced front-end engineering, game development with Unity, and AI-driven solutions. I focus on creating products that are fast, scalable, and visually exceptional—whether that’s an interactively animated web experience, a robust backend system, or a real-time application.



        </p>
        <p className='font-sans text-[#6e6e73] text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 mt-5 md:mt-7'>
            I don’t approach development as just writing code. I engineer complete experiences. From low-level logic to polished UI, every layer is built with intention—performance, precision, and impact.

            I’m particularly driven by complexity. Real-time systems, computer vision, AI integration, and interactive environments are where I operate best. I enjoy pushing beyond standard solutions and building things that most developers avoid.
        </p>
        <p className='font-sans text-[#6e6e73] text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 mt-5 md:mt-7'>

            The goal is never just to “build something that works.”
            The goal is to build something sharp, efficient, and impossible to ignore.
        </p>
      </div>
      <div className='w-full lg:flex-1 lg:w-[50%]'>
        <Image src={personalImage} className='h-[60vh] md:h-[80vh] lg:h-screen object-cover rounded-2xl w-full' alt="Personal Image" />
      </div>
    </div>
  )
}

export default AboutMe
