import Image from "next/image"
import ieee from "@/app/assets/images/ieee.png"
import eossc from "@/app/assets/images/eossc.png"
import ingazo from "@/app/assets/images/ingazo.png"
const Recentwork = () => {
  return (
    <div className="mt-32 px-8 pb-44">
        <div className="w-full">
            <p className="font-[bomstad-semibold] text-xl">Recent Work:</p>
            <hr className="border-[#6e6e73]"></hr>
        </div>
        <div className="w-full overflow-hidden ">
            <div className="grid grid-cols-2 gap-x-10 gap-y-20 mt-15">
                <div>
                    <h4 className="font-[bomstad-regular] text-xl ml-5 mb-2 text-[#6e6e73]">IEEE</h4>
                    <Image alt="project" className="shrink-0 w-full h-[75vh] rounded-4xl shadow-2xl object-cover" src={ieee}></Image>
                </div>
                <div>
                    <h4 className="font-[bomstad-regular] text-xl ml-5 mb-2 text-[#6e6e73]">EOSSC</h4>
                    <Image alt="project" className="shrink-0 w-full h-[75vh] rounded-4xl shadow-2xl object-cover" src={eossc}></Image>
                </div>
                <div>
                    <h4 className="font-[bomstad-regular] text-xl ml-5 mb-2 text-[#6e6e73]">Ingazo</h4>
                    <Image alt="project" className="shrink-0 w-full h-[75vh] rounded-4xl shadow-2xl object-cover" src={ingazo}></Image>
                </div>
                <div>
                    <h4 className="font-[bomstad-regular] text-xl ml-5 mb-2 text-[#6e6e73]">Ingazo</h4>
                    <Image alt="project" className="shrink-0 w-full h-[75vh] rounded-4xl shadow-2xl object-cover" src={ingazo}></Image>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recentwork
