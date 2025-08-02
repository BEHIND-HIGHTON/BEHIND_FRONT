

import { HeaderSection } from "../app/components/HeroSection/page";
import { AboutSection } from "./components/AboutSection/page";
import { Footer } from "./components/Footer/page";


export default function BehindWebsite() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      <HeaderSection />
      <AboutSection />
      <Footer />
    </div>
  );
}