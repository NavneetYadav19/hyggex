import React from 'react';
import { GoHome } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";

const HomeSection = () => {
  return (
    <section className="flex items-center my-8 px-8">
      <div className="flex items-center px-4">
        <GoHome size={24} className="mr-2 text-[#696671] w-[20px] h-[21.25px]" />
        <MdKeyboardArrowRight className="text-[#06286E]" />
      </div>

      <ul className="flex items-center space-x-4">
        <li className='flex text-[#696671] font-medium items-center'><span>Flashcard</span><MdKeyboardArrowRight className="ml-1 text-[#06286E]" /></li>
        <li className='flex text-[#696671] font-medium items-center'><span>Mathematics</span><MdKeyboardArrowRight className="ml-1 text-[#06286E]" /></li>
        <li className='flex text-[#06286E] font-semibold items-center'><span>Relation and Function</span></li>
      </ul>
      
      
    </section>
  );
};

export default HomeSection;
