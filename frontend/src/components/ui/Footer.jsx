import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F5A5A] text-[#e5e5e5] py-15 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between">
        
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            {/* Logo */}
            <div className="">
              <img
                src="/logo.png" 
                alt="Treecard Logo"
                className="w-6 h-6"
              />
            </div>
            <span className="font-semibold text-lg">NutriGenie</span>
          </div>
          <p className="text-sm">Copyright © {currentYear}</p>
          <p className="text-sm text-gray-300">Better Diet. Better Lifestyle.</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end w-full md:w-auto">
          {/* Top Links + Contact Button */}
          <div className="flex flex-wrap justify-end items-center gap-4 text-sm font-medium">
            <a href="#" className="hover:text-green-400 border-l border-green-500 pl-3">Home</a>
            <a href="#" className="hover:text-green-400 border-l border-green-500 pl-3">Contact us</a>
            <a href="#" className="hover:text-green-400 border-l border-green-500 pl-3">How it works</a>
            <a href="#" className="hover:text-green-400 border-l border-green-500 pl-3">Privacy policy</a>
            <a href="#" className="hover:text-green-400 border-l border-green-500 pl-3">Our mission</a>
            <a href="#" className="hover:text-green-400 border-l border-green-500 pl-3">Others</a>

            {/* Contact Button */}
            <button className="ml-4 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-500">
              CONTACT US
            </button>
          </div>

          {/* Horizontal line only on right section */}
          <hr className="border-t border-white/40 w-full my-4" />

          {/* Social Icons */}
          <div className="flex gap-4 text-green-400 text-lg">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
