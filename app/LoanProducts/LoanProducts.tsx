import React from "react";
import Productone from "/product.jpg"
import ProductTwo from "/product 2.png"
import productThree from "/Product 3.png"
import product4 from "/Product 4.png"
import product5 from "/product 5.png?url"
import product6 from "/product 6.png"
import product7 from "/product 7.png"
import product8 from "/product 8.png?url"
import product9 from "/product 9.png?url"
import product10 from "/product 10.jpeg?url"
import product11 from "/product 11.jpeg"
import product12 from "/product 12.png"
import product13 from "/product 13.png?url"
import product14 from "/product 14.png"
import product15 from "/product 15.png"

const LoanProducts = () => {
  const companies = [
    { name: "키움증권", logo: Productone },
    { name: "DB금융투자", logo: ProductTwo },
    { name: "상상인증권", logo: productThree },
    { name: "대신증권", logo: product4 },
    { name: "NH투자증권", logo: product5 },
    { name: "한국투자증권", logo: product6 },
    { name: "하나증권", logo: product7 },
    { name: "KB증권", logo: product8 },
    { name: "IBK투자증권", logo: product9 },
    { name: "LS증권", logo: product10 },
    { name: "SK증권", logo: product11 },
    { name: "교보증권", logo: product12 },
    { name: "다올투자증권", logo: product13},
    { name: "메리츠증권", logo: product14 },
    { name: "미래에셋증권", logo: product15 },
  ];

  return (
    <div className="px-4 md:px-10  py-10 lg:px-14 xl:px-30 2xl:px-52">
      <h2 className="text-lg font-bold text-black mb-4 border-b-2 border-black inline-block">
        대출상품
      </h2>
      <div className="grid 2xl:grid-cols-8 xl:grid-cols-6 px-2 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 xs:grid-cols-3 grid-cols-2 gap-1 border">
        {companies.map((company, index) => (
          <div key={index} className="flex justify-center  px-2  items-center">
            <div className="py-5">
              <div className="h-28 w-34 sm:h-28 sm:w-34 lg:h-36 xl:h-42 xl:w-42">
              <img
              src={company.logo} // Update path as needed
              alt={company.name}
              className=" w-full h-full bg-white border border-gray-300 object-contain"
            />
              </div>
           
            <p className="text-sm text-center text-gray-700 mt-2">{company.name}</p>
            </div>
            
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default LoanProducts;
