'use client';

import Posters1 from '@/components/_molecules/home/Posters1';

export default function Posters() {
  return (
    <section className='w-full flex  justify-center'>
      <div className='max-w-[1440px] w-full flex justify-center items-center px-5 md:px-[60px]'>
        <div className='max-w-[1260px]  w-full flex'>
          <Posters1 />
        </div>
      </div>
    </section>
  );
}
