import { InfoCard } from "../InfoCards/page";
import { ScrollIndicator } from "../ScrollIndicator/page";


import Image from "next/image";
import textnext from "@/app/images/textnext.svg"


export function HeaderSection(){

  const username = "김태현"
  return (
    <section className=" pt-[2vh] pb-[2vh] pr-[12vh] pl-[6vh] min-h-[95vh] mb-[5vh]">
      <div className="mt-[30vh] flex flex-row gap-[4vh]">
        <div className="w-[70%]">
          <p className="text-[#000000] text-[4vh] font-[600]">반갑습니다 {username}님</p>
          <h1 className="text-[12vh] font-bold">
            말의 <span className="text-[#FFFFFF]" style={{
                textShadow: '-1.5px 0px black, 0px 1.5px black, 1.5px 0px black, 0px -1.5px black',
            }}>BEHIND</span>로
          </h1>
          <Image src={textnext} alt="image" />
        </div>
        
        <InfoCard />
      </div>
      
      <ScrollIndicator />
    </section>
  );
};