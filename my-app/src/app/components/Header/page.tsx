'use client';

import Image from "next/image";
import logo from "@/app/images/logo.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
 
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {


    const token = localStorage.getItem('accessToken');
    const name = localStorage.getItem('userName');
    

    console.log(token,name)
    
    if (token && name) {
      setUserName(name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userEmail');
    setUserName(null);
    router.push('/');
  };

  const goToSignup = () => router.push("/Signup");
  const goToLogin = () => router.push("/Login");
  const goToHome = () => router.push("/");
  const goToDash = () => router.push("/Dashboard");

      function Dash(){ 
    router.push("/Dashboard")

  }

  function Analyze(){ 
    router.push("/Analyze")

  }
  return (
    <header className="flex justify-between items-center pt-[2vh] pb-[2vh] pr-[12vh] pl-[6vh] border-b border-gray-200 fixed z-10 bg-[#FFFFFF] w-full">
      <div className="text-2xl font-bold cursor-pointer" onClick={goToHome}>
        <Image src={logo} alt="logo" width={60} height={60} />
      </div>

      <nav className="flex gap-[6vh]">
        <a href="#" className="text-gray-600 hover:text-black transition-colors">이용방법</a>
        <a href="#" className="text-gray-600 hover:text-black transition-colors" onClick={Analyze}>채팅분석하기</a>
        <button className="text-gray-600 hover:text-black transition-colors" onClick={Dash}>채팅대시보드</button>
      </nav>

      <div className="flex gap-[3vh] items-center">
        {userName ? (
          <>
            <span className="text-gray-700">{userName}</span>
            <button onClick={handleLogout} className="text-red-500 hover:text-red-700">로그아웃</button>
          </>
        ) : (
          <>
            <button onClick={goToLogin} className="cursor-pointer">로그인</button>
            <button onClick={goToSignup} className="cursor-pointer">회원가입</button>
          </>
        )}
      </div>
    </header>
  );
}
