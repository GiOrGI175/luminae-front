'use client';

import { useProductsStore } from '@/store/useProductsStore';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

export default function Products() {
  const Products = useProductsStore((state) => state.Products);
  const fetchProducts = useProductsStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className='w-full flex flex-wrap justify-center gap-5'>
      {Products.map((item) => (
        <Link
          href={`products/${item.id}`}
          key={item.id}
          className='max-lg:max-w-[455px] max-w-[288px] w-full h-[480px] flex flex-col shadow-xl rounded-xl overflow-hidden'
        >
          <div className='relative w-full h-[327px]'>
            <Image src={item.image} fill alt='product img' />
          </div>
          <div className='pt-5 px-5 w-full flex flex-col'>
            <div className='w-full flex justify-between items-center'>
              <div className='mt-1 flex flex-col'>
                <span className='lato font-bold text-[12px] leading-5 text-[#262626] '>
                  {item.brand}
                </span>
                <span className='lato font-normal text-[10px] leading-5 text-[#555555] '>
                  {item.subtitle}
                </span>
              </div>
              <div>
                <Image
                  src='/img/Vector.svg'
                  width={20}
                  height={18}
                  alt='favorite'
                />
              </div>
            </div>
            <div className='mt-3 w-full flex items-center'>
              <div>
                <Image
                  src='/svg/stars.svg'
                  width={120}
                  height={24}
                  alt='rating'
                />
              </div>
              <span className='ml-3 lato font-normal text-[10px] leading-5 text-[#555555] '>
                ({item.reviews})
              </span>
            </div>
            <div className='mt-3 flex gap-3'>
              <span className='lato font-extrabold text-[14px] leading-5 text-[#FF2E00]'>
                ${item.price.current}
              </span>
              <span className='lato font-medium text-[14px] leading-5 text-[#9D9D9D]'>
                ${item.price.old}
              </span>
              <span className='lato font-normal text-[12px] leading-5 text-[#FF2E00]'>
                {item.price.discount}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
