import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-8">
      <div className=" px-4 md:px-10  lg:px-14 xl:px-30 2xl:px-52 grid md:grid-cols-3 gap-8">
        {/* Office Section */}
        <div className="">
          <h3 className="text-lg font-semibold mb-4">우리 사무실</h3>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> 123 거리, 뉴욕, 미국
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> +012 345 67890
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> info@example.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">회사 소개</a></li>
            <li><a href="#" className="hover:text-gray-400">우리가 제공하는 서비스</a></li>
            <li><a href="#" className="hover:text-gray-400">대체 투자</a></li>
            <li><a href="#" className="hover:text-gray-400">글로벌 데이터</a></li>
            <li><a href="#" className="hover:text-gray-400">클라이언트 포털</a></li>
            <li><a href="#" className="hover:text-gray-400">사이트 맵</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">법률</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">개인정보 보호정책</a></li>
            <li><a href="#" className="hover:text-gray-400">문의하기</a></li>
            <li><a href="#" className="hover:text-gray-400">우리의 서비스</a></li>
            <li><a href="#" className="hover:text-gray-400">이용 약관</a></li>
            <li><a href="#" className="hover:text-gray-400">지원</a></li>
            <li><a href="#" className="hover:text-gray-400">뒤로</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-white mt-8 border-t border-white pt-4">
        &copy; 2021 - 2024 국제 자본 관리 주식회사.
      </div>
    </footer>
  );
};

export default Footer;
