import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#8e44ad] text-[#f5ecff] py-6 px-4 sm:px-10 font-change3 text-sm sm:text-base">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-3 sm:mb-0">&copy; {new Date().getFullYear()} Arunima. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#c9a4ff] transition-colors duration-300">Privacy</a>
          <a href="#" className="hover:text-[#c9a4ff] transition-colors duration-300">Terms</a>
          <a href="#" className="hover:text-[#c9a4ff] transition-colors duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;