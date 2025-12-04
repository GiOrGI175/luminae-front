'use client';

import { trendingItem } from '@/store/useProductsStore';
import Image from 'next/image';

type Props = {
  item: trendingItem;
};

export default function TrendingItem({ item }: Props) {
  return (
    <div className='max-w-[406px] w-full h-[437px] bg-[#262626] rounded-[10px] overflow-hidden'>
      <div className='relative w-full h-[344px]'>
        <Image src={item.image} fill className='object-cover' alt='img' />
      </div>
      <div className='w-full h-[93px] px-5 flex justify-between items-center'>
        <div className='flex flex-col'>
          <span className='lato font-bold text-[16px] text-white leading-[25px]'>
            {item.title}
          </span>
          <span className='lato mt-[13px] font-normal text-[14px] text-[#C4C4C4] leading-5'>
            {item.subtitle}
          </span>
        </div>
        <button className='max-w-[146px] w-full  h-11 rounded-[10px] flex justify-center items-center border border-[#D9D9D9]'>
          <span className='lato font-bold text-[14px] text-white leading-5'>
            ${item.price} Shop Now
          </span>
        </button>
      </div>
    </div>
  );
}
