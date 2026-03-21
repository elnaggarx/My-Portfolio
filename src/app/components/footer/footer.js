import React from 'react'

const Footer = () => {
  function getYear(){
    return new Date().getFullYear()
  }
  return (
    <div className='bg-[#0f1a22] w-full  p-8 mt-30 rounded-tl-4xl rounded-tr-4xl'>
      <div className='flex justify-between items-center gap-25'>
        <div>
            <h1 className='text-8xl font-[bomstad-regular] text-[#6e6e73] uppercase'>Elnaggar</h1>
        </div>
        <div className='flex justify-between items-center flex-1'>
            <div>
                <p className='text-white text-2xl font-[bomstad-regular]'>© Elnaggar - {getYear()}</p>
            </div>
            <div className='flex flex-col gap-3 mt-10'>
                <p className='text-white text-xl font-[bomstad-light]'>Home</p>
                <p className='text-white text-xl font-[bomstad-light]'>About</p>
                <p className='text-white text-xl font-[bomstad-light]'>Projects</p>
                <p className='text-white text-xl font-[bomstad-light]'>Contact</p>
            </div>
            <div className='flex flex-col gap-3 mt-10'>
                <p className='text-white text-xl font-[bomstad-light]'>Linkedin</p>
                <p className='text-white text-xl font-[bomstad-light]'>Github</p>
                <p className='text-white text-xl font-[bomstad-light]'>Instagram</p>
                <p className='text-white text-xl font-[bomstad-light]'>X</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
