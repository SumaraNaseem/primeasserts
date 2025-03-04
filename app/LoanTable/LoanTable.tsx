import React from "react";

const loanData = [
  {
    product: "NH론스타트",
    bank: "NH투자증권",
    brokerage: "NH투자증권",
    interestRate: "91.61%",
    dsr: "적용",
    newFee: "없음",
    earlyRepayFee: "없음",
    collateral: "100%",
    lossCoverage: "120%",
    loanRatio: "130%",
    term: "1년(3회5년)",
  },
  // Add other rows here...
];

const LoanTable = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <table className="w-full border border-gray-300 text-sm">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="p-2 border">상품정보</th>
            <th className="p-2 border">금융기관</th>
            <th className="p-2 border">증권사</th>
            <th className="p-2 border">대출금리</th>
            <th className="p-2 border">DSR</th>
            <th className="p-2 border">신규수수료</th>
            <th className="p-2 border">중도상환수수료</th>
            <th className="p-2 border">한도우자</th>
            <th className="p-2 border">손실보전율</th>
            <th className="p-2 border">출금비율</th>
            <th className="p-2 border">대출기간</th>
            <th className="p-2 border">대출신청</th>
            <th className="p-2 border">다운로드</th>
          </tr>
        </thead>
        <tbody>
          {loanData.map((loan, index) => (
            <tr key={index} className="text-center border">
              <td className="p-2 border">{loan.product}</td>
              <td className="p-2 border">{loan.bank}</td>
              <td className="p-2 border">{loan.brokerage}</td>
              <td className="p-2 border">{loan.interestRate}</td>
              <td className="p-2 border">{loan.dsr}</td>
              <td className="p-2 border">{loan.newFee}</td>
              <td className="p-2 border">{loan.earlyRepayFee}</td>
              <td className="p-2 border">{loan.collateral}</td>
              <td className="p-2 border">{loan.lossCoverage}</td>
              <td className="p-2 border">{loan.loanRatio}</td>
              <td className="p-2 border">{loan.term}</td>
              <td className="p-2 border">
                <button className="bg-red-500 text-white px-3 py-1 rounded">비교하기</button>
              </td>
              <td className="p-2 border">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">다운로드</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanTable;
