import Image from 'next/image';

export default function Posters1() {
  return (
    <div className='w-full flex gap-5'>
      <div className='md:max-w-[620px] w-full h-[383px] max-md:h-[280px] bg-[#BF2E3B] flex items-center'>
        <div className='flex-1 flex flex-col  px-5'>
          <h2 className='lato font-extrabold text-[36px] text-white leading-[46px] pb-4'>
            Never-Ending Summer
          </h2>
          <p className='lato font-normal text-[28px] text-white leading-9 pb-[31px]'>
            Throwback Shirts & all-day dressed
          </p>
          <button className='flex'>
            <span className='lato font-normal text-[20px] text-white leading-9 underline'>
              Exlopre all category
            </span>
          </button>
        </div>
        <div className='flex-1 relative max-w-[310px] w-full h-96 max-md:h-[280px] overflow-hidden'>
          <Image
            src='/img/Rectangle 1078.png'
            fill
            alt='img'
            className='object-cover object-top'
          />
        </div>
      </div>
      <div className='max-w-[620px] max-md:hidden w-full h-[383px] bg-[#1D5159] flex items-center'>
        <div className='flex-1 flex flex-col  px-5'>
          <h2 className='lato font-extrabold text-[36px] text-white leading-[46px] pb-4'>
            Never-Ending Summer
          </h2>
          <p className='lato font-normal text-[28px] text-white leading-9 pb-[31px]'>
            Throwback Shirts & all-day dressed
          </p>
          <button className='flex'>
            <span className='lato font-normal text-[20px] text-white leading-9 underline'>
              Exlopre all category
            </span>
          </button>
        </div>
        <div className='flex-1 relative max-w-[310px] w-full h-96 overflow-hidden'>
          <Image
            src='/img/Rectangle.png'
            fill
            alt='img'
            className='object-cover'
          />
        </div>
      </div>
    </div>
  );
}
