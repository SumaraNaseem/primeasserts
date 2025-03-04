import { FaShieldAlt, FaChartLine, FaHandHoldingUsd, FaBalanceScale, FaMoneyCheckAlt } from 'react-icons/fa';

const points = [
  {
    icon: <FaShieldAlt className="text-blue-500 text-3xl" />, 
    title: "Stock and Deposit Guarantee", 
    description: [
      "Acquisition of collateral rights for brokerage transactions", 
      "Real-time monitoring of collateral maintenance ratio"
    ]
  },
  {
    icon: <FaChartLine className="text-blue-500 text-3xl" />, 
    title: "Stock Type Risk Management", 
    description: [
      "Compliance with 'Financial Investment Business Risk Management Regulations'", 
      "Real-time stock risk management and proactive response"
    ]
  },
  {
    icon: <FaHandHoldingUsd className="text-blue-500 text-3xl" />, 
    title: "Counter-Selling for Investor Protection", 
    description: [
      "If the collateral maintenance ratio falls, counter-selling is carried out", 
      "Quick response to prevent investor losses", 
      "Settlement of collateral stocks within D+5 days"
    ]
  },
  {
    icon: <FaBalanceScale className="text-blue-500 text-3xl" />, 
    title: "RMS4 Loss Compensation Guarantee", 
    description: [
      "Loss compensation program based on collateral management agreements", 
      "Stable stock loss risk management"
    ]
  },
  {
    icon: <FaMoneyCheckAlt className="text-blue-500 text-3xl" />, 
    title: "Financial Compensation Guarantee", 
    description: [
      "RMS4 loss compensation guarantee provides additional (PLUS) compensation", 
      "Compensation for losses in securities trading"
    ]
  }
];

export default function RiskManagement() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {points.map((point, index) => (
        <div key={index} className="flex items-start space-x-4 border p-4 rounded-lg shadow-md">
          {point.icon}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Point {index + 1}: {point.title}</h3>
            <ul className="list-disc list-inside text-gray-600">
              {point.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
