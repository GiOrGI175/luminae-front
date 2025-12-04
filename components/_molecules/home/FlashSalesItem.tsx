'use client';

import Timer from '@/components/_atoms/home/Timer';
import { useCountdown } from '@/hooks/useCountdown';
import { FlashSaleItem } from '@/store/useProductsStore';
import Image from 'next/image';

type Props = {
  item: FlashSaleItem;
};

export default function FlashSalesItem({ item }: Props) {
  return (
    <div className='max-w-[300px] w-full h-[380px]  rounded-lg shadow-xl py-4'>
      <div className='w-full flex flex-col  items-center'>
        <span className='lato font-extrabold text-[16px] text-[#9D9D9D] leading-5 pb-[5px]'>
          Deal of the Day
        </span>
        <Timer />
      </div>
    </div>
  );
}
