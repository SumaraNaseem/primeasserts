import React from "react";
import Time from "/images.jpeg"
import Agent from "/images (1).jpeg"
import Center from "/images (2).jpeg"

const Support = () => {
  const supportData = [
    {
      image: Time, // Replace with actual image URL
      title: "서비스 시간",
      description: "평일 08:30 ~ 18:00",
    },
    {
      image: Agent, // Replace with actual image URL
      title: "이용방법",
      description:
        "이용자분은 먼저 고객센터로 전화를 하신 후 상담원 안내에 따라 원격지원을 해주시기 바랍니다.\n" +
        "원격지원시 고객의 정확한 설명이 상담에 큰 도움이 됩니다.\n" +
        "해당 원격지원은 1:1로 진행되므로 고객의 요청만 처리되며, 교육이 포함되지 않습니다.",
    },
    {
      image: Center, // Replace with actual image URL
      title: "원격요청콜센터",
      description:
        "원격요청콜센터는 고객님께서 원하실 시 반드시 프로그램 설치 없이 웹브라우저를 이용하여 고객의 화면을 쉽게 보실 수 있도록 원활하게 도와드리는 서비스 입니다.",
    },
  ];

  return (
    <div className="w-full my-10 px-52 mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">원격지원요청</h2>
      <div className="space-y-6">
        {supportData.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 border-b pb-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-24 object-cover rounded"
            />
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 whitespace-pre-line">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 bg-[#FF6900] text-white px-6 py-2 rounded text-lg">
        원격지원 요청
      </button>
    </div>
  );
};

export default Support;
