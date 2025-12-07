import Image from 'next/image';

export default function SwiperPoster() {
  return (
    <div className='w-full h-[221px] flex justify-center  bg-[#F7DDD0]'>
      <div className='max-w-[1260px]  w-full h-full flex justify-between items-center'>
        <div>
          <Image src='/svg/left.svg' width={32} height={32} alt='left' />
        </div>
        <div className='w-full h-full flex items-center mx-[70px]'>
          <div className='w-full'>
            <h3 className='lato font-bold text-[24px] text-[#465D6B] leading-5 pb-4'>
              MagSafe
            </h3>
            <p className='max-w-[493px] w-full mt-4 lato font-medium text-[20px] text-[#555555] leading-5 pb-4'>
              Snap on a magnetic case, wallet, or both. And get faster wireless
              charging.
            </p>
          </div>
          <div className='relative max-w-[493px] w-full h-auto'>
            <Image
              src='/img/Iphone.png'
              width={493}
              height={221}
              alt='img'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
        <div>
          <Image src='/svg/right2.svg' width={32} height={32} alt='right' />
        </div>
      </div>
    </div>
  );
}
