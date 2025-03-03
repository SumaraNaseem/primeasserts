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
export function Welcome() {
  return (
    <div>
      <Navbar/>
       <HeroSection/>
       <ConsultationForm/>
      <PrimeStockLoan/>
      <StockLoan/>
      <StockLoanSection/>
      <LoanProducts/>
      <FundingSection/>
      <FAQs/>
      <LoanProcess/> 
     
      {/* <FormData/> */}
      <Support/>
      <Footer/> 

    </div>
    
  );
}