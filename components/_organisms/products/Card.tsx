import CardFoto from '@/components/_molecules/products/CardFoto';
import React from 'react';

export default function Card() {
  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-[1440px] w-full flex justify-center px-5'>
        <div className='max-w-[1260px] w-full flex items-center'>
          <CardFoto />
        </div>
      </div>
    </div>
  );
}
