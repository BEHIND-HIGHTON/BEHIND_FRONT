import { SectionTitle } from "../SectionTitle/page";
import { QuestionsList } from "../QuestionsList/page";
import { DescriptionText } from "../DescriptionText/page";

export function AboutSection(){
  return (
    <section className="bg-black text-white pt-[2vh] pb-[2vh] pr-[12vh] pl-[6vh] min-h-[95vh] mb-[5vh]" id="about-section">
      <div className="max-w-4xl mx-auto items-center justify-center text-center px-6 mt-[20vh]">
        <SectionTitle />
        <QuestionsList />
        <DescriptionText />
      </div>
    </section>
  );
};