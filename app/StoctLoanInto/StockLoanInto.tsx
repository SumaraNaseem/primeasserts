import React from "react";
import StoctMarket from "/stock market.jpg"
import Account from "/download (1).jpeg"
import Focused from "/download (2).jpeg"
import Security from "/download.jpeg"

const StockLoanIntro = () => {
  return (
    <div className="px-52 p-6 rounded-lg">
      <h2 className="text-lg font-bold mb-4">스타론소개</h2>
      <p className="text-gray-700 mb-6">
        고객님이 보유하신 증권계좌 평가액의 최대 4배, 최대 21억원까지 대출하여 본인 보유자금의
        최대 4배까지 레버리지 투자가 가능한 연계 신용 서비스로써 P2P투자 플랫폼을 통한 자금을
        대출해주는 상품
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className=" shadow rounded-lg text-center">
          <img
            src={StoctMarket}
            alt="Stock Market"
            className="w-full h-52 object-cover mb-3"
          />
          <p className="font-bold">최대 증권사제휴, 최대 400%운영</p>
          <p className="text-sm text-gray-600">계좌당 최고 21억 대출</p>
        </div>
        <div className=" shadow rounded-lg text-center">
          <img
            src={Security}
            alt="Account Setup"
            className="w-full h-52 object-cover mb-3"
          />
          <p className="font-bold">비대면 계좌 개설 및 당일 대출과 업계 최저금리</p>
        </div>
        <div className="shadow rounded-lg text-center">
          <img
            src={Account}
            alt="Focused Investment"
            className="w-full h-52 object-cover mb-3"
          />
          <p className="font-bold">한 종목 100% 집중 투자 및 1:1 상담원 배정</p>
        </div>
        <div className=" shadow rounded-lg text-center">
          <img
            src={Focused}
            alt="All Securities Support"
           className="w-full h-52 object-cover mb-3"
          />
          <p className="font-bold">증권사 관계없이 전 증권사 대환대출 가능</p>
        </div>
      </div>
    </div>
  );
};

export default StockLoanIntro;
