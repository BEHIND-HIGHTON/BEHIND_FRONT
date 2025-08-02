'use client'

import Image from "next/image";
import logo from "@/app/images/logo.svg"

import { useRouter } from "next/navigation"; 


export function Header(){

  const router = useRouter();

  function signup(){ 
    router.push("/Signup")

  }

    function Login(){ 
    router.push("/Login")

  }

      function Home(){ 
    router.push("/")

  }

      function Dash(){ 
    router.push("/Dashboard")

  }
  return (
    <header className="flex justify-between items-center pt-[2vh] pb-[2vh] pr-[12vh] pl-[6vh] border-b border-gray-200 fixed z-10 bg-[#FFFFFF] w-[100%]">
      <div className="text-2xl font-bold" onClick={Home}><Image src={logo} alt="logo" width={60} height={60} /></div>
      <nav className="flex gap-[6vh]">
        <a href="#" className="text-gray-600 hover:text-black transition-colors">이용방법</a>
        <a href="#" className="text-gray-600 hover:text-black transition-colors">채팅분석하기</a>
        <button className="text-gray-600 hover:text-black transition-colors" onClick={Dash}>채팅대시보드</button>
      </nav>
      <div className="flex gap-[3vh]">
        <button onClick={Login} className="cursor-pointer">로그인</button>
        <button onClick={signup} className="cursor-pointer">회원가입</button>
      </div>
    </header>
  );
};