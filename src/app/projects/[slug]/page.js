import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
export default async function  ProjectDetails({ params }) {
    const {slug} = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className=" text-black">
      <div className="px-8 flex flex-col gap-8 items-start h-[150vh] justify-center">
        <div className="flex justify-between items-center w-full">
          <h1 className="font-[bomstad-light] text-7xl text-[#0a1f22]">
            {project.name}
          </h1>
          <p className="font-[montreal-light] text-xl mt-7 w-[60%]  text-[#6e6e73]">
            {project.description}
          </p>
        </div>
        <div className="h-screen w-full">
          <Image
            src={project.image}
            alt={project.name}
            className="w-full h-full mt-8 rounded-2xl object-cover"
          />
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center px-8 mt-12">
        <div className="flex-1">
          <p className="text-xl font-[montreal-regular] text-[#6e6e73]">
            {" "}
            {project.detailedDescription}
          </p>
          <button className="px-5 py-5 bg-[#0a1f22] text-white rounded-4xl mt-10 text-xl font-[montreal-light]">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <h4 className="text-5xl font-[montreal-regular]">
            Frontend Development
          </h4>
        </div>
      </div>
      <div className="flex  justify-center items-center px-8 gap-10 mt-16">
        <Image className="flex-1 h-[70vh] w-[47%] rounded-2xl object-cover" src={project.image} alt={project.name} />
        <Image className="flex-1 h-[70vh] w-[47%] rounded-2xl object-cover" src={project.image} alt={project.name} />
      </div>
      <div className="flex px-8 justify-between items-center mt-16">
        <h1 className="text-5xl font-[bomstad-regular] flex-1">
            Tech Stack
        </h1>
        <ul className="flex-1">
            {project.tech.map((tech) => (
                <li className="bg-[#6e6e73] text-white px-4 py-2 rounded-full mr-4 mb-4 inline" key={tech}>
                    {tech}
                </li>
            ))}
        </ul>
      </div>

      <div className="flex justify-between px-8 items-start mt-16">
        <h1 className="text-5xl font-[bomstad-regular] flex-1">
            My Role
        </h1>
        <p className="text-xl font-[montreal-regular] text-[#6e6e73] w-[45%] flex-1">
            {project.myRole}
        </p>
      </div>
      <div className="flex justify-between px-8 items-start mt-16">
        <h1 className="text-5xl font-[bomstad-regular] flex-1">
            Features
        </h1>
        <ul className="text-xl font-[montreal-regular] text-[#6e6e73] w-[45%] flex-1 list-disc list-inside">
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
