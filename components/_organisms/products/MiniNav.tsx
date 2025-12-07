import Image from 'next/image';

export default function MiniNav() {
  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-[1440px] w-full flex justify-center px-5'>
        <div className='max-w-[1260px] h-[68px] w-full flex items-center'>
          <span>Homepage</span>
          <Image src='/svg/right2.svg' width={20} height={20} alt='arrow' />
          <span>women</span>
          <Image src='/svg/right2.svg' width={20} height={20} alt='arrow' />
          <span>clouthes</span>
        </div>
      </div>
    </div>
  );
}
