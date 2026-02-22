
const Services = () => {
  return (
    <div className="mt-32 px-8 flex flex-col justify-between items-center w-full">
      <div className="flex-1 pr-20">
        <p className="uppercase font-[bomstad-regular]">What I can do for you</p>
        <h2 className="text-4xl font-[bomstad-regular] mt-5">I craft intuitive digital products: websites and mobile apps ,that connect brands with their audiences through thoughtful design and solid engineering.</h2>
      </div>
      <div className="flex-1 w-full mt-10">
        <h2 className="font-[bomstad-semibold] text-lg uppercase">Services</h2>
        
        <ul className="text-3xl font-[bomstad-semibold] flex flex-col w-full h-screen justify-between">
        <hr className="mt-2 border-[#6e6e73]"></hr>
            <li><span className="mr-5 text-[#6e6e73]">01/</span>Front-End Web Development</li>
                    <hr className=" border-[#6e6e73]"></hr>

            <li><span className="mr-5 text-[#6e6e73]">02/</span>Mobile App Development</li>
                    <hr className=" border-[#6e6e73]"></hr>

            <li><span className="mr-5 text-[#6e6e73]">03/</span>UI Development from Figma</li>
                    <hr className=" border-[#6e6e73]"></hr>

            <li><span className="mr-5 text-[#6e6e73]">04/</span>Product Development & Launch</li>  
                    <hr className=" border-[#6e6e73]"></hr>

        </ul>
      </div>
    </div>
  )
}
export default Services;
