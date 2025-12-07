import Image from 'next/image';
import React from 'react';

export default function Sort() {
  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-[1440px] w-full flex justify-center px-5'>
        <div className='max-w-[1260px] h-[68px] w-full flex justify-between items-center'>
          <div className='flex gap-8'>
            <p className='lato font-bold text-[20px] leading-5 text-[#262626] '>
              Women
            </p>
            <span className='lato font-normal text-[17px] leading-5 text-[#555555] '>
              110 items
            </span>
          </div>
          <button className='w-[127px] h-10 px-[10] flex items-center justify-between border rounded-sm '>
            <span className='lato font-normal text-[14px] leading-5 text-[#555555] '>
              Sort by order
            </span>
            <div className=''>
              <Image
                src='/svg/Arrow_black.svg'
                width={15}
                height={15}
                alt='arrow'
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
