import Offer from '@/components/_molecules/home/Offer';
import Image from 'next/image';

export default function OfferSection() {
  return (
    <section className='w-full flex justify-center'>
      <div className='max-w-[1440px] w-full flex justify-center px-5 md:px-[60px]'>
        <div className='relative max-w-[1260px]  w-full flex  items-center'>
          <div>
            <Image
              src='/img/left.png'
              width={547}
              height={460}
              alt='left img'
            />
          </div>
          <div>
            <Image
              src='/img/right.png'
              width={893}
              height={460}
              alt='left img'
            />
          </div>

          <div className='absolute top-1/2 left-[480px] -translate-x-1/2 -translate-y-1/2'>
            <Offer />
          </div>
        </div>
      </div>
    </section>
  );
}
