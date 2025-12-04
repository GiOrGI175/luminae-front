'use client';

import TrendingItem from '@/components/_molecules/home/TrendingItem';
import { useProductsStore } from '@/store/useProductsStore';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Trending() {
  const Trending = useProductsStore((state) => state.Trending);
  const fetchTranding = useProductsStore((state) => state.fetchTranding);

  useEffect(() => {
    fetchTranding();
  }, [fetchTranding]);

  return (
    <section className='w-full flex justify-center mt-[84px]'>
      <div className='max-w-[1440px] w-full flex justify-center max-md:pt-8 px-5'>
        <div className='max-w-[1260px]  w-full flex flex-col'>
          <div className='flex justify-between'>
            <p className='lato font-medium text-[28px] leading-5'>
              Trending must-haves
            </p>
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
          <div className='pt-12 w-full flex max-xl:gap-5 max-xl:flex-col justify-between'>
            {Trending.map((item) => (
              <TrendingItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
