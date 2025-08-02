'use client';

import { Header } from '../components/Header/page';
import { useState } from 'react';
import axios from "axios"

export default function Analyze() {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  const [responseMessage, setResponseMessage] = useState<string | null>(null);



  const name = localStorage.getItem("userName")

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

const handleAnalyze = () => {
  if (selectedOption === 'send') {
    const trimmedMessage = message.trim();
    setIsAnalyzing(true);
    setResponseMessage(null); // 이전 결과 지우기

    axios.post(`https://1fadd9eda9d0.ngrok-free.app/simulate_message?message=${encodeURIComponent(trimmedMessage)}`)
      .then(response => {
        console.log(response.data);
         // 서버 응답 저장
      })
      .catch(error => {
        console.error('Error:', error);
        setResponseMessage('에러가 발생했습니다.');
      })
      .finally(() => {
        setIsAnalyzing(false);
      });
  }
};




  return (
    <div className="min-h-screen bg-[#f1f1f1]">
      <Header />
      
      {/* 메인 컨테이너 */}
      <div className="flex h-screen pt-[calc(4vh+24px)]">
        {/* 좌측 사이드바 */}
        <div className="w-[400px] h-full bg-white border-r border-[#ababab]">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#363636] mb-6">내 검토</h2>
            
            {/* 사용자 목록 */}
            <div className="space-y-0">
              {Array.from({ length: 8 }, (_, i) => (
                <div 
                  key={i}
                  className="flex items-center p-3 border-b border-[#d6d6d6] cursor-pointer hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="text-xl font-medium text-[#363636]">김태현</div>
                      <div className="text-xs text-[#aba8a8]">김태현 (@x0gu.s_)</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 메인 채팅 영역 */}
        <div className="flex-1 flex flex-col">
          {/* 상단 헤더 */}
          <div className="bg-white border-b border-[#ababab] p-6 flex justify-between items-center">
            <h1 className="text-2xl font-medium text-[#363636]">김태현</h1>
            <button className="px-4 py-2 border border-[#737272] rounded text-[#363636] text-sm font-medium">
              내 친구의 성향 보기
            </button>
          </div>

          {/* 채팅 영역 */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            {/* 날짜 표시 */}
            <div className="text-center">
              <span className="text-sm text-[#a1a1a1]">8월 2일(토)</span>
            </div>

            {/* 상대방 대화창 */}
            <div className="flex justify-start">
              <div className="bg-[#dedfef] rounded-xl p-4 max-w-[568px]">
                <p className="text-[#363636] text-xl">
                  {name}님, 오늘 사용자 대화에서 검토할 내용을 선택해주세요!
                </p>
              </div>
              <div className="ml-2 self-end">
                <span className="text-xs text-[#a1a1a1]">오후 06:24</span>
              </div>
            </div>

            {/* 검토 옵션 선택 */}
            <div className="ml-[60vh] bg-white border border-[#ababab] rounded-xl p-6 max-w-[609px]">
              <h3 className="text-xl font-semibold text-[#363636] mb-4">검토할 내용 선택</h3>
              <div className="space-y-3">
                <div 
                  className={`p-4 border border-[#ababab] rounded-xl cursor-pointer transition-colors ${
                    selectedOption === 'send' ? 'bg-blue-50 border-blue-300' : ''
                  }`}
                  onClick={() => handleOptionSelect('send')}
                >
                  <p className="text-xl text-[#363636] text-center">내가 보낼 메시지를 검토하기</p>
                </div>
                <div 
                  className={`p-4 border border-[#ababab] rounded-xl cursor-pointer transition-colors ${
                    selectedOption === 'receive' ? 'bg-blue-50 border-blue-300' : ''
                  }`}
                  onClick={() => handleOptionSelect('receive')}
                >
                  <p className="text-xl text-[#363636] text-center">내가 받은 메시지의 의도를 분석하기</p>
                </div>
              </div>
            </div>

            {/* 메시지 입력 영역 */}
            {selectedOption && (
              <div className="ml-[60vh] bg-white border border-[#ababab] rounded-xl p-6 max-w-[609px]">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="메시지를 입력해주세요..."
                  className="w-full h-24 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
                />
              </div>
            )}

            {/* 분석 중 메시지 */}
            {responseMessage && (
              <div className="flex justify-start">
                <div className="bg-[#cde1ff] rounded-xl p-4 max-w-[494px]">
                  <p className="text-[#1a2d5a] text-xl leading-6 whitespace-pre-wrap">
                    {responseMessage}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 검토 요청 채팅 (하단 고정) */}
          <div className="bg-white border-t border-[#ababab] p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1 bg-white border border-[#ababab] rounded-full h-[60px] px-6 flex items-center">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 outline-none text-xl resize-none border-none focus:outline-none"
                  rows={1}
                  style={{ minHeight: '40px', maxHeight: '120px' }}
                />
              </div>
              <button
                onClick={handleAnalyze}
                disabled={!message.trim() || isAnalyzing}
                className="px-8 py-3 bg-[#575c8c] text-white font-bold text-xl rounded-full hover:bg-[#4a4f7a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                검토 요청
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
