import React from "react";

const InvestmentInfo = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100">
      {/* 헤더 섹션 */}
      <div className="grid grid-cols-2 gap-2 text-center">
        <div className="bg-gray-300 p-4 text-lg font-bold">개인 투자자</div>
        <div className="bg-blue-500 text-white p-4 text-lg font-bold">법인 투자자</div>
      </div>
      
      {/* 투자자 섹션 */}
      <div className="grid grid-cols-2 gap-6 mt-4">
        {/* 개인 투자자 섹션 */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold">일반 투자자 한도</p>
            <p className="text-sm">1천만 ~ 5천만 원</p>
            <p className="text-sm">최대 투자 기간: 10 ~ 12개월</p>
            <p className="text-sm">최대 수익률: 8~9.1%</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold">적격 투자자 한도</p>
            <p className="text-sm">5천만 ~ 1억 원</p>
            <p className="text-sm">최대 투자 기간: 10 ~ 18개월</p>
            <p className="text-sm">최대 수익률: 9.2~11.8%</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold">전문 투자자 한도</p>
            <p className="text-sm">무제한</p>
            <p className="text-sm">최대 투자 기간: 12 ~ 36개월</p>
            <p className="text-sm">최대 수익률: 11.9~14.6%</p>
          </div>
        </div>
        
        {/* 법인 투자자 섹션 */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold">일반 투자 한도</p>
            <p className="text-sm">무제한</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold">수익률 한도</p>
            <p className="text-sm">12% ~ 14.0%</p>
            <p className="text-sm">안정적인 투자 수익률 및 특별 포트폴리오 제공</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold">법인 특별 혜택</p>
            <p className="text-sm">세금 절감</p>
            <p className="text-sm">법인 투자자는 법인세율 적용으로 절세 가능</p>
          </div>
        </div>
      </div>

      {/* 신청 절차 */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="font-semibold text-lg">신청 절차 안내</h2>
        <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
          <li>필요 서류 발급 및 제출</li>
          <li>자격 요건 검토</li>
          <li>승인</li>
        </ul>
      </div>

      {/* 투자 상담 신청 */}
      <div className="mt-6 bg-blue-600 text-white p-6 rounded-lg text-center">
        <h2 className="text-lg font-semibold">투자 상담 신청</h2>
        <div className="mt-4">
          <input type="text" placeholder="고객 이름" className="p-2 rounded-md text-black" />
          <input type="text" placeholder="010" className="p-2 ml-2 rounded-md text-black" />
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md ml-2">신청하기</button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentInfo;
