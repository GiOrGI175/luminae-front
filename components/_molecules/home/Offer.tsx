import React from 'react';

export default function Offer() {
  return (
    <div className='w-[228px] h-[163px] flex flex-col bg-white'>
      <div className='h-[1223px] flex flex-col justify-center items-center'>
        <span className='lato font-bold text-[20px] text-[#262626]'>
          Summer Essentials
        </span>
        <span className='lato font-bold text-[20px] text-[#FF2E00]'>
          20% off
        </span>
      </div>
      <div className='bg-[#262626]'>
        <span className='lato font-bold text-[20px] text-white'>
          19 Jul-30 Jul
        </span>
      </div>
    </div>
  );
}
