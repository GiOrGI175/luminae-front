import Image from 'next/image';

export default function Card() {
  return (
    <button className='w-fit flex'>
      <Image src='/svg/Card.svg' width={24} height={24} alt='avatar' />
      <span className='ml-1 lato font-medium text-[14px] text-white'>Card</span>
      <div className='w-6 h-6 ml-2 rounded-full bg-[#3DC47E] '>
        <span className='lato font-medium text-[14px] text-white'>3</span>
      </div>
    </button>
  );
}
