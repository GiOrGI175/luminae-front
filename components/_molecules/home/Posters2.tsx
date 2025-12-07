import Image from 'next/image';

export default function Posters2() {
  return (
    <div className='w-full flex gap-5'>
      <div className='max-w-[620px] w-full h-[383px] bg-[#D11FB5] flex items-center'>
        <div className='flex-1 flex flex-col  px-5'>
          <h2 className='lato font-extrabold text-[36px] text-white leading-[46px] pb-4'>
            The Pinky Barbie Edition
          </h2>
          <p className='lato font-normal text-[28px] text-white leading-9 pb-[31px]'>
            Lets play dress up
          </p>
          <button className='flex'>
            <span className='lato font-normal text-[20px] text-white leading-9 underline'>
              Exlopre all category
            </span>
          </button>
        </div>
        <div className='flex-1 relative max-w-[310px] w-full h-96 overflow-hidden'>
          <Image
            src='/img/women3.png'
            fill
            alt='img'
            className='object-cover'
          />
        </div>
      </div>
      <div className='max-w-[620px] w-full h-[383px] bg-[#0186C4] flex items-center'>
        <div className='flex-1 flex flex-col  px-5'>
          <h2 className='lato font-extrabold text-[36px] text-white leading-[46px] pb-4'>
            Best Sellers Everyone Love
          </h2>
          <p className='lato font-normal text-[28px] text-white leading-9 pb-[31px]'>
            poolside glam include
          </p>
          <button className='flex'>
            <span className='lato font-normal text-[20px] text-white leading-9 underline'>
              Exlopre all category
            </span>
          </button>
        </div>
        <div className='flex-1 relative max-w-[310px] w-full h-96 overflow-hidden'>
          <Image
            src='/img/women4.png'
            fill
            alt='img'
            className='object-cover'
          />
        </div>
      </div>
    </div>
  );
}
