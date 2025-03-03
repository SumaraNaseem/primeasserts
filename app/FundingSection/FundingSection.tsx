import React from "react";
import P2P from "/p2p.jpeg"
import P2Pexchange from "/p2pexchanges.jpeg"

const FundingSection = () => {
  return (
    <div className="px-4 md:px-10  py-10 lg:px-14 xl:px-30 2xl:px-52">
      {/* Header */}
      <div className="bg-teal-600 text-white text-center py-3 text-xl font-semibold">
        On to Funding
      </div>

      {/* Main Content */}

        <div className="grid md:grid-cols-2 py-1 gap-1">
          {/* Left Card */}
          <div className="relative   h-[350px] shadow-lg flex items-center">
            <img
              src={P2P}
              alt="Investment"
              className="absolute  w-full  h-full object-cover bg-black opacity-120"
            />
            <div className="md:p-12 p-4  z-10 text-white ">
            <h2 className="text-xl font-bold mb-4">투자자대상</h2>
            <p className="text-sm  mb-4 leading-relaxed">
              안전한 투자, 확실한 수익! 스타론 P2P 펀딩이 만듭니다.
              <br />
              고객님의 자본이 성장하는 곳, 스타론 P2P 펀딩!
              <br />
              리스크 관리로 더욱 안전한 투자!
              <br />
              검증된 투자 기회! 신뢰할 수 있는 P2P 플랫폼.
            </p>
            <div className="grid grid-cols-3  gap-12  mt-8">
              <div className="">
                <h3 className="text-2xl font-bold">2,875</h3>
                <p className="text-sm">누적대출</p>
              </div >
              <div className="">
                <h3 className="text-2xl font-bold">1,650</h3>
                <p className="text-sm">대출잔액</p>
              </div>
              <div className="">
                <h3 className="text-2xl font-bold">10.26%</h3>
                <p className="text-sm">평균 투자수익률</p>
              </div>
            </div>
            </div>
           
          
          </div>
          

          {/* Right Card */}
          <div className="relative   h-[350px] shadow-lg flex items-center">
            <img
              src={P2Pexchange}
              alt="Investment"
              className="absolute  w-full h-full object-cover bg-black opacity-120"
            />
            <div className="relative md:p-12 p-4 ">
              <h2 className="text-xl text-white font-bold">PRIME STOCK</h2>
              <p className="text-sm text-white">
                투자의 미래를 연결하는 스마트 금융 플랫폼
              </p>
            </div>
          </div>
        </div>
     

      {/* Bottom Banner */}
      <div className="mt-6 bg-gray-800 text-white text-center p-4 rounded-lg">
        <span className="text-2xl font-bold">
          On TO On (온라인 to 온라인) P2P 연계 스타론 투자 플랫폼 PRIME STOCK
        </span>
        <p className="text-lg mt-2">최초 현금투자 및 주식 제공 투자 플랫폼</p>
      </div>
    </div>
  );
};

export default FundingSection;
