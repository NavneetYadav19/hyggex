import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  const toggleAnswer = (questionNumber) => {
    switch (questionNumber) {
      case 1:
        setShowAnswer1(!showAnswer1);
        break;
      case 2:
        setShowAnswer2(!showAnswer2);
        break;
      case 3:
        setShowAnswer3(!showAnswer3);
        break;
      default:
        break;
    }
  };

  return (
    <div className='px-8 my-16'>
        <div className="mb-8 px-12">    
        <h1 className="text-[#06286E] text-[48px] font-bold font-inter">FAQ</h1>
      </div>
        <div className="flex flex-col items-start w-full py-8 mb-12 px-14">
      <div className="w-[848px] h-[58px]">
        <div className="mb-4 border-2 border-[#217EEC] rounded-[12px] px-4 py-2">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(1)}>
            <h2 className="text-[#28262C] text-2xl font-semibold font-inter mb-2">Can education flashcards be used for all age groups?</h2>
            {showAnswer1 ? <FiChevronUp className="text-[#06286E] text-2xl transition-transform duration-300 transform rotate-180" /> : <FiChevronDown className="text-[#06286E] text-2xl transition-transform duration-300" />}
          </div>
          <div className={`overflow-hidden transition-height duration-300 ${showAnswer1 ? 'h-auto' : 'h-0'}`}>
            <div className="px-4 py-2 bg-white rounded-lg shadow-md">
              <p className="text-[#164EC0] text-lg font-normal font-inter">Answer to question 1</p>
            </div>
          </div>
        </div>
        <div className="mb-4 border-2 border-[#217EEC] rounded-[12px] px-4 py-2">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(2)}>
            <h2 className="text-[#28262C] text-2xl font-semibold font-inter mb-2">How do education flashcards work?</h2>
            {showAnswer2 ? <FiChevronUp className="text-[#06286E] text-2xl transition-transform duration-300 transform rotate-180" /> : <FiChevronDown className="text-[#06286E] text-2xl transition-transform duration-300" />}
          </div>
          <div className={`overflow-hidden transition-height duration-300 ${showAnswer2 ? 'h-auto' : 'h-0'}`}>
            <div className="px-4 py-2 bg-white rounded-lg shadow-md">
              <p className="text-[#164EC0] text-lg font-normal font-inter">Answer to question 2</p>
            </div>
          </div>
        </div>
        <div className="mb-4 border-2 border-[#217EEC] rounded-[12px] px-4 py-2">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(3)}>
            <h2 className="text-[#28262C] text-2xl font-semibold font-inter mb-2">Can education flashcards be used for test preparation?</h2>
            {showAnswer3 ? <FiChevronUp className="text-[#06286E] text-2xl transition-transform duration-300 transform rotate-180" /> : <FiChevronDown className="text-[#06286E] text-2xl transition-transform duration-300" />}
          </div>
          <div className={`overflow-hidden transition-height duration-300 ${showAnswer3 ? 'h-auto' : 'h-0'}`}>
            <div className="px-4 py-2 bg-white rounded-lg shadow-md">
              <p className="text-[#164EC0] text-lg font-normal font-inter">Answer to question 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQ;





