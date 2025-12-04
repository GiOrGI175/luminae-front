// TrendingSwiper/index.tsx
'use client';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useProductsStore } from '@/store/useProductsStore';
import TrendingItem from '../TrendingItem';
import './styles.css';

export default function TrendingSwiper() {
  const Trending = useProductsStore((state) => state.Trending);
  const fetchTranding = useProductsStore((state) => state.fetchTranding);

  useEffect(() => {
    fetchTranding();
  }, [fetchTranding]);

  return (
    <div className='w-full trending-swiper'>
      <div className='lg:hidden pt-4'>
        <Swiper
          centeredSlides={false}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 12,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
          }}
          slidesPerView='auto'
          spaceBetween={16}
          className='w-full'
        >
          {Trending.map((item) => (
            <SwiperSlide key={item.id}>
              <TrendingItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
