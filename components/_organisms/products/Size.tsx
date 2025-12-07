'use client';

import Image from 'next/image';
import { useState } from 'react';

const sizes = ['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

export default function Size() {
  const [open, setOpen] = useState(true);

  return (
    <div className='relative max-w-[213px] w-full mt-7 pb-7 flex flex-col  duration-500'>
      <button
        onClick={() => setOpen((pv) => !pv)}
        className='w-full mb-3 flex justify-between'
      >
        <p className=' lato font-bold text-[14px] leading-5 text-[#262626] '>
          SIZE
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
        <div className='max-w-[213px] w-full flex flex-wrap gap-1 mt-6 '>
          {sizes.map((size) => (
            <button
              key={size}
              className='w-[50px] h-[30px] flex justify-center items-center rounded border border-[#D9D9D9]'
            >
              <span className='lato font-bold text-[14px] leading-5 text-[#555555] '>
                {size}
              </span>
            </button>
          ))}
        </div>
      )}
      <div className='absolute bottom-0 left-[-25px] w-[263px] h-px bg-[#D9D9D9]' />
    </div>
  );
}
