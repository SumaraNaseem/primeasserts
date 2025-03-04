import StockLoanImageone from "/Picture3.png"
import StockLoanImageTwo from "/Picture4.png"
import StockLoanImageThree from "/Picture1.png"
const StockLoansSection = () => {
    return (
      <div className="px-4 md:px-10  py-10 lg:px-14 xl:px-30 2xl:px-52">
        <h2 className="text-xl font-bold mb-4">주식매입자금</h2>
        <div className="grid md:grid-cols-12 gap-2 md:gap-12">
          <div className="col-span-12 md:col-span-5 lg:col-span-4 2xl:col-span-3">
            <img src={StockLoanImageone} alt="Stock Loan" className="w-full lg:w-[350px] h-[300px]" />
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-8 2xl:col-span-9">
            <p>증권사에서 미수나 신용거래를 이용해보신 경험이 있으시죠? 대출배수도 적고 이용기간도 짧아 아쉬웠던 기억이 있으실 겁니
다.
하이스탁론은 고객님께서 보유하신 자금이상으로 주식매입을 원하실 때 본인자금 포함 최대 4배까지 추가 매수하실 수 있도록</p>
            <ul className="list-disc pl-4 text-gray-700 space-y-2">
                <div className="mt-2">
                <li className="text-orange-500">도와드립니다 한종목 100% 투자가능</li>
                <p>고객님의 투자성향에 맞춰 집중투자비율을 설정하실 수 있으며, 한종목 최고 100% 까지 투자가 가능합니다. </p>
                </div>
                <div className="mt-2">
                <li className="text-orange-500">종목제한 완화</li>
                <p>증권사 신용융자나 미수거래와 달리 종목별 증거금률과 관계없이 많은 종목에 투자가 가능합니다</p>
                </div>
                <div className="mt-2">
                <li className="text-orange-500">최저금리</li>
                <p>증권사 대비 저렴한 금리로 신용등급에 관계없이 대출이 가능합니다</p>
                </div>
                <div className="mt-2">
                <li className="text-orange-500">최장 5년</li>
                <p>상환의 부담없이 장기간 투자가 가능한 대출상품입니다.</p>
                </div>
            </ul>
          </div>
        </div>
        <h2 className="text-xl font-bold py-3 mt-4">주식담보대
        출</h2>
        <div className="grid md:grid-cols-12 gap-2 md:gap-12">
        <div className="col-span-12 md:col-span-7 lg:col-span-8 2xl:col-span-9">
            <p>보유 중인 주식을 매도하지 않고 현금이 필요한 고객들을 위한 대출로 본인자금의 80%까지 대출 가능</p>
            <ul className="list-disc pl-4 text-gray-700 space-y-2">
                <div className="mt-2">
                <li className="text-orange-500">최대 75% 까지 대출가능</li>
                <p>보유하신 종목에 따라 최대 75%까지 대출이 가능합니다</p>
                </div>
                <div className="mt-2">
                <li className="text-orange-500">편리한 자금사용
                </li>
                <p>인출 후 남은 자금은 상환 전(최대 5년)까지 주식매입자금으로도 활용할 수 있
습니다.
</p>
                </div>
                <div className="mt-2">
                <li className="text-orange-500">최장 5년</li>
                <p>상환의 부담없이 장기간 투자가 가능한 대출상품입니다.</p>
                </div>
              
            </ul>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-4 2xl:col-span-3">
            <img src={StockLoanImageTwo} alt="Stock Loan" className="w-full lg:w-[350px] h-[300px]" />
          </div>
          
        </div>
        <h2 className="text-xl font-bold py-3 mt-4">미수신용상환</h2>
        <div className="grid md:grid-cols-12 gap-2 md:gap-12">
          <div className="col-span-12 md:col-span-5 lg:col-span-4 2xl:col-span-3">
            <img src={StockLoanImageThree} alt="Stock Loan" className="w-full lg:w-[350px] h-[300px]" />
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-8 2xl:col-span-9">
            <p>증권사 신용/미수/담보대출을 이용 중인 고객들이 주식의 매도 없이 기존 대출을 대환할 수 있도록 해주는 상품</p>
            <ul className="list-disc pl-4 text-gray-700 space-y-2">
                <div className="mt-2">
                <li className="text-orange-500">미수ㆍ신용 상환 가능</li>
                <p>이용중인 증권사 대출상품을 보유하신 계좌 그대로 주식매도 없이 스탁론으로 전환대출해
                드립니다.</p>
                </div>
                <div className="mt-2">
                <li className="text-orange-500">스탁론</li>
                <p>이용중인 금리가 높은 스탁론 상품을 저렴한 금리의 여신기관 상품으로 전환대출해 립니다.</p>
                </div>
                <div className="mt-2">
                <li className="text-orange-500">최장 5년
                </li>
                <p>증권사 대비 저렴한 금리로 신용등급에 관계없이 대출이 가능합니다</p>
                </div>
                <div className="mt-2">
                <li className="text-orange-500">최장 5년</li>
                <p>상환의 부담없이 장기간 투자가 가능한 대출상품입니다.</p>
                </div>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default StockLoansSection;
  