import Image from "next/image"
import ieee from "@/app/assets/images/ieee.png"
import eossc from "@/app/assets/images/eossc.png"
import ingazo from "@/app/assets/images/ingazo.png"

const ProjectCard = ({ name, image }) => {
  return (
    <div className="group relative cursor-pointer rounded-4xl overflow-hidden shadow-2xl">
      <Image
        alt={name}
        className="w-full h-[75vh] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        src={image}
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* bottom content row */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-8 flex items-end justify-between">

        {/* staggered name */}
        <div className="overflow-hidden">
          <div className="flex">
            {name.split("").map((letter, i) => (
              <span
                key={i}
                className="font-[bomstad-bold] text-white text-6xl inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                {letter === " " ? " " : letter}
              </span>
            ))}
          </div>
        </div>

        {/* arrow button */}
        <div
          className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out shrink-0"
          style={{ transitionDelay: `${(name.length - 1) * 0.05 + 0.12}s` }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>

      </div>
    </div>
  )
}

const Recentwork = () => {
  return (
    <div className="mt-32 px-8 pb-44">
      <div className="w-full">
        <p className="font-[bomstad-semibold] text-xl">Recent Work:</p>
        <hr className="border-[#6e6e73]" />
      </div>
      <div className="w-full">
        <div className="grid grid-cols-2 gap-x-10 gap-y-20 mt-15">
          <ProjectCard name="IEEE" image={ieee} />
          <ProjectCard name="EOSSC" image={eossc} />
          <ProjectCard name="Ingazo" image={ingazo} />
          <ProjectCard name="Ingazo" image={ingazo} />
        </div>
      </div>
    </div>
  )
}

export default Recentwork
