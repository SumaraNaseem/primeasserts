import Navbar from "../Navber/narbar";
import PrimeStockLoan from "~/PrimeStockLoan/PrimeStockLoan";
import HeroSection from "../HeroSection/HeroSection";
import Support from "../Support/Support"
import StockLoan from "../StoctLoanInto/StockLoanInto"
import StockLoanSection from "../StockLoanSection/StockLoanSection"
import LoanProducts from "../LoanProducts/LoanProducts"
import FAQs from "../FAQs/FAqs"
import FormData from "../Information/Information"
import LoanProcess from "../LoanProcess/LoanProcess"
import FundingSection from "../FundingSection/FundingSection"
import Footer from "../Footer/Footer"
import ConsultationForm from "~/ConsultantForm/ConsultantForm";
import Apply from "../Apply/Apply"
import InvestmentPlain from "../InvestmentPlan/InvestmentPlain"
import InvestmentInfo from "../InvestmentIno/InvestmentInfo";
import LoanTable from "../LoanTable/LoanTable"
import RiskManagement from "~/RiskManagment/RiskManagment";
export function Welcome() {
  return (
    <div>
      <Navbar/>
       <HeroSection/>
       <Apply/>
      <PrimeStockLoan/>
      <StockLoan/>
      <StockLoanSection/>
      <LoanProducts/>
      <FundingSection/>
      <FAQs/>
      <LoanProcess/> 
      <Support/>
      {/* <InvestmentPlain/>
      <InvestmentInfo/>
      <LoanTable/>
      <RiskManagement/> */}
      <Footer/> 

    </div>
    
  );
}