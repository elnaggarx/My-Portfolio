import Image from 'next/image'
import React from 'react'
import personalImage from "@/app/assets/images/personalimage2.jpg"
const AboutMe = () => {
  return (
    <div className='mt-32 px-8 flex justify-between items-start w-full gap-16'>
      <div className='flex-1 w-[50%]'>
        <p className='font-sans text-[#6e6e73] text-xl leading-9 '>
            I build high-performance digital systems that don’t just function—they stand out.

            My work spans full-stack development, advanced front-end engineering, game development with Unity, and AI-driven solutions. I focus on creating products that are fast, scalable, and visually exceptional—whether that’s an interactively animated web experience, a robust backend system, or a real-time application.

            

        </p>
        <p className='font-sans text-[#6e6e73] text-xl leading-9 mt-7'>
            I don’t approach development as just writing code. I engineer complete experiences. From low-level logic to polished UI, every layer is built with intention—performance, precision, and impact.

            I’m particularly driven by complexity. Real-time systems, computer vision, AI integration, and interactive environments are where I operate best. I enjoy pushing beyond standard solutions and building things that most developers avoid.
        </p>
        <p className='font-sans text-[#6e6e73] text-xl leading-9 mt-7'>
            
            The goal is never just to “build something that works.”
            The goal is to build something sharp, efficient, and impossible to ignore.
        </p>
      </div>
      <div className='flex-1 w-[50%]'>
        <Image src={personalImage} className='h-[100vh] object-cover rounded-2xl w-full' alt="Personal Image" />
      </div>
    </div>
  )
}

export default AboutMe
