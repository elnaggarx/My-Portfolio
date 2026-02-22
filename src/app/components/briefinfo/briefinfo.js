import Image from "next/image"
import personalImage from "@/app/assets/images/personalimage1.jpeg"
const Briefinfo = () => {
  return (
    <div className="px-8 py-16">
      <Image src={personalImage} className="w-full h-screen object-cover rounded-4xl" alt="Personal Image" />
      <div className="flex justify-between mt-16 gap-10">
        <div className="flex-1 border-b border-black pb-16">
            <h2 className="text-3xl font-[bomstad-regular] mr-10">Driving measurable growth and engagement through thoughtful design and engineering.</h2>
        </div>
        <div className="flex-1 border-b border-black pb-16">
                <p className="text-xl font-[bomstad-regular]">Every product I build starts with understanding user goals and translating them into intuitive, high-performance experiences. From concept to launch, I focus on meaningful results—boosting user engagement, retention, and overall business impact.</p>
        </div>

      </div>
      <div className="flex justify-between gap-10 mt-8">
        <div className="flex flex-1 flex-col items-start">
            <p className="text-lg font-[bomstad-light]">Years of experience</p>
            <h2 className="text-7xl mt-5 font-[bomstad-semibold]">5+</h2>
        </div>
        <div className="flex flex-1 flex-col items-start">
            <p className="text-lg font-[bomstad-light]">Projects completed</p>
            <h2 className="text-7xl mt-5 font-[bomstad-semibold]">50+</h2>
        </div>
      </div>
    </div>
  )
}

export default Briefinfo
