'use client';
import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const FriendAnalysisModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mbti, setMbti] = useState('');
  const [gender, setGender] = useState('');
  const [relation, setRelation] = useState('');

  const [closeness, setclosenessn] = useState(0);
  const [email, setEmail] = useState<string | null>(null);

    React.useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail);
    }, []);

  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
    if (!file) return alert("파일을 업로드해주세요.");

    

    const formData = new FormData();
    formData.append('file', file);
    if (email !== null) {
        formData.append('email', email);
    }
    formData.append('mbti', mbti);
    formData.append('gender', gender);
    formData.append('age', age);
    formData.append('relation', relation);
    formData.append('closeness', '50');
    formData.append('name', name);


    


    try {
      const res = await fetch('https://1fadd9eda9d0.ngrok-free.app/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText);
      }

      alert('업로드 성공!');
      onClose();
    } catch (err) {
      alert(`업로드 실패: ${err}`);
      
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-5xl rounded-[24px] p-12 relative">
        {/* 뒤로가기 버튼 */}
        <button onClick={onClose} className="absolute top-8 left-8 text-gray-800 text-3xl font-light">
          ←
        </button>

        <h2 className="text-center text-3xl font-semibold text-black mb-12">새 친구 분석하기</h2>

        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-10">
            <div>
              <label className="block font-semibold mb-2 text-lg">친밀도</label>
              <input value={closeness} onChange={e => setclosenessn(Number(e.target.value))} className="w-full border-b border-gray-300 focus:border-black outline-none placeholder-gray-400 py-2" placeholder="이름을 입력하세요." />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-lg">나이</label>
              <input value={age} onChange={e => setAge(e.target.value)} className="w-full border-b border-gray-300 focus:border-black outline-none placeholder-gray-400 py-2" placeholder="나이를 입력하세요." />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-lg">MBTI</label>
              <input value={mbti} onChange={e => setMbti(e.target.value)} className="w-full border-b border-gray-300 focus:border-black outline-none placeholder-gray-400 py-2" placeholder="MBTI를 입력하세요." />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-lg">성별</label>
              <select value={gender} onChange={e => setGender(e.target.value)} className="w-full border-b border-gray-300 focus:border-black outline-none text-gray-500 py-2">
                <option value="">성별을 선택하세요.</option>
                <option value="male">남성</option>
                <option value="female">여성</option>
                <option value="other">기타</option>
              </select>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <label className="block font-semibold mb-2 text-lg">친구와의 관계</label>
              <input value={relation} onChange={e => setRelation(e.target.value)} className="w-full border-b border-gray-300 focus:border-black outline-none placeholder-gray-400 py-2" placeholder="관계를 입력하세요." />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-lg">상대 이름</label>
              <input value={name} onChange={e => setName(e.target.value)} className="w-full border-b border-gray-300 focus:border-black outline-none placeholder-gray-400 py-2" placeholder="상대의 이름을 입력하세요." />
            </div>

            {/* 파일 업로드 */}
            <div className="border border-gray-300 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-gray-500">
              <div className="text-3xl mb-2">⬆️</div>
              <p className="text-base font-medium">파일 업로드하기</p>
              <p className="text-sm text-gray-400">(.csv 지원)</p>
              <input type="file" accept=".csv" onChange={handleFileUpload} className="mt-4 text-sm" />
            </div>

            <p className="text-sm text-gray-500 leading-snug">
              ‘분석하기’ 버튼을 클릭하면 친구를 분석한 후 대시보드에 추가돼요.
            </p>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#4F46E5] text-white py-3 rounded-lg text-base font-semibold hover:bg-indigo-700 transition-colors"
            >
              📊 분석하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
