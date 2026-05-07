import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
export default async function  ProjectDetails({ params }) {
    const {slug} = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className=" text-black">
      <div className="px-4 md:px-8 flex flex-col gap-6 md:gap-8 items-start min-h-screen md:min-h-[150vh] justify-center pt-24 md:pt-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-5 md:gap-10">
          <h1 className="font-[bomstad-light] text-5xl md:text-6xl lg:text-7xl text-[#0a1f22]">
            {project.name}
          </h1>
          <p className="font-[montreal-light] text-base md:text-lg lg:text-xl mt-2 md:mt-7 w-full md:w-[60%]  text-[#6e6e73]">
            {project.description}
          </p>
        </div>
        <div className="h-[60vh] md:h-screen w-full">
          <Image
            src={project.image}
            alt={project.name}
            className="w-full h-full mt-4 md:mt-8 rounded-2xl object-cover"
          />
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row md:justify-between md:items-center px-4 md:px-8 mt-10 md:mt-12 gap-8 md:gap-10">
        <div className="flex-1">
          <p className="text-base md:text-lg lg:text-xl font-[montreal-regular] text-[#6e6e73]">
            {" "}
            {project.detailedDescription}
          </p>
          <button className="px-5 py-3 md:py-5 bg-[#0a1f22] text-white rounded-3xl md:rounded-4xl mt-6 md:mt-10 text-base md:text-xl font-[montreal-light]">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <h4 className="text-2xl md:text-4xl lg:text-5xl font-[montreal-regular]">
            Frontend Development
          </h4>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center px-4 md:px-8 gap-5 md:gap-10 mt-10 md:mt-16">
        <Image className="flex-1 h-[40vh] md:h-[70vh] w-full md:w-[47%] rounded-2xl object-cover" src={project.image} alt={project.name} />
        <Image className="flex-1 h-[40vh] md:h-[70vh] w-full md:w-[47%] rounded-2xl object-cover" src={project.image} alt={project.name} />
      </div>
      <div className="flex flex-col md:flex-row px-4 md:px-8 md:justify-between md:items-center mt-10 md:mt-16 gap-4 md:gap-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-[bomstad-regular] flex-1">
            Tech Stack
        </h1>
        <ul className="flex-1 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
                <li className="bg-[#6e6e73] text-white text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 rounded-full" key={tech}>
                    {tech}
                </li>
            ))}
        </ul>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between px-4 md:px-8 md:items-start mt-10 md:mt-16 gap-4 md:gap-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-[bomstad-regular] flex-1">
            My Role
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-[montreal-regular] text-[#6e6e73] w-full md:w-[45%] flex-1">
            {project.myRole}
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between px-4 md:px-8 md:items-start mt-10 md:mt-16 gap-4 md:gap-10 pb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-[bomstad-regular] flex-1">
            Features
        </h1>
        <ul className="text-base md:text-lg lg:text-xl font-[montreal-regular] text-[#6e6e73] w-full md:w-[45%] flex-1 list-disc list-inside">
            {project.featuresBullets.map((feature) => (
                <li key={feature} className="mb-2">
                    {feature}
                </li>
            ))}
        </ul>
      </div>

    </div>
  );
}
