import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Office Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Office</h3>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> 123 Street, New York, USA
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
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Who We Serve</a></li>
            <li><a href="#" className="hover:text-gray-400">Alternative Investments</a></li>
            <li><a href="#" className="hover:text-gray-400">Global Data</a></li>
            <li><a href="#" className="hover:text-gray-400">Client Portal</a></li>
            <li><a href="#" className="hover:text-gray-400">Site Map</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Our Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-400">Support</a></li>
            <li><a href="#" className="hover:text-gray-400">Back</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-white mt-8 border-t border-white pt-4">
        &copy; 2021 - 2024 International Capital Management, Inc.
      </div>
    </footer>
  );
};

export default Footer;
