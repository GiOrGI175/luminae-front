'use client';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useProductsStore } from '@/store/useProductsStore';
import FlashSalesItem from '../FlashSalesItem';
import './styles.css';

export default function SalesSwiper() {
  const flashSales = useProductsStore((s) => s.FleshSales);
  const fetchFleshSales = useProductsStore((s) => s.fetchFleshSales);

  useEffect(() => {
    fetchFleshSales();
  }, [fetchFleshSales]);

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
            640: {
              slidesPerView: 3.2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
          }}
          className='w-full'
        >
          {flashSales.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='pt-2'>
                <FlashSalesItem item={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
