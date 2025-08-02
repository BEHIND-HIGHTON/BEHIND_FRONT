'use client';
import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const FriendAnalysisModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-[800px] max-w-full p-8 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 left-4 text-2xl">&larr;</button>
        <h2 className="text-center text-xl font-semibold mb-6">새 친구 분석하기</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <input className="w-full border p-2 rounded" placeholder="이름을 입력하세요." />
            <input className="w-full border p-2 rounded" placeholder="나이를 입력하세요." />
            <input className="w-full border p-2 rounded" placeholder="MBTI를 입력하세요." />
            <select className="w-full border p-2 rounded text-gray-500">
              <option>성별을 선택하세요.</option>
              <option>남성</option>
              <option>여성</option>
              <option>기타</option>
            </select>
          </div>
          <div className="space-y-4">
            <input className="w-full border p-2 rounded" placeholder="관계를 입력하세요." />
            <input className="w-full border p-2 rounded" placeholder="성격을 입력하세요." />
            <p className="text-sm text-gray-500">
              ‘분석하기’ 버튼을 클릭하면 친구를 분석한 후 대시보드에 추가돼요.
            </p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
              📊 분석하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
