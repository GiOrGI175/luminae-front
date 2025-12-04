'use client';

import Top100Item from '@/components/_molecules/home/Top100Item';
import TopSwiper from '@/components/_molecules/home/topSwiper/TopSwiper';
import { useProductsStore } from '@/store/useProductsStore';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Top100() {
  const Top100 = useProductsStore((state) => state.Top100);
  const fetchTops = useProductsStore((state) => state.fetchTops);

  useEffect(() => {
    fetchTops();
  }, [fetchTops]);

  return (
    <section className='w-full flex justify-center mt-[84px]'>
      <div className='max-w-[1440px] w-full flex justify-center max-md:pt-8 px-5'>
        <div className='max-w-[1260px]  w-full flex flex-col'>
          <div className='flex justify-between'>
            <p className='lato font-medium text-[28px] leading-5'>Top100</p>
            <button className='flex items-center'>
              <span className='lato font-normal text-[12px] text-[#262626] leading-5'>
                View all
              </span>
              <Image
                src='/svg/right.svg'
                width={24}
                height={24}
                alt='right arrow'
              />
            </button>
          </div>
          <div className='max-md:hidden pt-12 w-full flex max-xl:justify-center gap-5 justify-between max-xl:flex-wrap'>
            {Top100.map((item) => (
              <Top100Item key={item.id} item={item} />
            ))}
          </div>
          <div className='md:hidden'>
            <TopSwiper />
          </div>
        </div>
      </div>
    </section>
  );
}
