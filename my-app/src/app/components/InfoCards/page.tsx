import { ActionButtons } from "../ActionButttons/page";

export function InfoCard(){
  return (
    <div className="mt-[26vh] w-[80vh] text-[2vh] flex flex-col items-end ">
      <div>
      <p className="leading-relaxed">
        요즘 사회에는 사람들이 대화에 대한 공포가 심해지고있습니다.
      </p>
        <p className="leading-relaxed">
        때문에 우리는 대화에 대한  공포를 줄이고자 BEHIND를 기획했습니다.
      </p>
        <p className=" mb-6 leading-relaxed">
        BEHIND는 상대방의 말의 속뜻, 내가 말했을때 불쾌하진않을지 등을 알려줍니다.
      </p>
    </div>
              
      <ActionButtons />
    </div>
  );
};