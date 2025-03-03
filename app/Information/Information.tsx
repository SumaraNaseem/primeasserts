import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const CTA = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    amount_of_shares_held: '',
    phone: '',
    application_amount: '',
    person_in_charge: '',
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
      user_name: formData.name,   // Ensure variable names match your application_amountJS template
      user_amount_of_shares_held: formData.amount_of_shares_held,
      user_phone: formData.phone,
      user_application_amount: formData.application_amount,
      user_person_in_charge: formData.person_in_charge,
      
    };
  
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("amount_of_shares_held sent successfully!", response);
        alert("Message sent successfully!");
  
        // Reset form
        setFormData({
          name: '',
          amount_of_shares_held: '',
          phone: '',
          application_amount: '',
          person_in_charge: '',
        });
      })
      .catch((error) => {
        console.error("Error sending amount_of_shares_held:", error);
        alert("Failed to send message. Try again later.");
      });
  };
  
  return (
    <div
    id="contact" 
      className="rounded-[20px] px-52 box-shadow flex-col sm:flex-row"
     
    >
      {/* Left Section: Heading */}
          <h1
            className="mt-4 pb-4 sm:mt-5 font-semibold text-nowrap  text-[28px] sm:text-[50px] leading-tight sm:leading-[50.8px]"
            style={{ fontFamily: "Orbitron, sans-serif", }}
          >
            질문하기
          </h1>
      {/* Right Section: Form */}
     
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* First Row: Name and amount_of_shares_held */}
          <div style={{ display: "flex", gap: "1rem", flexDirection: "row", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "200px" }}>
              <label htmlFor="name" style={{marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: 'bold' }}>
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
                    marginTop:"8px",
                    fontFamily: "Play, sans-serif",
                    // backgroundColor: "#23236a",
                    border:"1px solid black",
                    width: "100%",
                    boxSizing: "border-box",
                }}
              />
            </div>
            <div style={{ flex: 1, minWidth: "200px" }}>
              <label htmlFor="amount_of_shares_held" style={{marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: 'bold' }}>
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
                    marginTop:"8px",
                    fontFamily: "Play, sans-serif",
                    border:"1px solid black",
                    width: "100%",
                    boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          {/* Second Row: Phone Number and amount_of_shares_held */}
          <div style={{ display: "flex", gap: "1rem", flexDirection: "row", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "200px" }}>
              <label htmlFor="phone" style={{ marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: 'bold' }}>
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
                    marginTop:"8px",
                    fontFamily: "Play, sans-serif",
                    // backgroundColor: "#23236a",
                    border:"1px solid black",
                    width: "100%",
                    boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ flex: 1, minWidth: "200px" }}>
              <label htmlFor="amount_of_shares_held" style={{marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: 'bold' }}>
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
                    marginTop:"8px",
                    fontFamily: "Play, sans-serif",
                    // backgroundColor: "#23236a",
                    border:"1px solid black",
                    width: "100%",
                    boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          {/* person_in_charge and Message */}
          <div>
            <label htmlFor="person_in_charge" style={{marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: 'bold' }}>
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
                marginTop:"8px",
                fontFamily: "Play, sans-serif",
                // backgroundColor: "#23236a",
                border:"1px solid black",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          

          {/* Submit Button */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" style={{
              padding: "20px 60px",
              borderRadius: "5px",
              backgroundColor: "#FF6900",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              width: '100%',
              fontWeight: "bold",
              fontFamily: "Play, sans-serif"
            }}>
              Send
            </button>
          </div>
        </form>
      </div>
    
  );
};

export default CTA;
