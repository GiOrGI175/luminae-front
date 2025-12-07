'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const models = [
  { label: 'Short', count: 60 },
  { label: 'Mid-length', count: 10 },
  { label: 'Sweather', count: 56 },
  { label: 'Party Dresses', count: 80 },
  { label: 'Regular Fit', count: 100 },
];

export default function Model() {
  const [open, setOpen] = useState(true);

  return (
    <div className='relative max-w-[213px] w-full mt-7 pb-7 flex flex-col  duration-500'>
      <button
        onClick={() => setOpen((pv) => !pv)}
        className='w-full mb-3 flex justify-between'
      >
        <p className=' lato font-bold text-[14px] leading-5 text-[#262626] '>
          MODEL
        </p>
        <div>
          <Image
            src='/svg/Arrow_Up.svg'
            width={10}
            height={10}
            alt='arrow'
            className={`${open ? 'duration-500' : 'rotate-180 duration-500'}`}
          />
        </div>
      </button>
      {open && (
        <div className='flex flex-col mt-6 gap-5'>
          {models.map((m) => (
            <div key={m.label} className='h-5 flex justify-between'>
              <span className='lato font-normal text-[14px] leading-5 text-[#555555]'>
                {m.label}
              </span>
              <span className='lato font-normal text-[12px] leading-5 text-[#555555]'>
                {m.count}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className='absolute bottom-0 left-[-25px] w-[263px] h-px bg-[#D9D9D9]' />
    </div>
  );
}
