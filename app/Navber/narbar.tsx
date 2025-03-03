// import React, { useState } from "react";

// const Navbar = () => {
//   const [active, setActive] = useState("Home");

//   const navLinks = [
//     "홈",
//   "소개",
//   "우리가 제공하는 서비스",
//   "대체 투자",
//   "글로벌 데이터",
//   "고객 포털",
//   "정책",
//   "연락처",
 
//   ];

//   return (
//     <nav className="w-full bg-white shadow-md">
//       <div className=" md:px-10 lg:px-14 xl:px-30 2xl:px-52 flex justify-between items-center py-3 px-6">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-2">
//           {/* <img src="/logo.png" alt="Logo" className="h-10" /> Replace with actual logo */}
//           <div>
//             <h1 className="text-lg font-semibold tracking-wide uppercase">primeasset</h1>
//             <p className="text-xs text-[#FF6900]">CAPITAL MANAGEMENT</p>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <ul className="lg:flex space-x-6 hidden text-medium font-medium">
//           {navLinks.map((link, index) => (
//             <li
//               key={index}
//               onClick={() => setActive(link)}
//               className={`cursor-pointer pb-2    ${
//                 active === link
//                   ? "text-[#FF6900] border-b-2 border-[#FF6900]"
//                   : "text-black hover:text-[#FF6900] hover:border-b-2 hover:border-[#FF6900]"
//               }`}
//             >
//               {link}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger icon

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // State to toggle drawer

  const navLinks = [
    "홈",
    "소개",
    "우리가 제공하는 서비스",
    "대체 투자",
    "글로벌 데이터",
    "고객 포털",
    "정책",
    "연락처",
  ];

  const toggleDrawer = () => {
    setIsOpen(!isOpen); // Toggle the drawer open/close state
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="md:px-10 lg:px-14 xl:px-30 2xl:px-52 flex justify-between items-center py-3 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div>
            <h1 className="text-lg font-semibold tracking-wide uppercase">primeasset</h1>
            <p className="text-xs text-[#FF6900]">CAPITAL MANAGEMENT</p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="lg:flex space-x-6 hidden text-medium font-medium">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => setActive(link)}
              className={`cursor-pointer pb-2 ${
                active === link
                  ? "text-[#FF6900] border-b-2 border-[#FF6900]"
                  : "text-black hover:text-[#FF6900] hover:border-b-2 hover:border-[#FF6900]"
              }`}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center" onClick={toggleDrawer}>
          {isOpen ? (
            <FaTimes className="text-xl text-black" /> // Close icon
          ) : (
            <FaBars className="text-xl text-black" /> // Hamburger icon
          )}
        </div>
      </div>

      {/* Drawer for Mobile */}
      {isOpen && (
        <div className="lg:hidden bg-white z-40 shadow-md absolute top-5 left-0 right-0 p-6 mt-12">
          <ul className="flex flex-col space-y-4 text-medium font-medium">
            {navLinks.map((link, index) => (
              <li
                key={index}
                onClick={() => {
                  setActive(link);
                  setIsOpen(false); // Close the drawer when a link is clicked
                }}
                className={`cursor-pointer pb-2 ${
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
      )}
    </nav>
  );
};

export default Navbar;
