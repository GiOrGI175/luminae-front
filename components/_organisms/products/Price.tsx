'use client';

import { Slider } from '@/components/ui/slider';
import Image from 'next/image';
import { useState } from 'react';

export default function Price() {
  const [open, setOpen] = useState(true);
  const [price, setPrice] = useState([0, 500]);

  return (
    <div className='relative max-w-[213px] w-full mt-7 pb-7 flex flex-col  duration-500'>
      <button
        onClick={() => setOpen((pv) => !pv)}
        className='w-full mb-3 flex justify-between'
      >
        <p className=' lato font-bold text-[14px] leading-5 text-[#262626] '>
          COLOR
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
        <div className='space-y-4'>
          <div className='flex items-center gap-4'>
            <input
              type='number'
              className='border rounded px-3 py-2 w-24'
              value={price[0]}
              onChange={(e) => setPrice([Number(e.target.value), price[1]])}
            />
            <span>—</span>
            <input
              type='number'
              className='border rounded px-3 py-2 w-24'
              value={price[1]}
              onChange={(e) => setPrice([price[0], Number(e.target.value)])}
            />
          </div>

          <Slider
            value={price}
            onValueChange={setPrice}
            min={0}
            max={500}
            step={1}
            className='w-full'
          />

          <div className='flex justify-between text-sm text-gray-500'>
            <span className=' lato font-normal text-[14px] leading-5 text-[#9D9D9D] '>
              Minimum $0
            </span>
            <span className=' lato font-normal text-[14px] leading-5 text-[#9D9D9D] '>
              Maximum $500
            </span>
          </div>

          <p className=' lato font-normal text-[14px] leading-5 text-[#555555] '>
            878 products found
          </p>
        </div>
      )}
    </div>
  );
}
