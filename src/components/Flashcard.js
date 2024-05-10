import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { AiOutlineBulb } from "react-icons/ai";
import { IoMdVolumeHigh } from "react-icons/io";
import { IoReloadSharp } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import vector from '../images/Vector (1).png';
import reload from '../images/Reload.png';

const Flashcard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center mb-8">
        <h1 className="mx-2 border-b-2 border-[#06286E] px-4 py-2 text-[#06286E] font-bold">Study</h1>
        <h1 className="mx-2 px-4 py-2 text-[#696671] font-medium">Quiz</h1>
        <h1 className="mx-2 px-4 py-2 text-[#696671] font-medium">Test</h1>
        <h1 className="mx-2 px-4 py-2 text-[#696671] font-medium">Game</h1>
        <h1 className="mx-2 px-4 py-2 text-[#696671] font-medium">Others</h1>
      </div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          key="front"
          className="relative w-[712px] h-[393.19px] rounded-[42.51px] cursor-pointer bg-gradient-to-tr from-[#1F80EB] to-[#051A91] text-white font-bold text-4xl flex justify-center items-center"
          onClick={handleClick}
        >
          <div className='absolute top-8 left-10'>
            <AiOutlineBulb className='text-[#F5F5F5]' />
          </div>
          <div className='absolute top-8 right-10'>
            <IoMdVolumeHigh className='text-[#F5F5F5]' />
          </div>
          <div className="text-white text-center font-lato">
            <h1>9 + 6 + 7x - 2x - 3</h1>
          </div>
        </div>
        <div
          key="back"
          className="relative w-[712px] h-[393.19px] rounded-[42.51px] cursor-pointer bg-gradient-to-br from-[#2284F1] to-[#061C93] text-white font-bold text-4xl flex justify-center items-center"
          onClick={handleClick}
        >
          <div className='absolute top-8 left-10'>
            <AiOutlineBulb className='text-[#F5F5F5]' />
          </div>
          <div className='absolute top-8 right-10'>
            <IoMdVolumeHigh className='text-[#F5F5F5]' />
          </div>
          <div className="text-white text-center font-lato">
            <h1>5x + 12</h1>
          </div>
        </div>
      </ReactCardFlip>
      <div className='flex items-center w-[612px] mt-8'>
        <img src={reload} alt="Hyggex Logo" className="w-[30px] h-[30px] ml-2" />
        <div className='flex items-center justify-center space-x-8 flex-grow'>
          <div className="rounded-full bg-gradient-to-b from-[#1F80EB] to-[#051A91] w-[60px] h-[60px] flex justify-center items-center">
            <MdKeyboardArrowLeft className='text-white text-3xl' />
          </div>
          <p className="text-[#202B37] font-bold text-[24px] mx-2">01/10</p>
          <div className="rounded-full bg-gradient-to-b from-[#1F80EB] to-[#051A91] w-[60px] h-[60px] flex justify-center items-center">
            <MdKeyboardArrowRight className='text-white text-3xl' />
          </div>
        </div>
        <img src={vector} alt="Hyggex Logo" className="w-[30px] h-[30px] ml-2" />
      </div>
    </div>
  );
};

export default Flashcard;
