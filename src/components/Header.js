import React from 'react';
import logo from '../images/Component 40.png';

const Header = () => {
  return (
    <header className="py-8 px-12 flex justify-between items-center">
      
      <div className="flex items-center">
        <img src={logo} alt="Hyggex Logo" className="w-[191px] h-[39px] mr-2" />
      </div>

      
      <nav>
        <ul className="flex items-center space-x-12" style={{ fontFamily: 'Inter, sans-serif' }}>
          <li><a href="/" className="text-[#3A3740] font-regular">Home</a></li>
          <li><a href="/flashcard" className="text-[#3A3740] font-regular">Flashcard</a></li>
          <li><a href="/contact" className="text-[#3A3740] font-regular">Contact</a></li>
          <li><a href="/faq" className="text-[#3A3740] font-regular">FAQ</a></li>
          <li><button className="bg-gradient-to-b w-[128px] h-[48px] rounded-[32px] from-[#06286E] to-[#164EC0] text-[#FFFFFF] font-medium py-2 px-4">Login</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
