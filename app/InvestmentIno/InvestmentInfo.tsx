import React from "react";

const InvestmentInfo = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100">
      {/* 투자 정보 섹션 */}
      <div className="grid grid-cols-3 gap-6 text-center">
        {/* 간편한 비대면 투자 */}
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <img src="/icons/investment-online.svg" alt="Online Investment" className="mx-auto w-16" />
          <h3 className="font-semibold">간편한 비대면 투자</h3>
          <p className="text-sm">비대면으로 간편하게 온라인으로 즉시 투자</p>
        </div>
        {/* 안정적인 투자 시스템 */}
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <img src="/icons/stable-system.svg" alt="Stable System" className="mx-auto w-16" />
          <h3 className="font-semibold">안정적인 투자 시스템</h3>
          <p className="text-sm">실시간 로스컷 위험 감지로 자동으로 반대매매 실행</p>
        </div>
        {/* 안정적인 높은 고수익 실현 */}
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <img src="/icons/high-profit.svg" alt="High Profit" className="mx-auto w-16" />
          <h3 className="font-semibold">안정적인 높은 고수익 실현</h3>
          <p className="text-sm">금융권 보다 높은 수익률로 보다 빠른 자산증식 효과</p>
        </div>
      </div>

      {/* 투자 가능 시간 */}
      <div className="mt-8 text-center">
        <div className="bg-blue-600 text-white py-3 rounded-t-lg text-lg font-semibold">투자 가능 시간</div>
        <div className="grid grid-cols-2 bg-white p-6 rounded-b-lg shadow-md">
          <div className="flex flex-col items-center">
            <span className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold">1 Round</span>
            <span className="text-xl font-semibold mt-2">08 : 30</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold">2 Round</span>
            <span className="text-xl font-semibold mt-2">13 : 30</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">[ 대출자의 상황에 따라 상품 공시 및 정기 오픈시간은 변경 될 수 있습니다 ]</p>
      </div>
    </div>
  );
};

export default InvestmentInfo;
