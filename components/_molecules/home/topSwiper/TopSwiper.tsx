'use client';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useProductsStore } from '@/store/useProductsStore';
import FlashSalesItem from '../FlashSalesItem';
import './styles.css';
import Top100Item from '../Top100Item';

export default function TopSwiper() {
  const Top100 = useProductsStore((state) => state.Top100);
  const fetchTops = useProductsStore((state) => state.fetchTops);

  useEffect(() => {
    fetchTops();
  }, [fetchTops]);

  return (
    <div className='w-full'>
      <div className='lg:hidden pt-4'>
        <Swiper
          centeredSlides={false}
          breakpoints={{
            0: {
              slidesPerView: 1.6,
              spaceBetween: 12,
            },
            480: {
              slidesPerView: 2.5,
              spaceBetween: 12,
            },
            // 520: {
            //   slidesPerView: 3.2,
            //   spaceBetween: 15,
            // },
            // 768: {
            //   slidesPerView: 4,
            //   spaceBetween: 12,
            // },
          }}
          className='w-full'
        >
          {Top100.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='pt-2'>
                <Top100Item item={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
