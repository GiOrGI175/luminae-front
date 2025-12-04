import Image from 'next/image';

export default function Posters1() {
  return (
    <>
      <div className='max-w-[620px] w-full h-[383px] bg-[#BF2E3B]'>
        <div>
          <h2 className='lato font-extrabold text-[36px] text-white leading-5'>
            Never-Ending Summer
          </h2>
          <p className='lato font-normal text-[28px] text-white leading-5'>
            Throwback Shirts & all-day dressed
          </p>
          <button className='lato font-normal text-[36px] text-white leading-5 underline'>
            Exlopre all category
          </button>
        </div>
        <div>
          <Image
            src='/img/Rectangle 1078.png'
            width={310}
            height={382}
            alt='img'
          />
        </div>
      </div>
      <div className='max-w-[310px] w-full h-[383px] bg-[#1D5159] flex justify-between'>
        <div>
          <h2 className='lato font-extrabold text-[36px] text-white leading-5'>
            The most famous sport brands{' '}
          </h2>
          <p className='lato font-normal text-[28px] text-white leading-5'>
            Get in gym essentials{' '}
          </p>
          <button className='lato font-normal text-[36px] text-white leading-5 underline'>
            Exlopre all category
          </button>
        </div>
        <div>
          <Image src='/img/Rectangle.png' width={310} height={382} alt='img' />
        </div>
      </div>
    </>
  );
}
