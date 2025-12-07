'use client';

import Image from 'next/image';
import { useState } from 'react';

const styles = [
  'Casual',
  'Business casual',
  'Bohemian',
  'Minimalist',
  'Uniqlo',
  'Zara',
  'Gucci',
  'Mango',
  'Ralph Lauren',
  'Calvin Klein',
  'Rachel Pally',
];

export default function Style() {
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
        <div className='flex flex-col mt-6 gap-5'>
          {styles.map((label) => (
            <div key={label} className='flex items-center gap-2'>
              <input type='checkbox' value={label} />
              <span className='lato font-normal text-[14px] leading-5 text-[#555555]'>
                {label}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className='absolute bottom-0 left-[-25px] w-[263px] h-px bg-[#D9D9D9]' />
    </div>
  );
}
