import StockChart from "../RealStockData/RealStockData"
const HeroSection = () => {
    return (
      <div className="relative bg-cover bg-center h-[750px] lg:h-[450px] flex items-center" 
        style={{ backgroundImage: "url('/slider1.jpg')" }}>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
  
        {/* Content */}
        <div className="relative z-10   text-white  w-full  justify-center flex  gap-8 items-center">
          <div className="flex justify-center items-center">
          <div className="grid grid-cols-12 px-4 md:px-10  py-10 lg:px-14  2xl:px-52 lg:gap-4">
          
  <div className="col-span-12  lg:col-span-4   2xl:col-span-4  rounded-lg  text-white">
  
    <div className=" text-black  w-full">
    <StockChart symbol="AAPL" />
            
          </div>
          </div>
  <div className="col-span-12  lg:col-span-8 2xl:col-span-8 text-white">
      <div className="mt-3">
            <h1 className="text-3xl lg:text-[35px]  font-bold leading-tight">
            우리는 동일한 이름으로 운영되는 어떤 기관과도 제휴되어 있지 않습니다..
            </h1>
            <p className="mt-4  lg:block text-lg text-gray-300">
            환영합니다<span className="font-semibold">인터내셔널 캐피탈 매니지먼트 주식회사</span> 
            우리는 일반 대중에게 투자 아이디어, 전략 또는 경제적 사건에 대한 관리나 조언을 제공하지 않습니다.
            검토를 원하는 금융 상품이 있다면 ISIN을 포함한 세부 정보를 제공해 주세요.{" "}
              <a href="#" className="text-orange-400 hover:underline">여기를 클릭하여 주세요.</a>
            </p>
            <p className="mt-2 text-gray-300">
            이 사이트는 새로운 기능과 정보로 지속적으로 업데이트되고 있습니다.
            업데이트를 위해 자주 확인해 주세요. 감사합니다.
            </p>
  
            <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg 
              hover:bg-orange-600 transition-all duration-300">
              회사 소개 →
            </button>
          </div>
  </div>
</div>
          </div>
          
       
        </div>
      </div>
    );
  };
  
  export default HeroSection;