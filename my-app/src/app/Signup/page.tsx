'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation"; 

// Close Icon Component
const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Input Field Component
interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = "text", placeholder, value, onChange }) => (
  <div className="mb-8">
    <label className="block text-lg font-medium text-black mb-4">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-0 py-3 text-gray-500 bg-transparent border-0 border-b border-gray-300 focus:border-black focus:outline-none focus:ring-0 placeholder-gray-400"
    />
  </div>
);

// Signup Page Component
export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://behind-back-production.up.railway.app/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          full_name: fullName
        })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || '회원가입 실패');
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleClose = () => {
    window.history.back();
  };

  useEffect(()=>{
    if(success == true){
        alert("회원가입성공!")
        router.push("/");
    }
  },[success])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg mx-auto p-12 relative">
        {/* Close Button */}
        <button onClick={handleClose} className="absolute top-8 right-8 text-gray-400 hover:text-gray-600">
          <CloseIcon />
        </button>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-black">회원가입</h1>
        </div>

        {/* Form Fields */}
        <div className="space-y-2">
          <InputField
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            label="이름"
            placeholder="이름을 입력해주세요"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <InputField
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* 오류 메시지 */}
        {error && <div className="text-red-500 mt-4 text-sm text-center">{error}</div>}
        

        {/* Submit Button */}
        <div className="text-center mt-16">
          <button
            onClick={handleSubmit}
            className="bg-white text-black border-2 border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 font-medium text-lg"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
