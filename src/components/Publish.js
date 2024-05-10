import React from 'react';
import Frame from '../images/Frame 41.png';
import Frame2 from '../images/Frame.png';

const Publish = () => {
  return (
    <div className="flex justify-between items-center w-full py-8 px-10">
      <div className="flex items-center">
        <img src={Frame} alt="Flashcard" className="w-[217px] h-[116.06px] mr-4" />
      </div>
      <div className="flex items-center">
        <img src={Frame2} alt="Publish" className="w-[60px] h-[60px] mr-4" />
        <h1 className="text-[#06286E] text-[28px] font-semibold">Create Flashcard</h1>
      </div>
    </div>
  );
};

export default Publish;
