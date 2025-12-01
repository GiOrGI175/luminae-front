import Image from 'next/image';

export default function Coupons() {
  return (
    <div className='h-[62px] px-[72px] border-l border-r border-[#7B7B7B]'>
      <div className='flex items-center'>
        <Image
          src='/svg/Men cosmetic.svg'
          width={63}
          height={62}
          alt='Coupons img'
        />
        <div className='ml-2.5 flex flex-col'>
          <span className='lato font-bold text-[12px] text-white'>
            Weekly Men's Toiletries Coupons.
          </span>
          <span className='lato font-normal text-[12px] text-[#C4C4C4]'>
            We extend exclusive discounts to our male clientele
          </span>
        </div>
      </div>
    </div>
  );
}
