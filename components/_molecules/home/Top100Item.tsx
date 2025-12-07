'use client';

import { TopItem } from '@/store/useProductsStore';
import Image from 'next/image';

type Props = {
  item: TopItem;
};

export default function Top100Item({ item }: Props) {
  return (
    <div
      className='max-xl:max-w-full basis-[300px]  max-xl:grow
        max-xl:shrink max-xl:min-w-[200px] max-w-[300px] w-full h-[480px] rounded-2xl overflow-hidden flex flex-col shadow-xl '
    >
      <div className='relative max-xl:max-w-full max-w-[300px] w-full h-[327px]'>
        <Image
          src={item.image}
          fill
          alt='img'
          className='object-cover max-xl:object-top'
        />
      </div>
      <div className='w-full flex flex-col items-center p-5'>
        <div className='w-full flex flex-col'>
          <div className='w-full flex items-center justify-between'>
            <div className='flex flex-col'>
              <span className='lato font-bold text-[12px] text-[#262626] leading-5'>
                {item.brand}
              </span>
              <span className='lato font-normal text-[10px] text-[#555555] leading-5'>
                {item.title}
              </span>
            </div>
            <div>
              <Image
                src='/svg/Vector.svg'
                width={20}
                height={18}
                alt='favorite'
              />
            </div>
          </div>
          <div className='flex'>
            <Image src='/svg/stars.svg' width={45} height={12} alt='stars' />
            <span className='lato font-normal text-[12px] text-[#555555] leading-5'>
              ({item.rating})
            </span>
          </div>
          <div className='max-w-[151px] flex justify-between'>
            <span className='lato font-bold text-[12px] text-[#FF2E00] leading-5'>
              ${item.price}
            </span>
            <span className='lato font-bold text-[12px] text-[#555555] leading-5'>
              ${item.oldPrice}
            </span>
            <span className='font-normal text-[8px] text-[#FF2E00] leading-5'>
              {item.discount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
