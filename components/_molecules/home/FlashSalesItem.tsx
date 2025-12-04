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
    <div
      className='max-xl:max-w-full basis-[300px]  max-xl:grow
        max-xl:shrink max-xl:min-w-[200px] max-w-[300px] w-full h-[380px]  rounded-lg shadow-xl py-4'
    >
      <div className='w-full flex flex-col  items-center'>
        <span className='lato font-extrabold text-[16px] text-[#9D9D9D] leading-5 pb-[5px]'>
          Deal of the Day
        </span>
        <Timer dealEndTime={item.dealEndTime} />
      </div>
      <div className='flex justify-center items-center my-[17px]'>
        <Image src={item.image} width={241} height={129} alt='img' />
      </div>
      <div className=' w-full flex justify-center px-[30px] max-xl:px-[47px]'>
        <div className='w-full flex flex-col  mt-4 gap-1.5'>
          <div className='flex flex-col gap-1.5 max-md:flex-row'>
            <span className='lato font-extrabold text-[16px] text-[#262626] leading-5'>
              {item.title}
            </span>
            <span className='lato font-normal text-[12px] text-[#555555] leading-5'>
              Shoulder bag-White-Plain
            </span>
          </div>
          <div className='flex flex-col gap-1.5 max-md:flex-row '>
            <div className='flex w-full'>
              <Image src='/svg/stars.svg' width={45} height={12} alt='stars' />
              <span className='lato font-normal text-[12px] text-[#555555] leading-5'>
                ({item.rating})
              </span>
            </div>
            <div className='max-w-[151px] flex justify-between'>
              <span className='lato font-bold text-[12px] text-[#FF2E00] leading-5'>
                ${item.salePrice}
              </span>
              <span className='lato font-bold text-[12px] text-[#555555] leading-5'>
                ${item.originalPrice}
              </span>
              <div className='max-w-[33px] w-full h-4  flex justify-center items-center bg-[#FF2E00]'>
                <span className='font-normal text-[8px] text-white'>-40%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
