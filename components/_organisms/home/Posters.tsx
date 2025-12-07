'use client';

import Posters1 from '@/components/_molecules/home/Posters1';
import Posters2 from '@/components/_molecules/home/Posters2';
import SwiperPoster from '@/components/_molecules/home/SwiperPoster';

export default function Posters() {
  return (
    <section className='w-full flex flex-col  items-center mt-[73px]'>
      <div className='max-w-[1440px] w-full flex justify-center items-center px-5 '>
        <div className='max-w-[1260px]  w-full flex'>
          <Posters1 />
        </div>
      </div>
      <SwiperPoster />
      <div className='max-w-[1440px] w-full flex justify-center items-center px-5 '>
        <div className='max-w-[1260px]  w-full flex'>
          <Posters2 />
        </div>
      </div>
    </section>
  );
}
