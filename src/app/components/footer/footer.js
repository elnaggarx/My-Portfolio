import React from 'react'
import Link from "next/link";
const Footer = () => {
  function getYear(){
    return new Date().getFullYear()
  }
  return (
    <div className='bg-[#0f1a22] w-full p-6 md:p-8 mt-20 md:mt-30 rounded-tl-3xl rounded-tr-3xl md:rounded-tl-4xl md:rounded-tr-4xl'>
      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-25'>
        <div>
            <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[bomstad-regular] text-[#6e6e73] uppercase'>Elnaggar</h1>
        </div>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start lg:items-center flex-1 gap-8 sm:gap-6'>
            <div>
                <p className='text-white text-base md:text-xl lg:text-2xl font-[bomstad-regular]'>© Elnaggar - {getYear()}</p>
            </div>
            <div className='flex flex-col gap-2 md:gap-3 sm:mt-0 lg:mt-10'>
                <Link href="/"><p className='text-white text-base md:text-lg lg:text-xl font-[bomstad-light]'>Home</p></Link>
                <Link href="/about"><p className='text-white text-base md:text-lg lg:text-xl font-[bomstad-light]'>About</p></Link>
                <Link href="/projects"><p className='text-white text-base md:text-lg lg:text-xl font-[bomstad-light]'>Projects</p></Link>
                <Link href="/contact"><p className='text-white text-base md:text-lg lg:text-xl font-[bomstad-light]'>Contact</p></Link>
            </div>
            <div className='flex flex-col gap-2 md:gap-3 sm:mt-0 lg:mt-10'>
                <Link href="https://www.linkedin.com/in/mohamed-elnaggarx?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><p className='text-white text-base md:text-lg lg:text-xl font-[bomstad-light]'>Linkedin</p></Link>
                <Link href="https://github.com/elnaggarx" target="_blank"><p className='text-white text-base md:text-lg lg:text-xl font-[bomstad-light]'>Github</p></Link>
                <Link href="https://www.instagram.com/elnaggarx?igsh=enozdzNqMGNpanF4&utm_source=qr" target="_blank"><p className='text-white text-base md:text-lg lg:text-xl font-[bomstad-light]'>Instagram</p></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
