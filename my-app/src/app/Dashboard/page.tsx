'use client';

import { useState } from 'react';
import { FriendAnalysisModal } from '../FriendAnalysisModal/page'; // 경로 확인
import { FileText, TrendingDown } from 'lucide-react';

import {
  LineChart as RawLineChart,
  Line as RawLine,
  XAxis as RawXAxis,
  YAxis as RawYAxis,
  CartesianGrid as RawCartesianGrid,
  ResponsiveContainer as RawResponsiveContainer,
  ReferenceLine as RawReferenceLine
} from 'recharts';

const LineChart = RawLineChart as any;
const Line = RawLine as any;
const XAxis = RawXAxis as any;
const YAxis = RawYAxis as any;
const CartesianGrid = RawCartesianGrid as any;
const ResponsiveContainer = RawResponsiveContainer as any;
const ReferenceLine = RawReferenceLine as any;



interface ChatAnalysisCardProps {
  name: string;
  time: string;
  status?: string;
}

interface AddNewAnalysisButtonProps {
  onClick: () => void;
}

interface MyFriendsSectionProps {
  setModalOpen: (open: boolean) => void;
}


const ChatAnalysisCard: React.FC<ChatAnalysisCardProps> = ({ name, time, status = "감탄하다" }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      <div>
        <div className="font-medium text-sm">{name}</div>
        <div className="text-xs text-gray-500">{time}</div>
      </div>
    </div>
    <div className="text-xs text-gray-600 mb-3">{status}</div>
    <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded text-sm hover:bg-indigo-700 transition-colors">
      메시지 분석하기
    </button>
  </div>
);

const AddNewAnalysisButton: React.FC<AddNewAnalysisButtonProps> = ({ onClick }) => (
  <div
    onClick={onClick}
    className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer"
  >
    <div className="text-center">
      <div className="text-4xl text-gray-400 mb-2">+</div>
      <div className="text-sm text-gray-600">새 친구 분석하기</div>
    </div>
  </div>
);

const MyFriendsSection: React.FC<MyFriendsSectionProps> = ({ setModalOpen }) => {
  const friends = [
    { name: "김태현", time: "어제밤 (am03시41분)" },
    { name: "조성현", time: "어제밤 (am03시41분)" },
    { name: "정한입", time: "어제밤 (am03시41분)" },
    { name: "김현호", time: "어제밤 (am03시41분)" }
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h2 className="text-lg font-bold mb-6">내 친구</h2>
      <div className="grid grid-cols-4 gap-4">
        {friends.map((friend, index) => (
          <ChatAnalysisCard key={index} name={friend.name} time={friend.time} />
        ))}
        <AddNewAnalysisButton onClick={() => setModalOpen(true)} />
      </div>
    </div>
  );
};

const CommunicationGrowthReport = () => {
  const data = [
    { month: '2025.3', value: 72 },
    { month: '2025.4', value: 76 },
    { month: '2025.5', value: 65 },
    { month: '2025.6', value: 55 },
    { month: '2025.7', value: 25 },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-[10vh]">
      <h2 className="text-lg font-bold mb-6">소통 성장 리포트</h2>
      <div className="h-80">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
      <XAxis
        dataKey="month"
        axisLine={false}
        tickLine={false}
        tick={{ fontSize: 12, fill: '#666' }}
        dy={10}
      />
      <YAxis
        domain={[0, 100]}
        axisLine={false}
        tickLine={false}
        tick={{ fontSize: 12, fill: '#666' }}
      />
      <ReferenceLine y={75} stroke="#e74c3c" strokeWidth={2} strokeDasharray="none" />
      <ReferenceLine y={25} stroke="#8b5cf6" strokeWidth={2} strokeDasharray="none" />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#374151"
        strokeWidth={3}
        dot={{ fill: '#374151', strokeWidth: 2, r: 6 }}
        activeDot={{ r: 8, fill: '#374151' }}
      />
    </LineChart>
  </ResponsiveContainer>
</div>
<div>
    <div className="text-center mb-4">
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              조상철님의 전송 컨텐 메시지의
            </h3>
            <p className="text-gray-700">
              부정지수가 전월 대비 약 <span className="text-red-500 font-bold text-xl">25%p</span> 감소했어요!
            </p>
          </div>

          {/* Analysis */}
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>지난 달 조상철님의 채팅에서,</p>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <p>
                상대의 감정에 <span className="text-red-500 font-semibold">공감하려는 태도</span>와 상대의
              </p>
              <p>
                말을 <span className="text-red-500 font-semibold">끝까지 듣는</span> 자세가 가장 돋보였어요!
              </p>
            </div>
            
            <p>
              그러나, 본인의 의견을 내세우기보다<br />
              상대의 의견을 존중해주는 태도가 있다면<br />
              더 매끄러운 소통이 가능해요.
            </p>
            </div>
        </div>

      <div className="text-center text-sm mt-4 text-gray-500">연월 기준</div>
    </div>
  );
};

export default function Dashboard() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <main className="max-w-7xl mx-auto p-8 space-y-12">
        <CommunicationGrowthReport />
        <MyFriendsSection setModalOpen={setModalOpen} />
      </main>
      <FriendAnalysisModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
