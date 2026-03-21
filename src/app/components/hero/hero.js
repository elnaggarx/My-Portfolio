"use client";
import Image from "next/image";
import hero from "@/app/assets/images/hero1.png";
import { ArrowRight } from "@deemlol/next-icons";
import { Codepen } from "@deemlol/next-icons";
import abstracthero from "@/app/assets/images/abstracthero.png";


const Hero = () => {

  return (
  <>
    
    <div className="px-8 flex flex-row  justify-between items-center h-screen box-border -z-10 relative">
            
      <div className="flex flex-col gap-6 w-[70%] relative z-10">
        <h3 className="text-2xl font-[bomstad-regular] text-[#0f1a22]">
          Front-End Developer
        </h3>
        <h1 className="font-[bomstad-semibold] text-6xl text-[#0f1a22]">
          Hello! I'm Mohamed Amr, a Front-End Web and Mobile App Developer
        </h1>
        <div className="flex items-center gap-2">
            <Codepen size={32} className="inline-block text-[#6e6e73]" />
          <p className="uppercase text-[#6e6e73] text-lg font-[bomstad-regular]">
            5+ live project developed.
          </p>
        </div>
        <div className="bg-[#0f1a22] w-fit text-white px-4 py-2 rounded-md flex items-center cursor-pointer hover:bg-[#19232b] transition">
          <p className="font-[bomstad-regular] text-lg">View My Work</p>
            <ArrowRight size={20} className="inline-block ml-2" />
        </div>
      </div>

      {<div className="w-[20%] relative z-10">
        <Image src={hero} alt="hero image" className="w-[80%] z-20"></Image>
      </div>}

      <Image src={abstracthero} alt="abstract hero image" className="absolute top-0 left-0 w-full h-auto object-cover opacity-65 -z-10 "></Image>
    </div>
    </>

  
  
  );
};

export default Hero;
