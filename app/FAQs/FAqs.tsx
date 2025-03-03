import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const faqData = [
  {
    category: "Loans",
    questions: [

      { question: "[대출] 온투업 스탁론이란 무엇인가요? ", answer: `• 차입자와 투자자를 연결하는 금융 서비스로 대출자에게는 보다 낮은 금리를, 투자자에게는 보다 높은 수익을 제공하는 금융과 IT기술을 융합한 핀테크 서비스입니다.
        • 고객의 증권계좌에 보유한 자산(주식+현금)을 담보로 증권계좌 자산 대비 최대 4배수까지 하이펀딩에서 대출하는 상품입니다.
        • 대출금은 고객의 증권계좌로만 입금되어 운영되며, 해당 증권계좌는 근질권 설정을 통해 주식투자를 제외한 타 목적의 자금사용 불가합니다.`},
      { question: "[대출] 대출 신청은 어떻게 하나요?", answer: "대출 신청을 원하실 경우 [ 대출신청란 ] 으로 신청하면 해당 담당자가 즉시 연락 드립니다. " },
      
      { question: "[대출] 상환일에 입금을 못하면 어떻게 되나요? ", answer: "You need to provide ID, income proof, and address proof." },
      { question: "대출] 계좌운용규칙이란 무엇인가요?", answer: "You need to provide ID, income proof, and address proof." },
      { question: "[대출] 대출 신청 후 심사부터 지급까지 얼마나 걸리나요?", answer: "You need to provide ID, income proof, and address proof." },
      { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },
      { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },
      { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },
      // { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },
      // { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },
      // { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },
      // { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },
      // { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },

    //   { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },
    //   { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },
    //   { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },
    //   { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },
    //   { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },
    //   { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },
    //   { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },
    //   { question: "[대출] 대출 신청 후 결과는 어떻게 확인하나요?", answer: "You need to provide ID, income proof, and address proof." },

    ]
  },
  
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 md:px-10  py-10 lg:px-14 xl:px-30 2xl:px-52">
      <h2 className="text-2xl font-bold mb-4">FAQ( 자주하는 질 )</h2>
      {faqData.map((category, catIndex) => (
        <div key={catIndex} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{category.category}</h3>
          {category.questions.map((item, index) => (
            <div key={index} className="border-b py-2">
              <button
                className="w-full text-left flex justify-between items-center py-2 font-medium"
                onClick={() => toggleFAQ(`${catIndex}-${index}`)}
              >
                {item.question}
                <span>{openIndex === `${catIndex}-${index}` ? <RiArrowDropUpLine className="text-[30px]"/> :<RiArrowDropDownLine className="text-[30px]"/>}</span>
              </button>
              {openIndex === `${catIndex}-${index}` && (
                <p className="text-gray-600 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
