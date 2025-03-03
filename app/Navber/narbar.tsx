import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const navLinks = [
    "홈",
  "소개",
  "우리가 제공하는 서비스",
  "대체 투자",
  "글로벌 데이터",
  "고객 포털",
  "정책",
  "연락처",
  "뒤로",
  ];

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          {/* <img src="/logo.png" alt="Logo" className="h-10" /> Replace with actual logo */}
          <div>
            <h1 className="text-lg font-semibold tracking-wide uppercase">primeasset</h1>
            <p className="text-xs text-[#FF6900]">CAPITAL MANAGEMENT</p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-medium font-medium">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => setActive(link)}
              className={`cursor-pointer pb-2    ${
                active === link
                  ? "text-[#FF6900] border-b-2 border-[#FF6900]"
                  : "text-black hover:text-[#FF6900] hover:border-b-2 hover:border-[#FF6900]"
              }`}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
