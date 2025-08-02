"use client"

import ChevronDown from "@/app/images/ChevronDown.svg"
import Image from "next/image";

export function ScrollIndicator() {
  return (
    <div className="flex justify-center mt-20">
      <Image src={ChevronDown} alt="이미지" className="w-6 h-6 text-gray-400 animate-bounce" />
    </div>
  );
};