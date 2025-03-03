import React from "react";
import { FaHeadset } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { AiOutlineCreditCard } from "react-icons/ai";

const LoanProcess = () => {
  const steps = [
    {
      icon: <FaHeadset size={50} className="text-gray-700" />,
      title: "STEP 01",
      subtitle: "상담진행",
      description: "전문 상담원이 주식자금 대출관련하여 친절히 상담",
    },
    {
      icon: <GiMoneyStack size={50} className="text-gray-700" />,
      title: "STEP 02",
      subtitle: "대출금액 결정",
      description: "고객님의 주식종목 및 담보금 확인 후 대출금액 결정",
    },
    {
      icon: <BsFileEarmarkCheck size={50} className="text-gray-700" />,
      title: "STEP 03",
      subtitle: "대출신청",
      description: "대출 신청 후 공인인증서를 통해 증권 및 대출금 입금",
    },
    {
      icon: <AiOutlineCreditCard size={50} className="text-gray-700" />,
      title: "STEP 04",
      subtitle: "대출실행",
      description: "정상적으로 대출금 지급 후 4배의 자금으로 자유투자운용",
    },
  ];

  return (
    <div className="py-10">
      <div className="px-52 mx-auto">
        <div className="flex  justify-center gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white relative h-[250px] shadow-lg p-6 rounded-lg  text-center"
            >
              <div className="flex justify-center mt-12">{step.icon}</div>
              <h2 className="text-white py-2 absolute bg-orange-500 rounded-full -top-2 font-semibold right-20 left-20">{step.title}</h2>
              <h3 className="text-lg  font-bold mt-4">{step.subtitle}</h3>
              <p className="text-sm text-gray-600 mt-4">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-orange-500 text-white text-center p-7 rounded-lg">
          고객님의 대출을 위한 모든 과정 및 계좌 운영에 도움 줄 365일 1:1 전문 상담원 배정
        </div>
      </div>
    </div>
  );
};

export default LoanProcess;
