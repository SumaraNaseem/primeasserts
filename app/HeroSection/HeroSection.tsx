import React, { useState } from "react";
import StockChart from "../RealStockData/RealStockData";
import emailjs from "@emailjs/browser";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    amount_of_shares_held: "",
    phone: "",
    application_amount: "",
    person_in_charge: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure these match your application_amountJS configuration
    const serviceID = "service_eqwwduu";
    const templateID = "template_ykfj3j8";
    const publicKey = "RsJ7KTR_fyeePU8kv";

    const templateParams = {
      user_name: formData.name, // Ensure variable names match your application_amountJS template
      user_amount_of_shares_held: formData.amount_of_shares_held,
      user_phone: formData.phone,
      user_application_amount: formData.application_amount,
      user_person_in_charge: formData.person_in_charge,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("amount_of_shares_held sent successfully!", response);
        alert("Message sent successfully!");

        // Reset form
        setFormData({
          name: "",
          amount_of_shares_held: "",
          phone: "",
          application_amount: "",
          person_in_charge: "",
        });
      })
      .catch((error) => {
        console.error("Error sending amount_of_shares_held:", error);
        alert("Failed to send message. Try again later.");
      });
  };
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-[750px] lg:h-screen  flex items-center"
        style={{ backgroundImage: "url('/slider1.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        {/* Content */}
        <div className="relative z-10   text-black  w-full px-3 py-5  justify-center flex  gap-8 items-center">
          <div className="">
            {/* Left Section: Heading */}
            <h1
              className="mt-4 pb-4 sm:mt-5 font-semibold text-nowrap  text-white text-[28px] sm:text-[50px] leading-tight sm:leading-[50.8px]"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              질문하기
            </h1>
            {/* Right Section: Form */}
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {/* First Row: Name and amount_of_shares_held */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1, minWidth: "300px" }}>
                  <label
                    htmlFor="name"
                    className="text-white"
                    style={{
                      marginBottom: "0.5rem",
                      fontFamily: "Play, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="이름"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "10px",
                      marginTop: "8px",
                      fontFamily: "Play, sans-serif",
                      color: "white",

                      border: "1px solid white",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <label
                    htmlFor="amount_of_shares_held"
                    className="text-white"
                    style={{
                      marginBottom: "0.5rem",
                      fontFamily: "Play, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    보유 주식 수
                  </label>
                  <input
                    type="text"
                    id="amount_of_shares_held"
                    name="amount_of_shares_held"
                    placeholder="보유 주식 수"
                    value={formData.amount_of_shares_held}
                    onChange={handleChange}
                    style={{
                      padding: "10px",
                      marginTop: "8px",
                      color: "white",
                      fontFamily: "Play, sans-serif",
                      border: "1px solid white",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>
              {/* Second Row: Phone Number and amount_of_shares_held */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <label
                    htmlFor="phone"
                    className="text-white"
                    style={{
                      marginBottom: "0.5rem",
                      fontFamily: "Play, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    전화번호
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="전화번호"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9()#&amp;+*-=.]+"
                    title="Only numbers and phone characters (#, -, *, etc) are accepted."
                    style={{
                      padding: "10px",
                      marginTop: "8px",
                      fontFamily: "Play, sans-serif",
                      color: "white",
                      border: "1px solid white",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div style={{ flex: 1, minWidth: "200px" }}>
                  <label
                    htmlFor="amount_of_shares_held"
                    className="text-white"
                    style={{
                      marginBottom: "0.5rem",
                      fontFamily: "Play, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    신청 금액
                  </label>
                  <input
                    type="amount_of_shares_held"
                    id="application_amount"
                    name="application_amount"
                    placeholder="신청 금액"
                    value={formData.application_amount}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "10px",
                      marginTop: "8px",
                      fontFamily: "Play, sans-serif",
                      color: "white",
                      border: "1px solid white",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              {/* person_in_charge and Message */}
              <div>
                <label
                  htmlFor="person_in_charge"
                  className="text-white"
                  style={{
                    marginBottom: "0.5rem",
                    fontFamily: "Play, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  담당자
                </label>
                <input
                  type="text"
                  id="person_in_charge"
                  name="person_in_charge"
                  placeholder="담당자"
                  value={formData.person_in_charge}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "10px",
                    marginTop: "8px",
                    fontFamily: "Play, sans-serif",
                    color: "white",
                    border: "1px solid white",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              {/* Submit Button */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="submit"
                  style={{
                    padding: "18px 60px",
                    borderRadius: "5px",
                    backgroundColor: "#FF6900",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    width: "100%",
                    marginTop: "15px",
                    fontWeight: "bold",
                    fontFamily: "Play, sans-serif",
                  }}
                >
                  보내기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-12  px-4 md:px-10  py-10 lg:px-14 xl:px-30 2xl:px-52 lg:gap-4">
        <div className="col-span-12  lg:col-span-6   rounded-lg ">
          <div className=" text-black    w-full">
            <StockChart symbol="AAPL" />
          </div>
        </div>
        <div className="col-span-12  lg:col-span-6 text-black">
          <div className="mt-6">
            <h1 className="text-3xl lg:text-[35px]  font-bold leading-tight">
              우리는 동일한 이름으로 운영되는 어떤 기관과도 제휴되어 있지
              않습니다..
            </h1>
            <p className="mt-4 sm:hidden lg:block text-lg text-gray-800">
              환영합니다
              <span className="font-semibold">
                인터내셔널 캐피탈 매니지먼트 주식회사
              </span>
              우리는 일반 대중에게 투자 아이디어, 전략 또는 경제적 사건에 대한
              관리나 조언을 제공하지 않습니다. 검토를 원하는 금융 상품이 있다면
              ISIN을 포함한 세부 정보를 제공해 주세요.{" "}
              <a href="#" className="text-orange-400 hover:underline">
                여기를 클릭하여 주세요.
              </a>
            </p>
            <p className="mt-2 text-gray-800">
              이 사이트는 새로운 기능과 정보로 지속적으로 업데이트되고 있습니다.
              업데이트를 위해 자주 확인해 주세요. 감사합니다.
            </p>

            <button
              className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg 
                      hover:bg-orange-600 transition-all duration-300"
            >
              회사 소개 →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
