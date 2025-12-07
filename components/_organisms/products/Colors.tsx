'use client';

import Image from 'next/image';
import { useState } from 'react';

const colors = [
  { name: 'Red', value: '#FF3B30' },
  { name: 'Cream', value: '#F7E3D0' },
  { name: 'Blue', value: '#3A7BFF' },
  { name: 'Orange', value: '#FFA84A' },
  { name: 'Yellow', value: '#F9D66A' },
  { name: 'Green', value: '#34C759' },
  { name: 'Purple', value: '#A259FF' },
  { name: 'Pink', value: '#FF4FD8' },
  { name: 'Brown', value: '#8B6A52' },
  { name: 'Black', value: '#2E2E2E' },
  { name: 'Gray', value: '#D1D1D6' },
  { name: 'White', value: '#FFF' },
];

export default function Colors() {
  const [open, setOpen] = useState(true);

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
        <div className='max-w-[213px] w-full flex flex-wrap gap-3 mt-6 '>
          {colors.map((c) => (
            <button
              key={c.name}
              className='w-6 h-6 rounded-full cursor-pointer border'
              style={{
                backgroundColor: c.value,
                borderColor: c.value === '#FFF' ? '#D1D1D6' : c.value,
              }}
            />
          ))}
        </div>
      )}
      <div className='absolute bottom-0 left-[-25px] w-[263px] h-px bg-[#D9D9D9]' />
    </div>
  );
}
