'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export default function BrandSearch() {
  const [open, setOpen] = useState(true);

  return (
    <div className='relative max-w-[213px] w-full mt-5 pb-7 flex flex-col  duration-500 '>
      <button
        onClick={() => setOpen((pv) => !pv)}
        className='w-full mb-3 flex justify-between'
      >
        <p className='lato font-bold text-[14px] leading-5 text-[#262626] '>
          BRAND
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
        <form className='max-w-[268px] w-full  py-2'>
          <div className='h-9 flex rounded-sm overflow-hidden border border-[#D9D9D9]'>
            <input
              type='text'
              placeholder='Search'
              className='outline-none bg-white text-sm w-full h-full pl-3 lato'
            />

            <button type='submit' className='bg-white pr-2.5'>
              <Image
                src='/svg/Search.svg'
                width={16}
                height={16}
                alt='shearch icon'
              />
            </button>
          </div>
        </form>
      )}
      <div className='absolute bottom-0 left-[-25px] w-[263px] h-px bg-[#D9D9D9]' />
    </div>
  );
}
