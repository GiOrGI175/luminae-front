'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Filter from './Filter';

export default function Sort() {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-[1440px] w-full flex justify-center px-5'>
        <div className='max-w-[1260px] h-[68px] w-full flex justify-between items-center'>
          <div className='flex gap-8'>
            <button onClick={() => setOpen((pv) => !pv)}>
              <p className='lato font-bold text-[20px] leading-5 text-[#262626] '>
                Women
              </p>
            </button>
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
      {open && (
        <div
          className='fixed inset-0  backdrop-blur-sm z-50 flex justify-start overflow-auto'
          onClick={() => setOpen(false)}
        >
          <div
            className='w-full max-w-[303px] bg-white p-5 overflow-auto'
            onClick={(e) => e.stopPropagation()}
          >
            <Filter />
          </div>
        </div>
      )}
    </div>
  );
}
