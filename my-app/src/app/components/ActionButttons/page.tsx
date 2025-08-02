'use client'

export function ActionButtons(){

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex gap-[4vh]">
      <button className="bg-black text-white px-6 py-1  rounded-[100vh] hover:bg-gray-800 transition-colors"
      onClick={scrollToAbout}>
        더 알아보기
      </button>
      <button className="border border-gray-300 px-6 py-1 rounded-[100vh]  hover:bg-gray-50 transition-colors">
        분석하러가기
      </button>
    </div>
  );
};