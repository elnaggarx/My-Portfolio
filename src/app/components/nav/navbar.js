import Image from "next/image";
import logo from "@/app/assets/images/elnaggar.png";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full box-border px-4 md:px-8 absolute top-0 left-0 z-50">
       <div className="flex items-center">
            {/*<div className="w-20 h-20"><Image src={logo} alt="ElNaggar Logo"></Image></div>
            <p className="text-[#6e6e73] text-xl uppercase font-[bomstad-semibold]">ElNaggar</p>*/}
            <Image src={logo} alt="ElNaggar Logo" className="w-20 h-20 md:w-30 md:h-30"></Image>
       </div>

       <div className="hidden md:block">
        <ul className="flex gap-4 lg:gap-8 items-center text-[#0f1a22] font-[bomstad-semibold] text-sm lg:text-base">
            <Link href="/"><li className="cursor-pointer hover:text-[#6e6e73] transition">Home</li></Link>
            <Link href="/projects"><li className="cursor-pointer hover:text-[#6e6e73] transition">Projects</li></Link>
            <Link href="/about"><li className="cursor-pointer hover:text-[#6e6e73] transition">About</li></Link>
            <Link href="/contact"><li className="cursor-pointer hover:text-[#6e6e73] transition border-2 rounded-sm px-2 py-1 box-border">Say Hello</li></Link>
        </ul>
       </div>

    </div>
  )
}

export default Navbar
