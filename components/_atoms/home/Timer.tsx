import { useCountdown } from '@/hooks/useCountdown';
import React from 'react';

export default function Timer() {
  const { hours, minutes, seconds } = useCountdown(item.dealEndTime);

  return (
    <div>
      <div className='flex gap-2 text-[22px] font-bold'>
        <span className='lato font-extrabold text-[18px] text-[#262626] leading-[30px]'>
          {hours.toString().padStart(2, '0')}
        </span>
        <Image src='/svg/Colon.svg' width={14} height={14} alt='colon' />
        <span className='lato font-extrabold text-[18px] text-[#262626] leading-[30px]'>
          {minutes.toString().padStart(2, '0')}
        </span>
        <Image src='/svg/Colon.svg' width={14} height={14} alt='colon' />
        <span className='lato font-extrabold text-[18px] text-[#262626] leading-[30px]'>
          {seconds.toString().padStart(2, '0')}
        </span>
      </div>

      <div className='flex gap-[30px] text-[10px] text-gray-500'>
        <span className='lato font-normal text-[12px] text-[#9D9D9D] leading-5'>
          hour
        </span>
        <span className='lato font-normal text-[12px] text-[#9D9D9D] leading-5'>
          min
        </span>
        <span className='lato font-normal text-[12px] text-[#9D9D9D] leading-5'>
          sec
        </span>
      </div>
    </div>
  );
}
