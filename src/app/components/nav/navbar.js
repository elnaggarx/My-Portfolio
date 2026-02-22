import Image from "next/image";
import logo from "@/app/assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full box-border px-8 absolute top-0 left-0 z-50">
       <div className="flex items-center">
            <div className="w-20 h-20"><Image src={logo} alt="ElNaggar Logo"></Image></div>
            <p className="text-[#6e6e73] text-xl uppercase font-[bomstad-semibold]">ElNaggar</p>
       </div>

       <div>
        <ul className="flex gap-8 items-center text-[#0f1a22] font-[bomstad-semibold]">
            <li className="cursor-pointer hover:text-[#6e6e73] transition">Projects</li>
            <li className="cursor-pointer hover:text-[#6e6e73] transition">About</li>
            <li className="cursor-pointer hover:text-[#6e6e73] transition">Contact</li>
            <li className="cursor-pointer hover:text-[#6e6e73] transition border-2 rounded-sm px-2 py-1 box-border">Say Hello</li>
        </ul>
       </div>

    </div>
  )
}

export default Navbar
